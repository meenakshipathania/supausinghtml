import React, { useState, useEffect } from "react";
import "../../assets/css/main.css";
import { HashLink } from "react-router-hash-link";
import { createClient } from "@supabase/supabase-js";
import $ from "jquery";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function Topbar() {
  const [text, Settext] = useState([]);
  const [text1, Settext1] = useState([]);
  const [text2, Settext2] = useState([]);
  const [text3, Settext3] = useState([]);
  const [text4, Settext4] = useState([]);
  const [text5, Settext5] = useState([]);
  const [text6, Settext6] = useState([]);
  const [text7, Settext7] = useState([]);
  const [text8, Settext8] = useState([]);
  const [text9, Settext9] = useState([]);
  const [show, toggleShow] = useState(true);
  const [show1, toggleShow1] = useState(true);
  const [show2, toggleShow2] = useState(true);
  const [show3, toggleShow3] = useState(true);
  const [show4, toggleShow4] = useState(true);
  const [show5, toggleShow5] = useState(true);
  const [show6, toggleShow6] = useState(true);
  const [show7, toggleShow7] = useState(true);
  const [show8, toggleShow8] = useState(true);

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
    } else if (acval >= 0) {
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
    } else if (acval >= 0) {
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
    } else if (acval >= 0) {
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
    } else if (acval >= 0) {
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
    } else if (acval >= 0) {
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
    } else if (acval >= 0) {
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
    } else if (acval >= 0) {
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
    } else if (acval >= 0) {
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
    } else if (acval >= 0) {
      for (let i = 0; i < items.length; i++) {
        items[i].checked = true;
      }
    }
  }
  function mobileImagesToggle9(i) {
    const allmobileDiv = document.querySelectorAll(".imageOuter9");
    allmobileDiv.forEach((divv, j) => {
      if (i === j) {
        if (divv.style.display === "none") {
          divv.style.display = "block";
        } else {
          divv.style.display = "none";
        }
      } else {
        divv.style.display = "none";
      }
    });
  }

  function mobileImagesToggle1(i) {
    const allmobileDiv = document.querySelectorAll(".imageOuter1");
    allmobileDiv.forEach((divv, j) => {
      if (i === j) {
        if (divv.style.display === "none") {
          divv.style.display = "block";
        } else {
          divv.style.display = "none";
        }
      } else {
        divv.style.display = "none";
      }
    });
  }

  function mobileImagesToggle2(i) {
    const allmobileDiv = document.querySelectorAll(".imageOuter2");
    allmobileDiv.forEach((divv, j) => {
      if (i === j) {
        if (divv.style.display === "none") {
          divv.style.display = "block";
        } else {
          divv.style.display = "none";
        }
      } else {
        divv.style.display = "none";
      }
    });
  }

  function mobileImagesToggle3(i) {
    const allmobileDiv = document.querySelectorAll(".imageOuter3");
    allmobileDiv.forEach((divv, j) => {
      if (i === j) {
        if (divv.style.display === "none") {
          divv.style.display = "block";
        } else {
          divv.style.display = "none";
        }
      } else {
        divv.style.display = "none";
      }
    });
  }

  function mobileImagesToggle4(i) {
    const allmobileDiv = document.querySelectorAll(".imageOuter4");
    allmobileDiv.forEach((divv, j) => {
      if (i === j) {
        if (divv.style.display === "none") {
          divv.style.display = "block";
        } else {
          divv.style.display = "none";
        }
      } else {
        divv.style.display = "none";
      }
    });
  }

  function mobileImagesToggle5(i) {
    const allmobileDiv = document.querySelectorAll(".imageOuter5");
    allmobileDiv.forEach((divv, j) => {
      if (i === j) {
        if (divv.style.display === "none") {
          divv.style.display = "block";
        } else {
          divv.style.display = "none";
        }
      } else {
        divv.style.display = "none";
      }
    });
  }

  function mobileImagesToggle6(i) {
    const allmobileDiv = document.querySelectorAll(".imageOuter6");
    allmobileDiv.forEach((divv, j) => {
      if (i === j) {
        if (divv.style.display === "none") {
          divv.style.display = "block";
        } else {
          divv.style.display = "none";
        }
      } else {
        divv.style.display = "none";
      }
    });
  }

  function mobileImagesToggle7(i) {
    const allmobileDiv = document.querySelectorAll(".imageOuter7");
    allmobileDiv.forEach((divv, j) => {
      if (i === j) {
        if (divv.style.display === "none") {
          divv.style.display = "block";
        } else {
          divv.style.display = "none";
        }
      } else {
        divv.style.display = "none";
      }
    });
  }

  function mobileImagesToggle8(i) {
    const allmobileDiv = document.querySelectorAll(".imageOuter8");
    allmobileDiv.forEach((divv, j) => {
      if (i === j) {
        if (divv.style.display === "none") {
          divv.style.display = "block";
        } else {
          divv.style.display = "none";
        }
      } else {
        divv.style.display = "none";
      }
    });
  }

  useEffect(() => {
    async function myApiCall() {
      // let { data } = await supabase.from("Checklist").select("*");
      const { data, error } = await supabase
        .from("Checklist")
        .select("*")
        .eq("category_id", "1");
      Settext(data);
      // console.log(data, error);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApiCall() {
      // let { data } = await supabase.from("Checklist").select("*");
      const { data, error } = await supabase
        .from("Checklist")
        .select("*")
        .eq("category_id", "2");
      Settext2(data);
      // console.log(data, error);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApiCall() {
      const { data, error } = await supabase
        .from("Checklist")
        .select("*")
        .eq("category_id", "3");
      Settext3(data);
      // console.log(data, error);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApiCall() {
      const { data, error } = await supabase
        .from("Checklist")
        .select("*")
        .eq("category_id", "4");
      Settext4(data);
      // console.log(data, error);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApiCall() {
      const { data, error } = await supabase
        .from("Checklist")
        .select("*")
        .eq("category_id", "5");
      Settext5(data);
      // console.log(data, error);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApiCall() {
      const { data, error } = await supabase
        .from("Checklist")
        .select("*")
        .eq("category_id", "6");
      Settext6(data);
      // console.log(data, error);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApiCall() {
      const { data, error } = await supabase
        .from("Checklist")
        .select("*")
        .eq("category_id", "7");
      Settext7(data);
      // console.log(data, error);
    }
    myApiCall();
  }, []);
  useEffect(() => {
    async function myApiCall() {
      const { data, error } = await supabase
        .from("Checklist")
        .select("*")
        .eq("category_id", "8");
      Settext8(data);
      // console.log(data, error);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApiCall() {
      const { data, error } = await supabase
        .from("Checklist")
        .select("*")
        .eq("category_id", "9");
      Settext9(data);
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
          {text1.map((x) => (
            <HashLink to={x.Slug} className="but">
              <img
                className="menuimg"
                src={x.Image}
                alt="homepage"
              ></img>
                <strong>{x.Name}</strong>
            </HashLink>
             ))}
            {/* <HashLink to="#Navigation" className="but">
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
            </HashLink> */}
           
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
                {text.map((x, i) => (
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
                        onClick={() => mobileImagesToggle1(i)}
                      >
                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="divi imageOuter1">
                      <img
                        className="accoImg"
                        src={x.Image}
                        alt="homepage"
                      ></img>
                      <p style={{ textAlign: "left" }}>
                        {x.Description} <a href="#">Read more.</a>
                      </p>
                    </div>
                  </div>
                ))}
                 {/* <div className="morediv"><button className="btn btn-primary morebtn">More...</button></div> */}
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
                 {/* <div className="morediv"><button className="btn btn-primary morebtn">More...</button></div> */}
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
                    {/* {image91 && ( */}
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
                    {/* )}  */}
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
    </>
  );
}

export default Topbar;
