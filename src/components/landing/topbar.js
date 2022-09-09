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
  const [show, toggleShow] = useState(true);
  const [show1, toggleShow1] = useState(true);
  const [show2, toggleShow2] = useState(true);
  const [show3, toggleShow3] = useState(true);
  const [show4, toggleShow4] = useState(true);
  const [show5, toggleShow5] = useState(true);
  const [show6, toggleShow6] = useState(true);
  const [show7, toggleShow7] = useState(true);
  const [show8, toggleShow8] = useState(true);
  const [image11, toggleImage11] = useState(false);
  const [image12, toggleImage12] = useState(false);
  const [image13, toggleImage13] = useState(false);
  const [image14, toggleImage14] = useState(false);
  const [image21, toggleImage21] = useState(false);
  const [image22, toggleImage22] = useState(false);
  const [image23, toggleImage23] = useState(false);
  const [image24, toggleImage24] = useState(false);
  const [image25, toggleImage25] = useState(false);
  const [image26, toggleImage26] = useState(false);
  const [image27, toggleImage27] = useState(false);
  const [image28, toggleImage28] = useState(false);
  const [image31, toggleImage31] = useState(false);
  const [image32, toggleImage32] = useState(false);
  const [image33, toggleImage33] = useState(false);
  const [image34, toggleImage34] = useState(false);
  const [image35, toggleImage35] = useState(false);
  const [image41, toggleImage41] = useState(false);
  const [image42, toggleImage42] = useState(false);
  const [image43, toggleImage43] = useState(false);
  const [image44, toggleImage44] = useState(false);
  const [image45, toggleImage45] = useState(false);
  const [image46, toggleImage46] = useState(false);
  const [image51, toggleImage51] = useState(false);
  const [image52, toggleImage52] = useState(false);
  const [image53, toggleImage53] = useState(false);
  const [image54, toggleImage54] = useState(false);
  const [image55, toggleImage55] = useState(false);
  const [image56, toggleImage56] = useState(false);
  const [image57, toggleImage57] = useState(false);
  const [image58, toggleImage58] = useState(false);
  const [image61, toggleImage61] = useState(false);
  const [image62, toggleImage62] = useState(false);
  const [image63, toggleImage63] = useState(false);
  const [image64, toggleImage64] = useState(false);
  const [image65, toggleImage65] = useState(false);
  const [image66, toggleImage66] = useState(false);
  const [image71, toggleImage71] = useState(false);
  const [image72, toggleImage72] = useState(false);
  const [image73, toggleImage73] = useState(false);
  const [image74, toggleImage74] = useState(false);
  const [image75, toggleImage75] = useState(false);
  const [image76, toggleImage76] = useState(false);
  const [image77, toggleImage77] = useState(false);
  const [image78, toggleImage78] = useState(false);
  const [image81, toggleImage81] = useState(false);
  const [image82, toggleImage82] = useState(false);
  const [image83, toggleImage83] = useState(false);
  const [image84, toggleImage84] = useState(false);
  const [image91, toggleImage91] = useState(false);
  const [image92, toggleImage92] = useState(false);
  const [image93, toggleImage93] = useState(false);
  const [image94, toggleImage94] = useState(false);
  const [image95, toggleImage95] = useState(false);
  const [image96, toggleImage96] = useState(false);

  function selectAll() {
    let items = document.getElementsByName("acs");
    var count = document.getElementsByName("acs").length;
    let acval = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        acval = acval + 1;
      }
    }
    if (acval == count) {
      for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      }
    } else if (acval >= 0 ) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }

  function selectAll1() {
    let items = document.getElementsByName("acs1");
    var count = document.getElementsByName("acs1").length;
    let acval = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        acval = acval + 1;
      }
    }
    if (acval == count) {
      for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      }
    } else if (acval >= 0 ) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }

  function selectAll2() {
    let items = document.getElementsByName("acs2");
    var count = document.getElementsByName("acs2").length;
    let acval = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        acval = acval + 1;
      }
    }
    if (acval == count) {
      for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      }
    } else if (acval >= 0 ) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }
  function selectAll3() {
    let items = document.getElementsByName("acs3");
    var count = document.getElementsByName("acs3").length;
    let acval = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        acval = acval + 1;
      }
    }
    if (acval == count) {
      for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      }
    } else if (acval >= 0 ) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }

  function selectAll4() {
    let items = document.getElementsByName("acs4");
    var count = document.getElementsByName("acs4").length;
    let acval = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        acval = acval + 1;
      }
    }
    if (acval == count) {
      for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      }
    } else if (acval >= 0 ) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }

  function selectAll5() {
    let items = document.getElementsByName("acs5");
    var count = document.getElementsByName("acs5").length;
    let acval = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        acval = acval + 1;
      }
    }
    if (acval == count) {
      for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      }
    } else if (acval >= 0 ) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }

  function selectAll6() {
    let items = document.getElementsByName("acs6");
    var count = document.getElementsByName("acs6").length;
    let acval = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        acval = acval + 1;
      }
    }
    if (acval == count) {
      for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      }
    } else if (acval >= 0 ) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }

  function selectAll7() {
    let items = document.getElementsByName("acs7");
    var count = document.getElementsByName("acs7").length;
    let acval = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        acval = acval + 1;
      }
    }
    if (acval == count) {
      for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      }
    } else if (acval >= 0 ) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }

  function selectAll8() {
    let items = document.getElementsByName("acs8");
    var count = document.getElementsByName("acs8").length;
    let acval = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].checked == true) {
        acval = acval + 1;
      }
    }
    if (acval == count) {
      for (let i = 0; i < items.length; i++) {
      items[i].checked = false;
      }
    } else if (acval >= 0 ) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }

  useEffect(() => {
    async function myApiCall() {
      let { data } = await supabase.from("Checklist").select("*");
      Settext(data);
      // console.log(data, error);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApi() {
      let { data } = await supabase.from("Categories").select("*");
      Settext1(data);
      // console.log(data, error);
    }
    myApi();
  }, []);

  function update() {
    // const allcheck = document.querySelectorAll('.guidline');
    var count = document.getElementsByName("acs").length;
    var checked = document.querySelectorAll(".asd:checked").length;
    var percentage = parseInt((checked / count) * 100, 10);
    document.querySelector(".Aarzoo span").style.width = percentage + "%";
  }
  function update1() {
    // const allcheck = document.querySelectorAll('.guidline');
    var count = document.getElementsByName("acs1").length;
    var checked = document.querySelectorAll(".asd1:checked").length;
    var percentage = parseInt((checked / count) * 100, 10);
    document.querySelector(".Aarzoo1 span").style.width = percentage + "%";
  }
  function update2() {
    // const allcheck = document.querySelectorAll('.guidline');
    var count = document.getElementsByName("acs2").length;
    var checked = document.querySelectorAll(".asd2:checked").length;
    var percentage = parseInt((checked / count) * 100, 10);
    document.querySelector(".Aarzoo2 span").style.width = percentage + "%";
  }
  function update3() {
    // const allcheck = document.querySelectorAll('.guidline');
    var count = document.getElementsByName("acs3").length;
    var checked = document.querySelectorAll(".asd3:checked").length;
    var percentage = parseInt((checked / count) * 100, 10);
    document.querySelector(".Aarzoo3 span").style.width = percentage + "%";
  }
  function update4() {
    // const allcheck = document.querySelectorAll('.guidline');
    var count = document.getElementsByName("acs4").length;
    var checked = document.querySelectorAll(".asd4:checked").length;
    var percentage = parseInt((checked / count) * 100, 10);
    document.querySelector(".Aarzoo4 span").style.width = percentage + "%";
  }
  function update5() {
    // const allcheck = document.querySelectorAll('.guidline');
    var count = document.getElementsByName("acs5").length;
    var checked = document.querySelectorAll(".asd5:checked").length;
    var percentage = parseInt((checked / count) * 100, 10);
    document.querySelector(".Aarzoo5 span").style.width = percentage + "%";
  }
  function update6() {
    // const allcheck = document.querySelectorAll('.guidline');
    var count = document.getElementsByName("acs6").length;
    var checked = document.querySelectorAll(".asd6:checked").length;
    var percentage = parseInt((checked / count) * 100, 10);
    document.querySelector(".Aarzoo6 span").style.width = percentage + "%";
  }
  function update7() {
    // const allcheck = document.querySelectorAll('.guidline');
    var count = document.getElementsByName("acs7").length;
    var checked = document.querySelectorAll(".asd7:checked").length;
    var percentage = parseInt((checked / count) * 100, 10);
    document.querySelector(".Aarzoo7 span").style.width = percentage + "%";
  }
  function update8() {
    // const allcheck = document.querySelectorAll('.guidline');
    var count = document.getElementsByName("acs8").length;
    var checked = document.querySelectorAll(".asd8:checked").length;
    var percentage = parseInt((checked / count) * 100, 10);
    document.querySelector(".Aarzoo8 span").style.width = percentage + "%";
  }
  return (
    <>
      <header style={{ textAlign: "center", display: "inline-block" }}>
        <div className="topbar">
          <div className="menu">
            <HashLink to="#Homepage" className="but">
              <img
                className="menuimg"
                src={require("../../assets/images/Homepage.svg").default}
                alt="homepage"
              ></img>
              {text1.slice(0, 1).map((x) => (
                <strong>{x.Name}</strong>
              ))}
            </HashLink>
            <HashLink to="#Navigation" className="but">
              <img
                className="menuimg"
                src={require("../../assets/images/Navigation.svg").default}
                alt="homepage"
              ></img>
              {text1.slice(1, 2).map((x) => (
                <strong>{x.Name}</strong>
              ))}
            </HashLink>
            <HashLink to="#Search" className="but">
              <img
                className="menuimg"
                src={require("../../assets/images/Search.svg").default}
                alt="homepage"
              ></img>
              {text1.slice(2, 3).map((x) => (
                <strong>{x.Name}</strong>
              ))}
            </HashLink>
            <HashLink to="#ProductList" className="but">
              <img
                className="menuimg"
                src={require("../../assets/images/Product list.svg").default}
                alt="homepage"
              ></img>
              {text1.slice(3, 4).map((x) => (
                <strong>{x.Name}</strong>
              ))}
            </HashLink>
            <HashLink to="#ProductPage" className="but">
              <img
                className="menuimg"
                src={require("../../assets/images/Product page.svg").default}
                alt="homepage"
              ></img>
              {text1.slice(4, 5).map((x) => (
                <strong>{x.Name}</strong>
              ))}
            </HashLink>
            <HashLink to="#Cart" className="but">
              <img
                className="menuimg"
                src={require("../../assets/images/Cart.svg").default}
                alt="homepage"
              ></img>
              {text1.slice(5, 6).map((x) => (
                <strong>{x.Name}</strong>
              ))}
            </HashLink>
            <HashLink to="#Checkout" className="but">
              <img
                className="menuimg"
                src={require("../../assets/images/Checkout.svg").default}
                alt="homepage"
              ></img>
              {text1.slice(6, 7).map((x) => (
                <strong>{x.Name}</strong>
              ))}
            </HashLink>
            <HashLink to="#Account" className="but">
              <img
                className="menuimg"
                src={require("../../assets/images/Account.svg").default}
                alt="homepage"
              ></img>
              {text1.slice(7, 8).map((x) => (
                <strong>{x.Name}</strong>
              ))}
            </HashLink>
            <HashLink to="#Mobile" className="but">
              <img
                className="menuimg"
                src={require("../../assets/images/Mobile.svg").default}
                alt="homepage"
              ></img>
              {text1.slice(8, 9).map((x) => (
                <strong>{x.Name}</strong>
              ))}
            </HashLink>
          </div>
        </div>
      </header>

      <div className="parent">
        <ul className="UnoList">
          <div className="homediv1" id="Homepage">
            <div className="innerhome1">
              <div className="home1">
                <img
                  src={require("../../assets/images/Homepage.svg").default}
                  alt="homepage"
                ></img>
                <h3 className="heading">Homepage</h3>
                <div className="slider">
                  <div className="Aarzoo">
                    <span style={{ width: "0" }}></span>
                  </div>
                  <span>0</span>/4 completed
                </div>
              </div>
              <div>
                <button
                  className="butt1"
                  onClick={() => {
                    selectAll();
                    update();
                  }}
                >
                  <span className="sp1">Check All</span>
                </button>
                <button className="butt3" onClick={() => toggleShow(!show)}>
                  <span className="sp3">Hide</span>
                </button>
              </div>
            </div>
            {show && (
              <div className="innerhome2">
                <div className="home2">
                  <h5 className="header">Guidlines</h5>
                  <h5 className="header">Implementation</h5>
                  <h5 className="header">Impact</h5>
                </div>
                {text.slice(0, 1).map((x) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs"
                          className="guidline asd"
                          onClick={update}
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
                        onClick={() => toggleImage11(!image11)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image11 && (
                      <div className="divi">
                        {/* <img className="accoImg" src={x.Image} alt='homepage'></img>
                        <p style={{textAlign:"left"}}>{x.Description} <a href="#">Read more.</a></p> */}
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(1, 2).map((x) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs"
                          className="guidline asd"
                          onClick={update}
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
                        onClick={() => toggleImage12(!image12)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image12 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description}
                          <a href="#">Read more. </a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(2, 3).map((x) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs"
                          className="guidline asd"
                          onClick={update}
                        ></input>

                        <span className="span1">{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt3"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage13(!image13)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image13 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(3, 4).map((x) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs"
                          className="guidline asd"
                          onClick={update}
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
                        onClick={() => toggleImage14(!image14)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image14 && (
                      <div className="divi">
                        {/* <p style={{textAlign:"left"}}>{x.Description} <a href="#">Read more.</a></p> */}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </ul>
      </div>
      <div className="parent">
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
                {/* <button className="butt2" onClick={UnSelectAll1}>
                <span className="sp2">Uncheck All</span>
              </button> */}
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
                {text.slice(4, 5).map((x) => (
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
                        onClick={() => toggleImage21(!image21)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image21 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(5, 6).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage22(!image22)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image22 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(6, 7).map((x) => (
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
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage23(!image23)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image23 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(7, 8).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage24(!image24)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image24 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(8, 9).map((x) => (
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
                        <div className="iitt3">{x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage25(!image25)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image25 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(9, 10).map((x) => (
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
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage26(!image26)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image26 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(10, 11).map((x) => (
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
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage27(!image27)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image27 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(11, 12).map((x) => (
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
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage28(!image28)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image28 && (
                      <div className="divi">
                        <p style={{ textAlign: "left" }}>
                          {x.Description}
                          <a>Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </ul>
      </div>

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
                {text.slice(12, 13).map((x) => (
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
                        onClick={() => toggleImage31(!image31)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image31 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(13, 14).map((x) => (
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
                        <div className="iitt3"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage32(!image32)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image32 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(14, 15).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage33(!image33)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image33 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(15, 16).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage34(!image34)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image34 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(16, 17).map((x) => (
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
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage35(!image35)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image35 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
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
                {text.slice(17, 18).map((x) => (
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
                        onClick={() => toggleImage41(!image41)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image41 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          When the user hovers the carousel banner, he is
                          usually interested in its content and therefore
                          shouldn't be interrupted by banner switch.{" "}
                          <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(18, 19).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage42(!image42)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image42 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(19, 20).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage43(!image43)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image43 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(20, 21).map((x) => (
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
                        onClick={() => toggleImage44(!image44)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image44 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(21, 22).map((x) => (
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
                        <div className="iitt3"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage45(!image45)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image45 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(22, 23).map((x) => (
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
                        onClick={() => toggleImage46(!image46)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image46 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
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
                {text.slice(23, 24).map((x) => (
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
                        onClick={() => toggleImage51(!image51)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image51 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          When the user hovers the carousel banner, he is
                          usually interested in its content and therefore
                          shouldn't be interrupted by banner switch.{" "}
                          <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(24, 25).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage52(!image52)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image52 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(25, 26).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage53(!image53)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image53 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(26, 27).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage54(!image54)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image54 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(27, 28).map((x) => (
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
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage55(!image55)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image55 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(28, 29).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage56(!image56)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image56 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(29, 30).map((x) => (
                  <div>
                    <div className="Item">
                      <label className="item1">
                        <input
                          type="checkbox"
                          name="acs4"
                          className="guidline asd4"
                          onClick={update4}
                        ></input>

                        <span className="span1">I{x.Guidlines}</span>
                      </label>
                      <div className="item2">
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage57(!image57)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image57 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(30, 31).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage58(!image58)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image58 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
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
                {text.slice(31, 32).map((x) => (
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
                        onClick={() => toggleImage61(!image61)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image61 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          When the user hovers the carousel banner, he is
                          usually interested in its content and therefore
                          shouldn't be interrupted by banner switch.{" "}
                          <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(32, 33).map((x) => (
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
                        onClick={() => toggleImage62(!image62)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image62 && (
                      <div className="divi">
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
                    )}
                  </div>
                ))}
                {text.slice(33, 34).map((x) => (
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
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage63(!image63)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image63 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(34, 35).map((x) => (
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
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage64(!image64)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image64 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(35, 36).map((x) => (
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
                        onClick={() => toggleImage65(!image65)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image65 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(36, 37).map((x) => (
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
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage66(!image66)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image66 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
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
                {text.slice(37, 38).map((x) => (
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
                        onClick={() => toggleImage71(!image71)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image71 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          When the user hovers the carousel banner, he is
                          usually interested in its content and therefore
                          shouldn't be interrupted by banner switch.{" "}
                          <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(38, 39).map((x) => (
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
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage72(!image72)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image72 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(39, 40).map((x) => (
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
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt1">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage73(!image73)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image73 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(40, 41).map((x) => (
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
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage74(!image74)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image74 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(41, 42).map((x) => (
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
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage75(!image75)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image75 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(42, 43).map((x) => (
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
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage76(!image76)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image76 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(43, 44).map((x) => (
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
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage77(!image77)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image77 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(44, 45).map((x) => (
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
                        onClick={() => toggleImage78(!image78)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image78 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
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
                {text.slice(45, 46).map((x) => (
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
                        onClick={() => toggleImage81(!image81)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image81 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          When the user hovers the carousel banner, he is
                          usually interested in its content and therefore
                          shouldn't be interrupted by banner switch.{" "}
                          <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(46, 47).map((x) => (
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
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage82(!image82)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image82 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(47, 48).map((x) => (
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
                        <div className="iitt2"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage83(!image83)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image83 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(48, 49).map((x) => (
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
                        <div className="iitt3">{x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage84(!image84)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image84 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
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
                {text.slice(49, 50).map((x) => (
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
                        onClick={() => toggleImage91(!image91)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image91 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          When the user hovers the carousel banner, he is
                          usually interested in its content and therefore
                          shouldn't be interrupted by banner switch.{" "}
                          <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(50, 51).map((x) => (
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
                        onClick={() => toggleImage92(!image92)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image92 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(51, 52).map((x) => (
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
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage93(!image93)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image93 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(52, 53).map((x) => (
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
                        onClick={() => toggleImage94(!image94)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image94 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(53, 54).map((x) => (
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
                        onClick={() => toggleImage95(!image95)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image95 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
                {text.slice(54, 55).map((x) => (
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
                        <div className="iitt1"> {x.Implementation}</div>
                      </div>
                      <div className="item3">
                        <div className="iitt2"> {x.Impact}</div>
                      </div>
                      <button
                        className="accBut"
                        onClick={() => toggleImage96(!image96)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    {image96 && (
                      <div className="divi">
                        {" "}
                        <img
                          className="accoImg"
                          src={x.Image}
                          alt="homepage"
                        ></img>
                        <p style={{ textAlign: "left" }}>
                          {x.Description} <a href="#">Read more.</a>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </ul>
      </div>
    </>
  );
}

export default Topbar;
