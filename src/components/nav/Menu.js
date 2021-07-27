import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { Drawer, List, ListItem, ListItemText, ListItemIcon, IconButton, Divider } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import SearchIcon from '@material-ui/icons/Search'

import { useHistory, useLocation } from 'react-router-dom'

const drawerWidth = 240
const useStyles = makeStyles((theme) => {
    return {
        drawer: {
            width: drawerWidth,
            padding: theme.spacing(2),
        },
        padding: {
            paddingTop: theme.spacing(4)
        }
    }
})

export default function Menu() {
    const styles = useStyles()
    const history = useHistory()
    const location = useLocation()
    const menuItems = [
        {
            text: 'Explore Parks',
            icon: <SearchIcon />,
            path: '/'
        },
        {
            text: 'Saved Parks',
            icon: <LocationOnIcon />,
            path: '/saved-parks'
        }
    ]

    const [toggle, setToggle] = useState(false)

    const handleToggleMenu = () => {
        setToggle(prevToggle => !prevToggle)
    }
    return (
        <>
        <IconButton edge="start" color="secondary" aria-label="open navigation" className="navigation-btn" onClick={handleToggleMenu}>
            <MenuIcon />
        </IconButton>

        <Drawer
        variant="temporary"
        anchor="right"
        open={toggle}
        onClose={handleToggleMenu}
        className={styles.drawer}
        classes={{paper: styles.drawer}}>
            <List className={styles.padding}>
            {menuItems.map(item => (
                <ListItem key={item.text}
                button
                component="a"
                className={location.pathname === item.path ? 'active' : null}
                onClick={() => history.push(item.path)}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                </ListItem>
            ))}
            </List>
            <Divider />
        </Drawer>
        </>
    )
}
