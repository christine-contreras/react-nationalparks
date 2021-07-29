import React from 'react'
import { Grid, List, ListItem, ListItemText, Divider, Typography } from '@material-ui/core'

export default function ParkActivities({activities}) {
    return (
        <Grid item className="details-activity-item item-1 background-1">
             <Typography variant="h6" component="h2" className="text-light" gutterBottom>
                 Activites
                <span className="subtitle">To Do</span>
            </Typography>

            <List className="text-light">
            {activities.map(activity => (
                <>
                <ListItem key={activity.id}>
                    <ListItemText>{activity.name}</ListItemText>
                </ListItem>
                <Divider className="background-3" />
                </>
            ))}
            </List>
           
        </Grid>
    )
}
