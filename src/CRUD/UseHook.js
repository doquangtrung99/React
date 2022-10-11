import picture001 from '../images/ảnh01.png'
import picture002 from '../images/ảnh02.png'
import picture003 from '../images/ảnh03.png'
import picture004 from '../images/ảnh04.png'
import picture005 from '../images/ảnh05.png'
import picture006 from '../images/ảnh06.png'
import picture007 from '../images/ảnh07.png'
import picture008 from '../images/ảnh08.png'
import picture009 from '../images/ảnh09.png'
import picture0010 from '../images/ảnh010.png'
import picturebanner from '../images/picture.png'
import picture0011 from '../images/ảnh011.png'
import picture0012 from '../images/ảnh012.png'
import picture0013 from '../images/ảnh013.png'
import picture0014 from '../images/ảnh014.png'
import picture0015 from '../images/ảnh015.png'
import picture0016 from '../images/ảnh016.png'
import picture0017 from '../images/ảnh017.png'
import picture0018 from '../images/ảnh018.png'
import picture0019 from '../images/ảnh019.png'
import picture0020 from '../images/ảnh020.png'
import { FormattedMessage } from "react-intl";
// import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'


const UseHook = () => {
    const navigate = useNavigate();

    const Handledirect = () => {
        navigate('/singleproduct')
    }
    const handleaddtocart = () => {
        navigate('/cartproduct')

    }

    return (
        <div>
            <div className="ojb-wrapper">

                <div className="ojb-1">
                    <img alt="First slide" src={picturebanner}></img>
                </div>
                <div className="ojb-2">
                    <div className="ojb-2-top">
                        <span><FormattedMessage id="homepage.menu" /></span>
                    </div>
                    <div className="ojb-2-bottom">
                        <div className="ojb-2-bottom-up">
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture001}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.fashionmale" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture002}></img>

                                </div>
                                <div>
                                    <FormattedMessage id="homepage.phone" /> &amp; <br /> <FormattedMessage id="homepage.accessory" />

                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture003}></img>

                                </div>
                                <div>
                                    <FormattedMessage id="homepage.electronicdevice" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture004}></img>

                                </div>
                                <div>
                                    <FormattedMessage id="homepage.computer" /> &amp; <br /> Laptop
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture005}></img>

                                </div>
                                <div>
                                    <FormattedMessage id="homepage.camera" /> &amp; <FormattedMessage id="homepage.cinecamera" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture006}></img>

                                </div>
                                <div>
                                    <FormattedMessage id="homepage.wristwatch" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture007}></img>

                                </div>
                                <div>
                                    <FormattedMessage id="homepage.shoes" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture008}></img>

                                </div>
                                <div>
                                    <FormattedMessage id="homepage.appliant" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture009}></img>

                                </div>
                                <div>
                                    <FormattedMessage id="homepage.sport" /> &amp;  <FormattedMessage id="homepage.travel" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-wrap">
                                <div>
                                    <img alt="First slide" src={picture0010}></img>

                                </div>
                                <div>
                                    <FormattedMessage id="homepage.car" /> &amp; <FormattedMessage id="homepage.motorcycle" /> &amp; <FormattedMessage id="homepage.bicycle" />
                                </div>
                            </div>
                        </div>
                        <div className="ojb-2-bottom-down">
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0011}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.femalefashion" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0012}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.mother" /> &amp; <FormattedMessage id="homepage.baby" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0013}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.house" /> &amp; <FormattedMessage id="homepage.life" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0014}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.beauty" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0015}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.health" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0016}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.femaleshoes" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0017}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.femalewalletbag" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0018}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.accessory" /> &amp; <br /> <FormattedMessage id="homepage.jewelry" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0019}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.departmentstoreonline" />
                                </div>
                            </div>
                            <div className="ojb-2-bottom-up-down">
                                <div>
                                    <img alt="First slide" src={picture0020}></img>
                                </div>
                                <div>
                                    <FormattedMessage id="homepage.bookstore" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ojb-3">
                    <div className="product">
                        <div className="product-top">
                            <div className="cover">
                                <img alt="First slide" src={image1}  ></img>
                            </div>
                            <button className="add-to-cart" onClick={() => handleaddtocart()} >ADD TO CART</button>
                            <button className="view-details" onClick={() => Handledirect()}>VIEW DETAILS </button>
                        </div>
                        <div className="product-bottom">Áo khoác bóng <br /> chày dáng rộng thời trang cho nam nữ</div>
                    </div>

                    <div className="product">
                        <div className="product-top">
                            <div className="cover">
                                <img alt="First slide" src={image4}  ></img>
                            </div>
                            <button className="add-to-cart" onClick={() => handleaddtocart()} >ADD TO CART</button>
                            <button className="view-details" onClick={() => Handledirect()}>VIEW DETAILS </button>
                        </div>
                        <div className="product-bottom">Áo khoác bóng <br />chày dáng rộng thời trang cho nam nữ</div>
                    </div>

                    <div className="product">
                        <div className="product-top">
                            <div className="cover">
                                <img alt="First slide" src={image3}  ></img>
                            </div>
                            <button className="add-to-cart" onClick={() => handleaddtocart()} >ADD TO CART</button>
                            <button className="view-details" onClick={() => Handledirect()}>VIEW DETAILS </button>
                        </div>
                        <div className="product-bottom">Áo khoác bóng <br />chày dáng rộng thời trang cho nam nữ</div>
                    </div>

                    <div className="product">
                        <div className="product-top">
                            <div className="cover">
                                <img alt="First slide" src={image2}  ></img>
                            </div>
                            <button className="add-to-cart" onClick={() => handleaddtocart()} >ADD TO CART</button>
                            <button className="view-details" onClick={() => Handledirect()}>VIEW DETAILS </button>
                        </div>
                        <div className="product-bottom">Áo khoác bóng <br />chày dáng rộng thời trang cho nam nữ</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UseHook;