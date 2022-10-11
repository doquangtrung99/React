import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import { useState } from "react";
import './Cart.scss'
import { FormattedMessage } from 'react-intl';
import { changelanguage } from '../Redux/action'
import logoshoppe from '../images/logoshoppe.png'
import Free from '../images/free.png'
import { toast } from 'react-toastify';
import ModalBuy from "./ModalBuy";


const CartProduct = (props) => {
    const navigate = useNavigate();
    const Back = () => {
        navigate('/singleproduct')
    }
    let [Arrproduct, setArrproduct] = useState(localStorage.getItem('productList'))
    Arrproduct = JSON.parse(Arrproduct)

    const [language, setLanguage] = useState(false)
    const [showHide, setShowHide] = useState(false)
    const [some, setSome] = useState('')
    const [color, setColor] = useState('')
    const [number, setNumber] = useState('')
    const changelanguage = (language) => {
        props.changinglanguage(language)
        if (language === 'vi') {
            setLanguage(false)
        } else {
            setLanguage(true)
        }
    }
    const [sizeArr] = useState(['M', 'L', 'XL', '2XL'])
    const [colorArr] = useState(['Đen', 'Nâu'])
    const [numb] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
    const [isOpenModal, setIsOpenModal] = useState(false)
    const backhome = () => {
        navigate('/home')
    }

    const chooseAll = () => {
        setShowHide(!showHide)
    }
    const deleteAll = () => {
        if (showHide === true) {
            localStorage.setItem('productList', JSON.stringify([]))
            setArrproduct(JSON.stringify([]))
            toast.success('Delete Success')
        }

    }
    const deleteOjb = (product) => {
        let ArrproductCoppy = [...Arrproduct]
        let indexOjb = ArrproductCoppy.findIndex(item => item.id === product.id)
        ArrproductCoppy.splice(indexOjb, 1)

        localStorage.setItem('productList', JSON.stringify(ArrproductCoppy))
        setArrproduct(JSON.stringify(ArrproductCoppy))
        toast.success('Delete Success')
    }

    let res = Arrproduct.map((item) => {
        return (
            parseFloat(item.price.replace(/,/g, ''))
        )
    })

    let res1 = Arrproduct.map((item) => {
        return (
            item.quantity
        )
    })



    // console.log(Arrproduct.reduce((a, b) =>
    //     a + parseFloat(b.price.replace(/,/g, '')) * b.quantity

    //     , 0))


    let sum = 0;
    for (let i = 0; i < res.length; i++) {
        sum += res[i] * res1[i];
        console.log('a')
    }

    const something = () => {

    }
    const handlesome = (event) => {
        setSome(event.target.value)
    }

    const confirm = (product) => {
        let indexOjb = Arrproduct.findIndex(item => item.id === product.id)
        let ArrproductCoppy = [...Arrproduct]
        if (Arrproduct[indexOjb].id === product.id) {
            ArrproductCoppy[indexOjb].size = some
            localStorage.setItem('productList', JSON.stringify(ArrproductCoppy))
            setArrproduct(JSON.stringify(ArrproductCoppy))
        }

    }

    const handleColor = (event) => {
        setColor(event.target.value)
    }


    const handleClickColor = (product) => {
        let indexOjb = Arrproduct.findIndex(item => item.id === product.id)
        let ArrproductCoppy = [...Arrproduct]
        if (Arrproduct[indexOjb].id === product.id) {
            ArrproductCoppy[indexOjb].color = color
            localStorage.setItem('productList', JSON.stringify(ArrproductCoppy))
            setArrproduct(JSON.stringify(ArrproductCoppy))
        }
    }

    const handlequantity = (event) => {
        setNumber(event.target.value)
    }

    const handleClickQuantity = (product) => {
        let indexOjb = Arrproduct.findIndex(item => item.id === product.id)
        let ArrproductCoppy = [...Arrproduct]
        if (Arrproduct[indexOjb].id === product.id) {
            ArrproductCoppy[indexOjb].quantity = number
            localStorage.setItem('productList', JSON.stringify(ArrproductCoppy))
            setArrproduct(JSON.stringify(ArrproductCoppy))
        }
    }

    const deal = () => {
        setIsOpenModal(!isOpenModal)
    }
    return (
        <div className="wrap-cart">

            <div className="cart-1">
                <div className="cart-1-left">
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
                <div className="cart-1-right">
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
                                <p className="vietnamese" onClick={() => changelanguage('vi')}>Tiếng Việt</p>
                                <p className="english" onClick={() => changelanguage('en')}>English</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="cart-2">
                <div className="cart-2-left">
                    <div className="btn" onClick={() => Back()}>
                        &#8592;
                    </div>
                    <div className='content-cart-2-left1'><img src={logoshoppe} alt="logoshoppee" onClick={() => backhome()}></img></div>
                    <div className='content-cart-2-left2'>Giỏ Hàng</div>

                </div>
                <div className="cart-2-right">
                    <div className='content-cart-2-right'>
                        <input placeholder='TECHZONE SALE SỐC CUỐI NGÀY' onChange={() => something()} />
                        <div className="button-search">
                            <button><i className="fas fa-search" style={{ color: 'white', fontSize: '18px', fontWeight: '10px' }}></i></button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="cart-3">
                <div className="cart-3-content1">
                    <div className='child-cart-3-content1'><img alt='abcd' src={Free}></img> Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!</div>
                </div>
                <div className="cart-3-content2">
                    <div className='child-1-cart-3-content2'>
                        <div><input type="checkbox" onChange={() => something()} /> Sản Phẩm </div>
                    </div>
                    <div className='child-2-cart-3-content2'>

                        <div >Màu</div>
                        <div>Số Lượng</div>
                        <div>Số Tiền</div>
                        <div>Thao Tác</div>
                    </div>
                </div>
                <div className="cart-3-content3">
                    <div className='cart-3-content3-child1'>
                        <div><input type="checkbox" onChange={() => something()} /> Shop Người Bán</div>
                    </div>
                    {Arrproduct.length > 0 ? Arrproduct.map(item => {
                        return (
                            <div key={item.id} className='cart-3-content3-child2'>
                                <div className='control-image'>
                                    <div className='img'>
                                        {showHide === false ?
                                            <input type="checkbox" />
                                            :
                                            <input type="checkbox" checked={showHide} />
                                        }
                                        <img alt="" src={`${item.image}`}></img>
                                    </div>
                                    <div className="Sizee" >
                                        <div className="wrap-sizee">
                                            <label>Size</label>
                                            <select className="select" name="size" value={item.size} onChange={(event) => handlesome(event)} onClick={() => confirm(item)} >
                                                {sizeArr.map((item, index) => {
                                                    return (
                                                        <option key={index}>{item}</option>
                                                    )
                                                })}

                                            </select>

                                        </div>

                                    </div>
                                </div>
                                <div className='wrap-div'>
                                    <div className='div1'>
                                        <select name="color" value={item.color} onChange={(event) => handleColor(event)} onClick={() => handleClickColor(item)}>
                                            {colorArr.map((item, index) => {
                                                return (
                                                    <option key={index}>{item}</option>
                                                )
                                            })}
                                        </select>
                                    </div>
                                    <div className='div2'>
                                        <div className="input" >
                                            <select value={item.quantity} onChange={(event) => handlequantity(event)} onClick={() => handleClickQuantity(item)}>
                                                {numb.map((item, index) => {
                                                    return (
                                                        <option key={index}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                    </div>
                                    <div className='div3'>{item.price}</div>
                                    <div className='div4' onClick={() => deleteOjb(item)} >Xóa</div>
                                </div>
                            </div>
                        )
                    }) :
                        <div className='cart-3-content3-child2'>
                            <div className='control-image'>
                                <div className='img'>
                                </div>
                            </div>
                            <div className='wrap-div'>
                                <div className='div1'></div>
                                <div className='div2'>
                                </div>
                                <div className='div3'></div>
                            </div>
                        </div>
                    }
                </div>
                <div className="cart-3-content4">
                    <div className='left'>
                        <div>
                            <input type="checkbox" onClick={() => chooseAll()} />
                            Chọn Tất Cả
                        </div>
                        <div onClick={() => deleteAll()} style={{ cursor: 'pointer' }}>
                            Xóa
                        </div>

                    </div>
                    <div className='right'>
                        <div>Tổng thanh toán ({Arrproduct.length} Sản phẩm):  {sum}</div>
                        <div className='buyy' onClick={() => deal()}>Mua Hàng</div>
                    </div>
                </div>
            </div>
            <ModalBuy
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                Arrproduct={Arrproduct}
                setArrproduct={setArrproduct}
                sum={sum}
            />


        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        getproduct: state.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changinglanguage: (language) => dispatch(changelanguage(language))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);