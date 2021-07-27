import React from 'react'
import '../css/Nav.css'
import { AppBar, Toolbar} from '@material-ui/core'


import Logo from '../components/nav/Logo'
import Menu from '../components/nav/Menu'

const Nav = () => {
    return (
    <AppBar className="appbar" color="inherit" elevation={0}>
        <Toolbar className="toolbar">
            <Logo />

            <Menu />
        </Toolbar>
    </AppBar>
    )
}

export default Nav
