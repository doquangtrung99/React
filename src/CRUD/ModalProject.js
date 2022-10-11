import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalProject.scss'
class ModalProject extends React.Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        address: ''
    }


    toggle = () => {
        this.props.handletoggle()
    }

    handleinput = (event, id) => {
        let CoppyState = { ...this.state }
        CoppyState[id] = event.target.value
        this.setState({
            ...CoppyState
        })
    }

    validate = () => {
        let check = true
        let Arr = ['email', 'password', 'firstName', 'lastName', 'address']
        for (let i = 0; i < Arr.length; i++) {
            if (!this.state[Arr[i]]) {
                check = false
                return alert(`Missing ${Arr[i]}`)
            }
        }
        return check
    }


    adduser = () => {
        let check = this.validate();
        if (check === true) {
            this.props.addUser(this.state)
            this.props.handletoggle()
        }
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} toggle={() => this.toggle()}>
                    <ModalHeader toggle={() => this.toggle()}>ADD NEW USER</ModalHeader>
                    <ModalBody>
                        <div className='form-add-user'>
                            <label>Email</label>
                            <input onChange={(event) => this.handleinput(event, 'email')}></input>
                            <label>Password</label>
                            <input onChange={(event) => this.handleinput(event, 'password')}></input>
                            <label>FirstName</label>
                            <input onChange={(event) => this.handleinput(event, 'firstName')}></input>
                            <label >LastName</label>
                            <input onChange={(event) => this.handleinput(event, 'lastName')}></input>
                            <label >Address</label>
                            <input onChange={(event) => this.handleinput(event, 'address')}></input>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.adduser()}>
                            Add New
                        </Button>
                        <Button color="secondary" onClick={() => this.toggle()}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
export default ModalProject