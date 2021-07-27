import { createTheme } from '@material-ui/core/styles'
import { brown, lightGreen } from '@material-ui/core/colors'

//https://material-ui.com/customization/default-theme/#default-theme
//https://material-ui.com/customization/color/#color
const theme = createTheme({
    palette: {
        primary: {
            light: '#a5c89a',
            main: '#76976c',
            dark: '#496941',
            contrastText: '#fff',
          },
          secondary: {
            // light: '#ff72d6',
            main: brown[800],
            // dark: '#b90076',
            contrastText: '#fff',
          },
    },
    typography: {
      h1: {
        fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
        fontWeight: 600,
        fontSize: '5em',
      },
      h2: {
        fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
        fontWeight: 600,
        fontSize: '3.75em',
      },
      h3: {
        fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
        fontWeight: 600,
        fontSize: '3em',
      },
      h4: {
        fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
        fontWeight: 600,
      },
      h5: {
        fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
        fontWeight: 600,
      },
      h6: {
        fontFamily: '"Montserrat", Helvetica, Arial, sans-serif',
        fontWeight: 600,
      }
    }
  })

  export default theme