import React from 'react'
import './Nav.scss'
import { NavLink } from 'react-router-dom'
class Nav extends React.Component {
    render() {
        return (
            <div className='wrap-nav'>
                <div className='Nav'>
                    <div>
                    </div>
                    <div>
                        <NavLink to="/home" exact="true" >HOMEPAGE</NavLink>
                        <NavLink to="/mainproject" >DEMO</NavLink>
                        {/* <NavLink to="/about" >ABOUT</NavLink> */}
                    </div>
                    <div>
                    </div>
                </div >
            </div>
        )
    }
}

export default Nav;