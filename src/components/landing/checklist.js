import React from 'react';
import '../../assets/css/main.css'
// import axios from 'axios';
// import StickyMenu from '../../lib/StickyMenu';
// import Navigation from '../Navigation';

function Checklist() {
    return (
        <>
            <ul className='UnoList'>
                <div className='homediv1' id="Homepage">
                    <div className='innerhome1'>
                        <div className='home1'>
                        <img src={require('../../assets/images/Homepage.svg').default} alt='homepage'></img>
                        <h3 className='heading'>Homepage</h3>
                        <div className='slider'>
                            <div className='Aarzoo'>
                                <span style={{width:"0px"}}></span>
                            </div>
                            0/4 completed
                        </div>
                        </div>
                        <div>
                            <button className='butt1'>
                                <span className='sp1'>Check All</span>
                            </button>
                            <button className='butt2'>
                            <span className='sp2'>Uncheck All</span>
                            </button>
                            <button className='butt3'>
                            <span className='sp3'>Hide</span>
                            </button>
                        </div>
                    </div>
                    <div className='innerhome2'>
                        <div className='home2'>
                            <h5 className='header'>Guidlines</h5>
                            <h5 className='header'>Implementation</h5>
                            <h5 className='header'>Impact</h5>
                        </div>
                        <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Display clear value proposition above the fold</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show the breadth of the product catalog on homepage</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.2.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Personalize homepage content</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt3'> Hard</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.3.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Stop autorotating carousel on hover or after any user interaction with it</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'>Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>


                    </div>
                </div>
            </ul>

            <ul className='UnoList'>
                <div className='homediv1' id="Homepage">
                    <div className='innerhome1'>
                        <div className='home1'>
                        <img src={require('../../assets/images/Navigation.svg').default} alt='homepage'></img>
                        <h3 className='heading'>Navigation</h3>
                        <div className='slider'>
                            <div className='Aarzoo'>
                                <span style={{width:"0px"}}></span>
                            </div>
                            0/8 completed
                        </div>
                        </div>
                        <div>
                            <button className='butt1'>
                                <span className='sp1'>Check All</span>
                            </button>
                            <button className='butt2'>
                            <span className='sp2'>Uncheck All</span>
                            </button>
                            <button className='butt3'>
                            <span className='sp3'>Hide</span>
                            </button>
                        </div>
                    </div>
                    <div className='innerhome2'>
                        <div className='home2'>
                            <h5 className='header'>Guidlines</h5>
                            <h5 className='header'>Implementation</h5>
                            <h5 className='header'>Impact</h5>
                        </div>
                        <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Make parent categories clickable</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'>Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Navigation hierarchy should be reflected visually</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.2.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Avoid site-specific category namingt</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.3.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show “New” and “Sale” as separate categories</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show popular filters as subcategories</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt3'>Hard</div>
                                    
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Display key contact information</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Display store or location icon (if offline sales is important)</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Logo should always link to homepage</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>


                    </div>
                </div>
            </ul>

            <ul className='UnoList'>
                <div className='homediv1' id="Homepage">
                    <div className='innerhome1'>
                        <div className='home1'>
                        <img src={require('../../assets/images/Search.svg').default} alt='homepage'></img>
                        <h3 className='heading'>Search</h3>
                        <div className='slider'>
                            <div className='Aarzoo'>
                                <span style={{width:"0px"}}></span>
                            </div>
                            0/5 completed
                        </div>
                        </div>
                        <div>
                            <button className='butt1'>
                                <span className='sp1'>Check All</span>
                            </button>
                            <button className='butt2'>
                            <span className='sp2'>Uncheck All</span>
                            </button>
                            <button className='butt3'>
                            <span className='sp3'>Hide</span>
                            </button>
                        </div>
                    </div>
                    <div className='innerhome2'>
                        <div className='home2'>
                            <h5 className='header'>Guidlines</h5>
                            <h5 className='header'>Implementation</h5>
                            <h5 className='header'>Impact</h5>
                        </div>
                        <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Make search box prominent</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Use autocomplete with error-correction</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt3'> Hard</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.2.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show search history</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.3.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Avoid zero results pages</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Display the total number of results</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </ul>

            <ul className='UnoList'>
                <div className='homediv1' id="Homepage">
                    <div className='innerhome1'>
                        <div className='home1'>
                        <img src={require('../../assets/images/Product list.svg').default} alt='homepage'></img>
                        <h3 className='heading'>Product list</h3>
                        <div className='slider'>
                            <div className='Aarzoo'>
                                <span style={{width:"0px"}}></span>
                            </div>
                            0/6 completed
                        </div>
                        </div>
                        <div>
                            <button className='butt1'>
                                <span className='sp1'>Check All</span>
                            </button>
                            <button className='butt2'>
                            <span className='sp2'>Uncheck All</span>
                            </button>
                            <button className='butt3'>
                            <span className='sp3'>Hide</span>
                            </button>
                        </div>
                    </div>
                    <div className='innerhome2'>
                        <div className='home2'>
                            <h5 className='header'>Guidlines</h5>
                            <h5 className='header'>Implementation</h5>
                            <h5 className='header'>Impact</h5>
                        </div>
                        <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Use visual indicators to highlight new, exclusive, top selling or items on sale</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Display product variations such as available colors, styles or options</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.2.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show additional product details on hover</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.3.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Order filters by importance, not alphabetically</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show number of matches for each filtering value</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt3'> Hard</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Display all applied filters both as summary at the top of the page and in their original position</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </ul>

            <ul className='UnoList'>
                <div className='homediv1' id="Homepage">
                    <div className='innerhome1'>
                        <div className='home1'>
                        <img src={require('../../assets/images/Product page.svg').default} alt='homepage'></img>
                        <h3 className='heading'>Product page</h3>
                        <div className='slider'>
                            <div className='Aarzoo'>
                                <span style={{width:"0px"}}></span>
                            </div>
                            0/8 completed
                        </div>
                        </div>
                        <div>
                            <button className='butt1'>
                                <span className='sp1'>Check All</span>
                            </button>
                            <button className='butt2'>
                            <span className='sp2'>Uncheck All</span>
                            </button>
                            <button className='butt3'>
                            <span className='sp3'>Hide</span>
                            </button>
                        </div>
                    </div>
                    <div className='innerhome2'>
                        <div className='home2'>
                            <h5 className='header'>Guidlines</h5>
                            <h5 className='header'>Implementation</h5>
                            <h5 className='header'>Impact</h5>
                        </div>
                        <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show no less than 3-5 high-quality images for all products</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt3'> Hard</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Use thumbnails, not indicators to show product images</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.2.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Avoid dropdowns and show individual buttons for each available color, size etc.</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.3.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Provide size chart with a measuring guide and international conversions</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show model size and fits</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Suggest alternative and supplementary products</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Indicate already purchased products</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Promote alternatives if a product is permanently unavailable</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>


                    </div>
                </div>
            </ul>

            <ul className='UnoList'>
                <div className='homediv1' id="Homepage">
                    <div className='innerhome1'>
                        <div className='home1'>
                        <img src={require('../../assets/images/Cart.svg').default} alt='homepage'></img>
                        <h3 className='heading'>Cart</h3>
                        <div className='slider'>
                            <div className='Aarzoo'>
                                <span style={{width:"0px"}}></span>
                            </div>
                            0/6 completed
                        </div>
                        </div>
                        <div>
                            <button className='butt1'>
                                <span className='sp1'>Check All</span>
                            </button>
                            <button className='butt2'>
                            <span className='sp2'>Uncheck All</span>
                            </button>
                            <button className='butt3'>
                            <span className='sp3'>Hide</span>
                            </button>
                        </div>
                    </div>
                    <div className='innerhome2'>
                        <div className='home2'>
                            <h5 className='header'>Guidlines</h5>
                            <h5 className='header'>Implementation</h5>
                            <h5 className='header'>Impact</h5>
                        </div>
                        <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show dropdown cart or pop-up instead of redirecting to cart after a user adds an item</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Allow users to edit item in cart</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.2.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Allow users to move items to favorites or wishlist</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.3.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show similar items or favorites for upsell in cart</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show total cost (including shipping, taxes and fees)e</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Consider offering free shipping on a certain amount</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </ul>

            <ul className='UnoList'>
                <div className='homediv1' id="Homepage">
                    <div className='innerhome1'>
                        <div className='home1'>
                        <img src={require('../../assets/images/Checkout.svg').default} alt='homepage'></img>
                        <h3 className='heading'>Checkout</h3>
                        <div className='slider'>
                            <div className='Aarzoo'>
                                <span style={{width:"0px"}}></span>
                            </div>
                            0/8 completed
                        </div>
                        </div>
                        <div>
                            <button className='butt1'>
                                <span className='sp1'>Check All</span>
                            </button>
                            <button className='butt2'>
                            <span className='sp2'>Uncheck All</span>
                            </button>
                            <button className='butt3'>
                            <span className='sp3'>Hide</span>
                            </button>
                        </div>
                    </div>
                    <div className='innerhome2'>
                        <div className='home2'>
                            <h5 className='header'>Guidlines</h5>
                            <h5 className='header'>Implementation</h5>
                            <h5 className='header'>Impact</h5>
                        </div>
                        <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Always allow a user to complete checkout as a guest</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Limit exit points during checkout</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.2.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Place labels above input fields</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.3.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Avoid multi-column layouts</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show progress bar if there are more than 2 steps in checkout</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Auto-format spaces in credit card number</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Show tooltip of the card security code placement</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Allow users to create account after checkout</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </ul>

            <ul className='UnoList'>
                <div className='homediv1' id="Homepage">
                    <div className='innerhome1'>
                        <div className='home1'>
                        <img src={require('../../assets/images/Account.svg').default} alt='homepage'></img>
                        <h3 className='heading'>Account</h3>
                        <div className='slider'>
                            <div className='Aarzoo'>
                                <span style={{width:"0px"}}></span>
                            </div>
                            0/4 completed
                        </div>
                        </div>
                        <div>
                            <button className='butt1'>
                                <span className='sp1'>Check All</span>
                            </button>
                            <button className='butt2'>
                            <span className='sp2'>Uncheck All</span>
                            </button>
                            <button className='butt3'>
                            <span className='sp3'>Hide</span>
                            </button>
                        </div>
                    </div>
                    <div className='innerhome2'>
                        <div className='home2'>
                            <h5 className='header'>Guidlines</h5>
                            <h5 className='header'>Implementation</h5>
                            <h5 className='header'>Impact</h5>
                        </div>
                        <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Display the benefits of creating an account</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Display all password requirements upfront</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.2.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Include “Unsubscribe from all” button, if there are multiple newsletters</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.3.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Make default address label prominent</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt3'>Low</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </ul>

            <ul className='UnoList'>
                <div className='homediv1' id="Homepage">
                    <div className='innerhome1'>
                        <div className='home1'>
                        <img src={require('../../assets/images/Mobile.svg').default} alt='homepage'></img>
                        <h3 className='heading'>Mobile</h3>
                        <div className='slider'>
                            <div className='Aarzoo'>
                                <span style={{width:"0px"}}></span>
                            </div>
                            0/6 completed
                        </div>
                        </div>
                        <div>
                            <button className='butt1'>
                                <span className='sp1'>Check All</span>
                            </button>
                            <button className='butt2'>
                            <span className='sp2'>Uncheck All</span>
                            </button>
                            <button className='butt3'>
                            <span className='sp3'>Hide</span>
                            </button>
                        </div>
                    </div>
                    <div className='innerhome2'>
                        <div className='home2'>
                            <h5 className='header'>Guidlines</h5>
                            <h5 className='header'>Implementation</h5>
                            <h5 className='header'>Impact</h5>
                        </div>
                        <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Support mobile gestures</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Display order summary at the top of the checkout page</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.2.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Match the keyboard with input type</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.3.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Allow users to scan credit card</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Determine delivery costs by asking the user’s current location</span>
                                </label>
                                <div className='item2'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt1'>High</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div className='Item'>
                                <label className='item1'>
                                    <div className='inneritem1'>
                                    <input type="checkbox" class="guidline"></input>
                                    {/* <div className='extra'></div> */}
                                    </div>
                                    <span class="span1">Deemphasize or don't show “Install app” banner</span>
                                </label>
                                <div className='item2'>
                                    <div className='iitt1'> Easy</div>
                                </div>
                                <div className='item3'>
                                <div className='iitt2'> Medium</div>
                                </div>
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header" id="headingOne">
                                        <button className="accordion-button accBut" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                                        </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                        <img className="accoImg" src={require('../../assets/images/image1.1.jpg')} alt='homepage'></img>
                                        </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </ul>
        </>
    );
}

export default Checklist;
