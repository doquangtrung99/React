import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalEdit.scss'
class ModalEdit extends React.Component {

    state = {
        email: '',
        firstName: '',
        lastName: '',
        address: ''
    }


    toggle = () => {
        this.props.handleToggleEdit()
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
        let Arr = ['firstName', 'lastName', 'address']
        for (let i = 0; i < Arr.length; i++) {
            if (!this.state[Arr[i]]) {
                check = false
                return alert(`Missing ${Arr[i]}`)
            }
        }
        return check
    }


    edituser = () => {
        let check = this.validate();
        if (check === true) {
            this.props.editUser(this.state)
            this.props.handleToggleEdit()
        }
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isModalEditOpen} toggle={() => this.toggle()}>
                    <ModalHeader toggle={() => this.toggle()}>ADD NEW USER</ModalHeader>
                    <ModalBody>
                        <div className='form-edit-user'>
                            <label>Email</label>
                            <input onChange={(event) => this.handleinput(event, 'email')} disabled ></input>
                            <label>FirstName</label>
                            <input onChange={(event) => this.handleinput(event, 'firstName')}></input>
                            <label >LastName</label>
                            <input onChange={(event) => this.handleinput(event, 'lastName')}></input>
                            <label >Address</label>
                            <input onChange={(event) => this.handleinput(event, 'address')}></input>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.edituser()}>
                            Edit User
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
export default ModalEdit