import React from "react";
import './Homepage.scss'
import Carousel from 'react-bootstrap/Carousel';
import picture1 from '../images/shopee-icon-10.jpg'
import picture01 from '../images/ảnh1.png'
import picture02 from '../images/ảnh2.png'
import picture03 from '../images/ảnh3.png'
import picture04 from '../images/ảnh4.png'
import picture05 from '../images/ảnh5.png'
import picture06 from '../images/ảnh6.png'
import picture07 from '../images/ảnh7.png'
import picture08 from '../images/ảnh8.png'
import picture09 from '../images/ảnh9.png'
import banner from '../images/banner.png'
import banner1 from '../images/banner1.png'
import { connect } from 'react-redux';
import { FormattedMessage } from "react-intl";
import { changelanguage } from '../Redux/action'
import UseHook from "./UseHook";
class Homepage extends React.Component {
    state = {
        language: false,
    }
    changelanguage = (language) => {
        this.props.changinglanguage(language)
        if (language === 'vi') {
            this.setState({
                language: false
            })
        } else {
            this.setState({
                language: true
            })
        }
    }



    render() {
        let { language } = this.state
        console.log(this.state)
        return (
            <>
                <div className="Header-container">
                    <div className="content-top">
                        <div className="content-top-left">
                            <div><FormattedMessage id="homepage.channel" /></div>
                            <div>|</div>
                            <div><FormattedMessage id="homepage.seller" /></div>
                            <div>|</div>
                            <div><FormattedMessage id="homepage.download" /></div>
                            <div>|</div>
                            <div><FormattedMessage id="homepage.connect" /></div>
                            <div className="dropdown-icon">
                                <i className="fab fa-facebook"></i>
                                <div className="content-dropdown-icon">
                                    <span className="fb"><FormattedMessage id="homepage.facebook" /></span>
                                </div>
                            </div>
                            <div className="dropdown-icon-insta">
                                <i className="fab fa-instagram-square"></i>
                                <div className="content-dropdown-icon-insta">
                                    <span className="insta"><FormattedMessage id="homepage.instagram" /></span>
                                </div>
                            </div>

                        </div>
                        <div className="content-top-right">
                            <div className="icon-notification">
                                <div><i className="far fa-bell"></i></div>
                                <div><FormattedMessage id="homepage.notify" /></div>
                            </div>
                            <div className="icon-support">
                                <div><i className="far fa-question-circle"></i></div>
                                <div><FormattedMessage id="homepage.support" /></div>
                            </div>
                            <div className="icon-language">
                                <div><i className="fas fa-globe"></i></div>
                                <div className="dropdown">
                                    {language === true ? <div style={{ fontWeight: "bold" }}>English</div> : <div style={{ fontWeight: "bold" }}>Tiếng Việt</div>}
                                    <div className="dropdown-content">
                                        <p className="vietnamese" onClick={() => this.changelanguage('vi')}>Tiếng Việt</p>
                                        <p className="english" onClick={() => this.changelanguage('en')}>English</p>
                                    </div>
                                </div>

                            </div>
                            <div><FormattedMessage id="homepage.signup" /></div>
                            <div>|</div>
                            <div><a href="http://localhost:3000/login" ><FormattedMessage id="homepage.signin" /></a></div>
                        </div>
                    </div>
                    <div className="content-bottom">
                        <div className="content-bottom-left">
                        </div>
                        <div className="content-bottom-center">
                            <div className="content-bottom-center-top">
                                <input />
                                <div className="btn-search">
                                    <button><i className="fas fa-search" style={{ color: 'white', fontSize: '18px', fontWeight: '10px' }}></i></button>
                                </div>
                            </div>

                            <div className="content-bottom-center-bottom">
                                <span><FormattedMessage id="homepage.coat" /></span>
                                <span><FormattedMessage id="homepage.femalebag" /></span>
                                <span><FormattedMessage id="homepage.headphone" /></span>
                                <span><FormattedMessage id="homepage.iphonecase" /></span>
                                <span><FormattedMessage id="homepage.dress" /></span>
                                <span><FormattedMessage id="homepage.malejean" /></span>
                                <span><FormattedMessage id="homepage.balo" /></span>
                            </div>
                        </div>
                        <div className="content-bottom-right">
                            <i className="fas fa-shopping-cart"></i>
                        </div>
                    </div>
                </div>
                <div className="Homepage-container">
                    <div className="Container-layer0">
                        <div className="Container-layer0-wrap-up">
                            <div className="content-layer0-left">
                                <Carousel>
                                    <Carousel.Item interval={2000}>
                                        <img
                                            className="d-block w-100"
                                            src={picture1}
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <div className="custom" >
                                                <div className="custom-button">
                                                    &gt;
                                                </div>
                                                <div className="custom-text"><FormattedMessage id="homepage.shopnow" /></div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>

                                    <Carousel.Item interval={2000}>
                                        <img
                                            className="d-block w-100"
                                            src={banner}
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <div className="custom">
                                                <div className="custom-button">
                                                    &gt;
                                                </div>
                                                <div className="custom-text"><FormattedMessage id="homepage.shopnow" /></div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img
                                            className="d-block w-100"
                                            src={banner1}
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                            <div className="custom">
                                                <div className="custom-button">
                                                    &gt;
                                                </div>
                                                <div className="custom-text"><FormattedMessage id="homepage.shopnow" /></div>
                                            </div>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="content-layer0-right">
                                <div className="content-layer0-right-childup">
                                    <img alt="First slide" src={banner}></img>
                                </div>
                                <div className="content-layer0-right-childdown">
                                    <img alt="First slide" src={banner1}></img>
                                </div>
                            </div>
                        </div>
                        <div className="Container-layer0-wrap-down " >
                            <div className="picture1">
                                <div className="picture1-up" ><img alt="First slide" style={{ width: '45px' }} src={picture01}></img></div>
                                <div className="picture1-down" ><FormattedMessage id="homepage.saletime" /></div>
                            </div>
                            <div className="picture2">
                                <div className="picture2-up"><img alt="First slide" style={{ width: '45px' }} src={picture02}></img></div>
                                <div className="picture2-down"><FormattedMessage id="homepage.cheap" /></div>
                            </div>
                            <div className="picture3">
                                <div className="picture3-up"><img alt="First slide" style={{ width: '45px' }} src={picture03}></img></div>
                                <div className="picture3-down"><FormattedMessage id="homepage.freeship" /></div>
                            </div>
                            <div className="picture4">
                                <div className="picture4-up"><img alt="First slide" style={{ width: '45px' }} src={picture04}></img></div>
                                <div className="picture4-down"><FormattedMessage id="homepage.trend" /></div>
                            </div>
                            <div className="picture5">
                                <div className="picture5-up"><img alt="First slide" style={{ width: '45px' }} src={picture05}></img></div>
                                <div className="picture5-down"><FormattedMessage id="homepage.reclaim" /></div>
                            </div>
                            <div className="picture6">
                                <div className="picture6-up"><img alt="First slide" style={{ width: '45px' }} src={picture06}></img></div>
                                <div className="picture6-down"><FormattedMessage id="homepage.goodprice" /></div>
                            </div>
                            <div className="picture7">
                                <div className="picture7-up"><img alt="First slide" style={{ width: '45px' }} src={picture07}></img></div>
                                <div className="picture7-down"><FormattedMessage id="homepage.oversee" /></div>
                            </div>
                            <div className="picture8">
                                <div className="picture8-up"><img alt="First slide" style={{ width: '45px' }} src={picture08}></img></div>
                                <div className="picture8-down"><FormattedMessage id="homepage.service" /></div>
                            </div>
                            <div className="picture9">
                                <div className="picture9-up"><img alt="First slide" style={{ width: '45px' }} src={picture09}></img></div>
                                <div className="picture9-down"><FormattedMessage id="homepage.shock" /></div>
                            </div>

                        </div>
                    </div>
                    <UseHook />
                    <div className="Footer-container">
                        <div className="wrap-content">
                            <div className="content-1">SHOPEE - GÌ CŨNG CÓ, MUA HẾT Ở SHOPEE</div>
                            <div className="content-2">
                                Shopee - ứng dụng mua sắm trực tuyến thú vị, tin cậy, an toàn và miễn phí! Shopee là nền tảng giao dịch trực tuyến hàng đầu ở Đông Nam Á, có trụ sở chính ở Singapore, đã có mặt ở khắp các khu vực <span>Singapore</span>, <span>Malaysia</span>, <span>Indonesia</span>, <span>Thái Lan</span>, <span>Philippines</span>, <span>Đài Loan</span>, <span>Brazil</span>, <span>México</span>, <span>Colombia</span>, <span>Chile</span>, <span>Poland</span>, <span>Spain</span>, <span>Argentina</span>.  Với sự đảm bảo của Shopee,
                                bạn sẽ mua hàng trực tuyến an tâm và nhanh chóng hơn bao giờ hết!
                            </div>
                            <div className="content-3">
                                MUA SẮM VÀ BÁN HÀNG ONLINE ĐƠN GIẢN, NHANH CHÓNG VÀ AN TOÀN

                            </div>
                            <div className="content-4">
                                Nếu bạn đang tìm kiếm một trang web để mua và bán hàng trực tuyến thì Shopee.vn là một sự lựa chọn tuyệt vời dành cho bạn. Bản chất của Shopee là một social E-commerce platform - nền tảng trang web thương mại điện tử tích hợp mạng xã hội. Điều này cho phép người mua và người bán hàng dễ dàng tương tác, trao đổi thông tin về sản phẩm và chương trình khuyến mãi của shop. Nhờ nền tảng đó, việc mua bán trên Shopee trở nên nhanh chóng và đơn giản hơn. Bạn có thể trò chuyện trực tiếp với nhà bán hàng để hỏi trực tiếp về mặt hàng cần mua. Còn nếu bạn muốn tìm mua những dòng sản phẩm chính hãng, uy tín, Shopee Mall chính là sự lựa chọn lí tưởng dành cho bạn. Để bạn có thể dễ dàng khi tìm hiểu và sử dụng sản phẩm, Shopee Blog- trang blog thông tin chính thức của Shopee - sẽ giúp bạn có thể tìm được cho mình các kiến thức về xu hướng thời trang,
                                review công nghệ, mẹo làm đẹp, tin tức tiêu dùng và deal giá tốt bất ngờ.
                            </div>
                            <div className="content-5">
                                Xem Thêm {`>`}
                            </div>
                        </div>
                        <div className="wrap-content-1">
                            <div className="content-01">
                                © 2022 Shopee. Tất cả các quyền được bảo lưu.
                            </div>
                            <div className="content-02">
                                Quốc gia {'&'} Khu vực:
                                Singapore
                                Indonesia
                                Đài Loan
                                Thái Lan
                                Malaysia
                                Việt Nam
                                Philippines
                                Brazil
                                México
                                Colombia
                                Chile
                                Poland
                                Argentina
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changinglanguage: (language) => dispatch(changelanguage(language))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);