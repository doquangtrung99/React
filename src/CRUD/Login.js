import React from "react";
import { useEffect, useState } from "react";
import './Login.scss'
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from "react-toastify";


const Login = () => {

    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [username, setUserName] = useState('')
    const [password, setPassWord] = useState('')
    const [user, setUser] = useState({})
    const [dataUser, setdataUser] = useState({
        username: `quangtrung941999@gmail.com`,
        password: '123456'
    })
    const [confirm, setConfirm] = useState(false)
    const [username1, setUserName1] = useState('')
    const [password1, setPassWord1] = useState('')

    const handleusername = (event) => {
        setUserName(event.target.value)
    }

    const handlepassword = (event) => {
        setPassWord(event.target.value)
    }

    const handlehideicon = () => {
        setIsShow(!isShow)
    }


    const handlelogin = () => {

        setUser({
            username,
            password
        })

        if (!username || !password) {
            alert('Wrong username or password')
        }
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const signup = () => {
        if (!username1.includes(`@gmail.com`) || password1.length < 6) {
            alert('Missing @ in username or password was below 6 character')
            return;
        }

        let user = localStorage.getItem('User')
        user = JSON.parse(user)
        let finduser = user.find(item => item.username === username1)
        if (finduser) {
            return alert('Username existed')
        } else {
            let newuser = [...user, { username: username1, password: password1 }]
            localStorage.setItem('User', JSON.stringify(newuser))
            setIsOpen(!isOpen)
            toast.success('Signing up success')
        }

    }

    const username12 = (event) => {
        setUserName1(event.target.value)
    }
    const password12 = (event) => {
        setPassWord1(event.target.value)

    }
    useEffect(() => {
        try {
            let check = localStorage.getItem('User')
            check = JSON.parse(check)
            let confirmUser = check.find(item => item.username === user.username && item.password === user.password)
            if (confirmUser) {
                localStorage.setItem('accessToken', true)
                setConfirm(true)
            } else {
                localStorage.setItem('accessToken', false)
                setConfirm(false)
            }
        } catch (error) {
            console.log(error)
        }

    }, [user])

    useEffect(() => {

        let checkUser = localStorage.getItem('User')
        if (checkUser) {
        } else {
            localStorage.setItem('User', JSON.stringify([dataUser]))
            localStorage.setItem('accessToken', false)
        }
    }, [])

    useEffect(() => {
        let access = localStorage.getItem('accessToken')
        if (confirm && access === 'true') {
            navigate('/mainproject')
        }
    }, [confirm])

    return (
        <>
            <div className="container123">
                <div className="container-wrap" >
                    <div>Sign in</div>

                    <div className="username">
                        <label>USERNAME</label>
                        <input value={username} type='text' name="email" placeholder="Username"
                            onChange={(event) => handleusername(event)} />
                    </div >
                    <div className="password">
                        <label>PASSWORD</label>
                        <div className="form-control">
                            <input value={password} type={isShow === false ? "text" : "password"} name="password" placeholder="Password" onChange={(event) => handlepassword(event)} />
                            {isShow === false ?
                                <i className="far fa-eye icon" onClick={() => handlehideicon()} ></i>
                                :
                                <i className="fas fa-eye-slash icon" onClick={() => handlehideicon()} ></i>
                            }
                        </div>

                    </div>
                    <div className="button1">
                        <div className="button">
                            <button id='01' onClick={() => handlelogin()} type="submit">Sign in</button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }} className="text">
                            <span style={{ fontSize: '18px', color: 'black', cursor: 'pointer' }} onClick={() => toggle()}>Sign Up</span>
                            <span style={{ fontSize: '18px', color: 'black' }}>Forgot Password?</span>
                        </div>
                    </div>
                </div>
            </div >
            <Modal isOpen={isOpen} toggle={() => toggle()}>
                <ModalHeader toggle={() => toggle()}>Sign Up</ModalHeader>
                <ModalBody>
                    <div className="form-signup">
                        <label>Username</label>
                        <input value={username1} onChange={(event) => username12(event)}></input>
                        <label >Password</label>
                        <input value={password1} onChange={(event) => password12(event)} ></input>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => signup()}>
                        Sign Up
                    </Button>
                    <Button color="secondary" onClick={() => toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>

    )
}

export default Login;
