import React from 'react'
import { makeStyles } from '@material-ui/core'

import Nav from './Nav'

const useStyles = makeStyles((theme) => {
    return {
        page: {
            width: '100%',
            position: 'relative',
            top: 140,
            maxWidth: 1200,
            margin: 'auto'
        }
    }
})

export default function Layout({children}) {
    const styles = useStyles()

    return (
       <>
         <Nav />

         <div className={styles.page}>
            {/* output children  wrapped in layout on the App.js */}
            {children}
         </div>
       </>
    )
}
