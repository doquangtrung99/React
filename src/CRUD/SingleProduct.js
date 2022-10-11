import './SingleProduct.scss'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import Lightbox from 'react-image-lightbox';
import Free from '../images/free.png'
import 'react-image-lightbox/style.css';
import { connect } from 'react-redux';
import { addnumber } from '../Redux/action'
import { toast } from 'react-toastify';


const SingleProduct = (props) => {
    const navigate = useNavigate();
    const [currentUpImage, setcurrentUpImage] = useState(image1)
    const [isOpen, setIsOpen] = useState(true)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [number, setNumber] = useState(0)
    const arr = ['M', 'L', 'XL', '2XL']
    const [size, setSize] = useState('')
    const [validate, setValidate] = useState('')
    const [product, setProduct] = useState({})
    const [color, setColor] = useState('')
    const images = [
        image1,
        image2,
        image3,
        image4,
    ];
    const Back = () => {
        navigate('/')
    }
    const handleclick = () => {
        setIsOpen(false);
        let indexOjb = images.findIndex(item => item === currentUpImage)
        setPhotoIndex(indexOjb)
    }
    const clicksub = () => {
        if (number === 0) {
            return;
        }
        setNumber(number - 1)
    }
    const clickadd = () => {
        setNumber(number + 1)
    }
    const changecolorbrown = () => {
        setColor('Nâu')
    }
    const changecolorblack = () => {
        setColor('Đen')

    }
    const handleSize = (item) => {
        setValidate(item)
        if (item === 'M') {
            setSize('red')
        } else {
            if (item === 'L') {
                setSize('red')
            } else {
                if (item === 'XL') {
                    setSize('red')
                } else {
                    if (item === '2XL') {
                        setSize('red')
                    }
                }
            }
        }
    }

    const resolveBuy = () => {

        if (!validate || !number || !color) {
            return alert(`Please choose your order infomation`)
        } else {
            setProduct(
                {
                    id: Math.floor(Math.random() * 100),
                    color: color,
                    size: validate,
                    quantity: number,
                    price: '164,500',
                    image: currentUpImage
                }
            )

            toast.success('Confirmed Information')
            setTimeout(() => {
                navigate('/cartproduct')
            }, 1);
        }

    }


    useEffect(() => {
        let checkemtyOjb = Object.keys(product).length === 0
        let productList = localStorage.getItem("productList")

        if (productList) {
            if (checkemtyOjb === false) {
                let arr = JSON.parse(productList)
                arr.push(product)
                localStorage.setItem('productList', JSON.stringify(arr))
            }
        } else {
            if (checkemtyOjb === true) {
                localStorage.setItem('productList', JSON.stringify([]))
            }
        }
    }, [product])

    const something = () => {

    }
    return (

        <div className="container-product">
            <div>
                <button onClick={() => Back()} style={{
                    height: '30px', width: '50px', display: 'flex', alignItems: 'center', background: 'orangered',
                    justifyContent: 'center', border: '1px solid white', margin: '10px 20px 0px 15px', color: 'white'
                }}
                >&#8592;
                </button>
            </div>
            <div className="content-left">
                <div className="picture-up">
                    <img alt="Second slide" src={currentUpImage} onClick={() => handleclick()} />
                </div>

                <div className="picture-down">
                    <div className="img-small" >
                        <img alt="Second slide" src={image1} onClick={() => setcurrentUpImage(image1)} className={currentUpImage === image1 ? "active" : ""} />
                    </div >
                    <div className="img-small" >
                        <img alt="Second slide" src={image2} onClick={() => setcurrentUpImage(image2)} className={currentUpImage === image2 ? "active" : ""} />
                    </div >
                    <div className="img-small" >
                        <img alt="Second slide" src={image3} onClick={() => setcurrentUpImage(image3)} className={currentUpImage === image3 ? "active" : ""} />
                    </div >
                    <div className="img-small" >
                        <img alt="Second slide" src={image4} onClick={() => setcurrentUpImage(image4)} className={currentUpImage === image4 ? "active" : ""} />
                    </div >
                </div>
            </div>
            <div className="content-right">
                <div className="shoes">Áo khoác bóng chày dáng rộng thời trang cho nam nữ</div>
                <div className="price">₫164,500</div>
                <div className="size">
                    <div className='size-ojb1'>Kích thước</div>
                    <div className='size-ojb2'>
                        {arr.map((item, index) => {
                            return (
                                <div key={index} onClick={() => handleSize(item)} style={{ color: validate === item ? `${size}` : '', cursor: 'pointer' }}>{item}</div>
                            )
                        })}
                    </div>
                </div>
                <div className='insurance'>
                    <div className='insurance-ojb1'>Bảo hiểm</div>
                    <div className='insurance-ojb2'>Bảo hiểm thời trang <span className='box-'>Mới</span></div>
                </div>
                <div className='delivery'>
                    <div className='delivery-ojb1'>Vận Chuyển</div>
                    <div className='delivery-ojb'><img alt='Free' src={Free}></img>Miễn phí vận chuyển</div>
                </div>
                <div className='color'>
                    <div className='choosecolor'>Màu sắc</div>
                    <div className='brown' onClick={() => changecolorbrown()} style={{ background: color === 'Nâu' ? 'orangered' : '', color: color === 'Nâu' ? 'white' : 'black', cursor: 'pointer' }} >Nâu</div>
                    <div className='black' onClick={() => changecolorblack()} style={{ background: color === 'Đen' ? 'orangered' : '', color: color === 'Đen' ? 'white' : 'black', cursor: 'pointer' }} >Đen</div>
                </div>

                <div className="quantity">Số Lượng</div>
                <div className="input" >
                    <button onClick={() => clicksub()}>-</button>
                    <input value={number} onChange={() => something()} />
                    <button onClick={() => clickadd()}>+</button>
                </div>

                <button className="buy" onClick={() => resolveBuy()} id='buyy' >Chọn Mua</button>
            </div>
            <div>
                {isOpen === false && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen({ isOpen: true })}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        getproduct: state.number
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (number) => dispatch(addnumber(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);


