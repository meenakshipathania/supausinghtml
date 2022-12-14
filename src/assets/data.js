import React, { useState, useEffect } from "react";
import "../../assets/css/main.css";
import { HashLink } from "react-router-hash-link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Topbar() {
  const [text, Settext] = useState([]);
  const [text1, Settext1] = useState([]);

  function selectAll(data) {
    let acval = 0;
    for (let i = 0; i < data.elements.length; i++) {
      if (data.elements[i].isSelected == true) {
        acval = acval + 1;
      }
      update(data.elements[i], data);
    }
    if (acval == data.elements.length) {
      for (let i = 0; i < data.elements.length; i++) {
        data.elements[i].isSelected = false;
      }
    } else if (acval >= 0) {
      for (let i = 0; i < data.elements.length; i++) {
        data.elements[i].isSelected = true;
      }
    }
  }

  function mobileImagesToggle(i) {
    const namee = i.Guidlines.split(" ").join("").split(",").join("").split(".").join("");
    let ClName = `.imageOuter${namee}`;
    const allmobileDiv = document.querySelector(ClName);
    console.log(allmobileDiv)
    if (!allmobileDiv.style.display) {
      allmobileDiv.style.display = "block";
    } else if (allmobileDiv.style.display == "none") {
      allmobileDiv.style.display = "block";
    } else if (allmobileDiv.style.display == "block") {
      allmobileDiv.style.display = "none";
    }
  }

   useEffect(() => {
    async function myApiCall() {
      const { data, error } = await supabase.from("Checklist").select("*");
      // .eq("category_id", "1");
      let group = data.reduce((r, a) => {
        r[a.category_id] = [...(r[a.category_id] || []), a];
        return r;
      }, {});
      const allKeys = Object.keys(group);
      let allDatawithCategories = [];
      for (let k = 0; k < allKeys.length; k++) {
        const valueData = group[allKeys[k]];
        const filteredData = {
          name: allKeys[k],
          elements: valueData,
        };
        allDatawithCategories.push(filteredData);
      }
      Settext(allDatawithCategories);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApi() {
      let { data } = await supabase.from("Categories").select("*");
      Settext1(data);
      console.log(data);
    }
    myApi();
  }, []);

  function update(element, all) {
    if (element["isSelected"]) {
      element["isSelected"] = false;
    } else {
      element["isSelected"] = true;
    }
    console.log(element)
    const allselected = all.elements.filter((f) => f.isSelected === true);  
    var count = all.elements.length;
    var checked = allselected.length;
    var percentage = parseInt((checked / count) * 100, 10);
    const className = `.Aarzoo${all.name} span`;
    const InnerClass = `.checkbox${all.name}`;
    
    setTimeout(() => {
      document.querySelector(className).style.width = percentage + "%";
      const allInnerClass = document.querySelectorAll(`${InnerClass}`);
      if (count == checked) {
        allInnerClass.forEach((checkbox) => (checkbox.checked = true));
      } 
      if (checked == 0) {
        allInnerClass.forEach((checkbox) => (checkbox.checked = false));
      }
    }, 100);
  }

  function showHideDiv(x) {
    const clasName = `.homediv${x.name} .innerhome2`;    
    if (!document.querySelector(clasName).style.display) {      
      document.querySelector(clasName).style.display = "none";
    } else if (document.querySelector(clasName).style.display == "none") {
      document.querySelector(clasName).style.display = "block";
    } else if (document.querySelector(clasName).style.display == "block") {
      document.querySelector(clasName).style.display = "none";
    }
  }

  return (
    <>
      <header style={{ textAlign: "center", display: "inline-block" }}>
        <div className="topbar">
          <div className="menu">
            {text1.map((x) => (
              <HashLink to={x.Slug} className="but">
                <img className="menuimg" src={x.Image} alt="homepage"></img>
                <strong>{x.Name}</strong>
              </HashLink>
            ))}
          </div>
        </div>
      </header>

      {text.map((x) => (
        <div className="parent">
          <ul className={`UnoList UnoList${x.name}`}>
            <div className={`homediv1 homediv${x.name}`} id={x.name}>
              <div className="innerhome1">
                <div className="home1">
                  {text1.map((j)=>(
                  <img src={j.Image} alt="homepage"></img>))}
                  <h3 className="heading">{x.name}</h3>
                  <div className="slider">
                    <div className={`Aarzoo${x.name}`}>
                      <span style={{ width: "0" }}></span>
                    </div>
                    <span>0</span>/4 completed
                  </div>
                </div>
                <div>namee
                  <button
                    className="butt1"
                    onClick={() => {
                      selectAll(x);
                    }}
                  >
                    <span className="sp1">Check All</span>
                  </button>
                  <button
                    className="butt3"
                    onClick={() => {
                      showHideDiv(x);
                    }}
                  >
                    <span className="sp3">Hide</span>
                  </button>
                </div>
              </div>
                <div className="innerhome2">
                  <div className="home2">
                    <h5 className="header">Guidlines</h5>
                    <h5 className="header">Implementation</h5>
                    <h5 className="header">Impact</h5>
                  </div>
                  {x.elements.map((e, i) => (
                    <div>
                      <div className="Item">
                        <label className="item1">
                          <input
                            type="checkbox"
                            name="acs"
                            className={`checkbox${x.Guidlines ? x.Guidlines.split(" ").join("").split(",").join("").split(".").join("") : ''}`}
                            onClick={() => update(e, x)}
                            value={x.isSelected}
                          ></input>
                          <span className="span1">{e.Guidlines}</span>
                        </label>
                        <div className="item2">
                          <div className="iitt1"> {e.Implementation}</div>
                        </div>
                        <div className="item3">
                          <div className="iitt1">{e.Impact}</div>
                        </div>
                        <button
                          className="accBut"
                          onClick={() => {
                            mobileImagesToggle(e);
                          }}
                        >
                          <i
                            className="fa fa-angle-down"
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                      <div
                        className={`divi imageOuter1 imageOuter${e.Guidlines.split(" ").join("").split(",").join("").split(".").join("")}`}
                      >
                        <img
                          className={`accoImg accoImg${x.name}`}
                          src={e.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {e.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    </div>
                  ))}
                  <div className="morediv">
                    <button className="btn btn-primary morebtn">More...</button>
                  </div>
                </div>
            </div>
          </ul>
        </div>
      ))}

      {/* <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Navigation">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Navigation.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Navigation</h3>
                <div className="slider">
                  <div className="Aarzoo1">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/8 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll1();
                    update1();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow1(!show1)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show1 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text2.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs1"
                          className="guidline asd1"
                          onClick={update1}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle2(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter2">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div> */}
      {/* 
      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Search">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Search.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Search</h3>
                <div className="slider">
                  <div className="Aarzoo2">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/5 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll2();
                    update2();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow2(!show2)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show2 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text3.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs2"
                          className="guidline asd2"
                          onClick={update2}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt1">{x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle3(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter3">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="ProductList">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Product list.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Product list</h3>
                <div className="slider">
                  <div className="Aarzoo3">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/6 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll3();
                    update3();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow3(!show3)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show3 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text4.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs3"
                          className="guidline asd3"
                          onClick={update3}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle4(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter4">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="ProductPage">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Product page.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Product page</h3>
                <div className="slider">
                  <div className="Aarzoo4">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/8 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll4();
                    update4();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow4(!show4)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show4 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text5.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs4"
                          className="guidline asd4"
                          onClick={update4}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt3">{x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle5(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter5">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Cart">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Cart.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Cart</h3>
                <div className="slider">
                  <div className="Aarzoo5">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/6 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll5();
                    update5();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow5(!show5)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show5 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text6.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs5"
                          className="guidline asd5"
                          onClick={update5}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle6(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter6">
                      {" "}
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        When the user hovers the carousel banner, he is usually
                        interested in its content and therefore shouldn't be
                        interrupted by banner switch. <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Checkout">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Checkout.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Checkout</h3>
                <div className="slider">
                  <div className="Aarzoo6">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/8 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll6();
                    update6();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow6(!show6)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show6 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text7.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs6"
                          className="guidline asd6"
                          onClick={update6}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle7(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter7">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Account">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Account.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Account</h3>
                <div className="slider">
                  <div className="Aarzoo7">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/4 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll7();
                    update7();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow7(!show7)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show7 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text8.map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs7"
                          className="guidline asd7"
                          onClick={update7}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle8(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter8">
                      {" "}
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                 {/* <div className="morediv"><button className="btn btn-primary morebtn">More...</button></div> *
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Mobile">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Mobile.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Mobile</h3>
                <div className="slider">
                  <div className="Aarzoo8">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/6 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll8();
                    update8();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow8(!show8)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show8 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text9.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs8"
                          className="guidline asd8"
                          onClick={update8}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        id="bbttnn1"
                        onClick={() => mobileImagesToggle9(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter9 " id="myImg">
                      {" "}
                      <img
                        className="accoImg CanHide"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                    {/* )} 
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div> */}
    </>
  );
}

export default Topbar;



 {/* <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Navigation">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Navigation.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Navigation</h3>
                <div className="slider">
                  <div className="Aarzoo1">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/8 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll1();
                    update1();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow1(!show1)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show1 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text2.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs1"
                          className="guidline asd1"
                          onClick={update1}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle2(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter2">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div> */}
      {/* 
      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Search">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Search.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Search</h3>
                <div className="slider">
                  <div className="Aarzoo2">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/5 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll2();
                    update2();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow2(!show2)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show2 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text3.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs2"
                          className="guidline asd2"
                          onClick={update2}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt1">{x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle3(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter3">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="ProductList">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Product list.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Product list</h3>
                <div className="slider">
                  <div className="Aarzoo3">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/6 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll3();
                    update3();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow3(!show3)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show3 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text4.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs3"
                          className="guidline asd3"
                          onClick={update3}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle4(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter4">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="ProductPage">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Product page.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Product page</h3>
                <div className="slider">
                  <div className="Aarzoo4">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/8 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll4();
                    update4();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow4(!show4)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show4 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text5.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs4"
                          className="guidline asd4"
                          onClick={update4}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt3">{x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle5(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter5">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Cart">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Cart.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Cart</h3>
                <div className="slider">
                  <div className="Aarzoo5">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/6 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll5();
                    update5();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow5(!show5)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show5 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text6.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs5"
                          className="guidline asd5"
                          onClick={update5}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle6(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter6">
                      {" "}
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        When the user hovers the carousel banner, he is usually
                        interested in its content and therefore shouldn't be
                        interrupted by banner switch. <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Checkout">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Checkout.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Checkout</h3>
                <div className="slider">
                  <div className="Aarzoo6">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/8 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll6();
                    update6();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow6(!show6)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show6 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text7.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs6"
                          className="guidline asd6"
                          onClick={update6}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle7(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter7">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Account">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Account.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Account</h3>
                <div className="slider">
                  <div className="Aarzoo7">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/4 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll7();
                    update7();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow7(!show7)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show7 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text8.map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs7"
                          className="guidline asd7"
                          onClick={update7}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => mobileImagesToggle8(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter8">
                      {" "}
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                 {/* <div className="morediv"><button className="btn btn-primary morebtn">More...</button></div> *
              </div>
            )}
          </div>
        </ul>
      </div>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Mobile">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Mobile.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Mobile</h3>
                <div className="slider">
                  <div className="Aarzoo8">
                    <span style={{ width: "0px" }}></span>
                  </div>
                  0/6 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll8();
                    update8();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow8(!show8)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show8 && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text9.slice(0, 4).map((x, i) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs8"
                          className="guidline asd8"
                          onClick={update8}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        id="bbttnn1"
                        onClick={() => mobileImagesToggle9(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter9 " id="myImg">
                      {" "}
                      <img
                        className="accoImg CanHide"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description}
                        <a href="#">Read more.</a>
                      </p>
                    </div>
                    {/* )} 
                  </div>
                ))}
                <div className="morediv">
                  <button className="btn btn-primary morebtn">More...</button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </div> */}
