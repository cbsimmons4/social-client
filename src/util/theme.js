export default {
    palette: {
      primary: {
        light: '#f48fb1',
        main: '#f06292',
        dark: '#e91e63',
        contrastText: '#fff'
      },
      secondary: {
        light: '#b0bec5',
        main: '#90a4ae',
        dark: '#78909c',
        contrastText: '#fff'
      },
    },
    spreadThis: {
      invisibleSeparator: {
        border: 'none',
        margin: 4
      },
      visibleSeparator: {
        width: '100%',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        marginBottom: 20
      },
      typography: {
        useNextVariants:true
      },
      paper: {
        padding: 20
      },
      profile: {
        '& .image-wrapper': {
          textAlign: 'center',
          position: 'relative',
          '& button': {
            position: 'absolute',
            top: '80%',
            left: '70%'
          }
        },
        '& .profile-image': {
          width: 200,
          height: 200,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%'
        },
        '& .profile-details': {
          textAlign: 'center',
          '& span, svg': {
            verticalAlign: 'middle'
          },
          '& a': {
            color: '#00bcd4'
          }
        },
        '& hr': {
          border: 'none',
          margin: '0 0 10px 0'
        },
        '& svg.button': {
          '&:hover': {
            cursor: 'pointer'
          }
        }
      },
      buttons: {
        textAlign: 'center',
        '& a': {
          margin: '20px 10px'
        }
      },
      form : {
        textAlign: 'center'
      }, 
      image: {
          margin: '20px auto 20px auto'  
      },
      pageTitle: {
          margin: '10px auto 10px auto'  
      },
      textField: {
          margin: '10px auto 10px auto'  
      },
      button: {
          margin: '10px auto 10px auto',
          position: 'relative' 
      },
      customError : {
          color: 'red',
          fontSize: '0.8rem',
          margin: '10px auto 10px auto'  
      },
      progress: {
          position: 'absolute'
      }
    }
}