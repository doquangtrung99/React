import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalBuy.scss'
import { toast } from 'react-toastify';

const ModalBuy = (props) => {

    const toggle = () => {
        props.setIsOpenModal(!props.isOpenModal)
    }

    const handletoast = () => {
        if (props.Arrproduct.length > 0) {
            toast.success('Place Order Success')
            localStorage.setItem('productList', JSON.stringify([]))
            props.setArrproduct(JSON.stringify([]))
        } else {
            toast.info('Please choose items to pay')
        }
    }
    return (
        <Modal isOpen={props.isOpenModal} toggle={() => toggle()}
            size="lg"
        >
            <ModalHeader toggle={() => toggle()}>Confirm Product</ModalHeader>
            <ModalBody>

                <div className='wrapper'>

                    <div className='child-wrapper'>
                        <div className='child-warraper-up'>
                            <div>Hình Ảnh</div>
                            <div>Size</div>
                            <div>color</div>
                            <div>Quantity</div>
                            <div>Price</div>
                        </div>
                        {props.Arrproduct.length > 0 ? props.Arrproduct.map(item => {
                            return (
                                <div key={item.id} className='child-warraper-down'>
                                    <div className='child-warraper-1' >
                                        <img alt='' src={`${item.image}`}></img>
                                    </div>
                                    <div className='child-warraper-2'>{item.size}</div>
                                    <div className='child-warraper-3'>{item.color}</div>
                                    <div className='child-warraper-4'>{item.quantity}</div>
                                    <div className='child-warraper-5'>{item.price}</div>
                                </div>
                            )

                        })
                            :
                            <div className='child-warraper-down' style={{ color: 'gray', opacity: '0.7' }}>
                                Go back and choose items to pay
                            </div>
                        }

                    </div>

                </div>

            </ModalBody>
            <ModalFooter>
                <div>Tổng Thanh Toán: <span>{props.sum}</span> </div>
                <Button color="danger" outline onClick={() => toggle()} >
                    <div style={{ textAlign: 'center' }} onClick={() => handletoast()}>
                        Buy
                    </div>
                </Button>
                <Button color="dark" outline onClick={() => toggle()} className='btn'>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalBuy;