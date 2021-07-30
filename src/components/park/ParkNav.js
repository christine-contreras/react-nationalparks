import React from 'react'
import { Grid, List, ListItem, ListItemText, Divider, Typography } from '@material-ui/core'
import { renderStateName } from '../../renderStateName'

const ParkNav = ({name, state, history, page}) => {

    const menuDetailItems = [
        {
            text: 'Overview',
            path: '/park-details/overview'
        },
        {
            text: 'Camping',
            path: '/park-details/camping'
        }
    ]


    return (
        <Grid item className="details-menu background-1">
             <Typography variant="h6" component="h2" className="text-light" gutterBottom>
                <span className="subtitle">{renderStateName(state)}</span>
                {name}
            </Typography>

            <List className="text-light">
            {menuDetailItems.map(item => (
                <>
                <ListItem key={item.text}
                button
                component="a"
                className={page === item.path ? 'active' : null}
                onClick={() => history.push(item.path)}>
                    <ListItemText>{item.text}</ListItemText>
                </ListItem>
                <Divider className="background-3" />
                </>
            ))}
            </List>
           
        </Grid>
    )
}

export default ParkNav