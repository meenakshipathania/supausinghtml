import React, { useState, useEffect } from "react";
import "../../assets/css/main.css";
// import { HashLink } from "react-router-hash-link";
import { createClient } from "@supabase/supabase-js";
import { useParams } from "react-router-dom";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

function CatDetail() {
    const { name } = useParams();
    const [text, Settext] = useState([]);
    const [text1, Settext1] = useState([]);
    console.log(name);
function selectAll(data) {
    let acval = 0;
    for (let i = 0; i < data.elements.length; i++) {
      if (data.elements[i].isSelected === true) {
        acval = acval + 1;
      }
      update(data.elements[i], data);
    }
    if (acval === data.elements.length) {
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
    if (!allmobileDiv.style.display) {
      allmobileDiv.style.display = "block";
    } else if (allmobileDiv.style.display === "none") {
      allmobileDiv.style.display = "block";
    } else if (allmobileDiv.style.display === "block") {
      allmobileDiv.style.display = "none";
    }
  }

   useEffect(() => {
    async function myApiCall() {
      const { data } = await supabase.from("Checklist").select("*, Categories(Name,Image,Slug)");
      let group = data.reduce((r, a) => {
        r[a.category_id] = [...(r[a.category_id] || []), a];
        return r;
      }, {});
      const allKeys = Object.keys(group);
      let allDatawithCategories = [];
      for (let k = 0; k < allKeys.length; k++) {
        const valueData = group[allKeys[k]];
        let names = JSON.parse(JSON.stringify(valueData));        
        const filteredData = {
          name : allKeys[k],
          nammm : names && names[0].Categories ? names[0].Categories.Name : "",
          image : names && names[0].Categories ? names[0].Categories.Image : "",
          slug : names && names[0].Categories ? names[0].Categories.Slug : "",
          elements: valueData,
        };
        if(filteredData.name == name){
            allDatawithCategories.push(filteredData);
        }
        
      }
      Settext(allDatawithCategories);
    }
    myApiCall();
  }, []);

  useEffect(() => {
    async function myApi() {
      let { data } = await supabase.from("Categories").select("*");
      Settext1(data);
      // console.log(data);
    }
    myApi();
  }, []);

  function update(element, all) {
    if (element["isSelected"]) {
      element["isSelected"] = false;
    } else {
      element["isSelected"] = true;
    }
    const allselected = all.elements.filter((f) => f.isSelected === true);  
    var count = all.elements.length;
    var checked = allselected.length;
    var percentage = parseInt((checked / count) * 100, 10);
    const className = `.Aarzoo${all.name} span`;
    const InnerClass = `.checkbox${all.name}`;
    
    setTimeout(() => {
      document.querySelector(className).style.width = percentage + "%";
      const allInnerClass = document.querySelectorAll(`${InnerClass}`);
      console.log(allInnerClass)
      console.log(count)
      console.log(checked)
      if (count === checked) {
        allInnerClass.forEach((checkbox) => (checkbox.checked = true));
      } 
      if (checked === 0) {
        allInnerClass.forEach((checkbox) => (checkbox.checked = false));
      }
    }, 100);
  }

  function showHideDiv(x) {
    const clasName = `.homediv${x.name} .innerhome2`;    
    if (!document.querySelector(clasName).style.display) {      
      document.querySelector(clasName).style.display = "none";
    } else if (document.querySelector(clasName).style.display === "none") {
      document.querySelector(clasName).style.display = "block";
    } else if (document.querySelector(clasName).style.display === "block") {
      document.querySelector(clasName).style.display = "none";
    }
  }
  return (
    <>
      {text.map((x) => (
        <div className="parent menu">
          <ul className={`UnoList UnoList${x.name}`}>
            <div className={`homediv1 homediv${x.name}`} id={x.nammm}>
              <div className="innerhome1">
                <div className="home1">
                  <img src={x.image} alt="homepage"></img>
                  <h3 className="heading">{x.nammm}</h3>
                  <div className="slider">
                    <div className={`Aarzoo${x.name}`}>
                      <span style={{ width: "0" }}></span>
                    </div>
                    <span>0</span>/4 completed
                  </div>
                </div>
                <div>
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
                            className={`checkbox${x.name}`}
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
                  {/* <div className="morediv">
                    <button className="btn btn-primary morebtn">More...</button>
                  </div> */}
                </div>
            </div>
          </ul>
        </div>
      ))}
    </>
  );
}

export default CatDetail;
