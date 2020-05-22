import React from 'react'
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import NoImg from '../images/no-img.png';

import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    ...theme.spreadThis,
    handle: {
        height: 20,
        background: theme.palette.primary.main,
        width: 60,
        margin: '0 auto 7px auto'
    },
    fullLine: {
        height: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '90%',
        display: "block",
        margin: "auto",
        marginBottom: 10
    },
    halfLine: {
        height: 15,
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: '45%',
        display: "block",
        margin: "auto",
        marginBottom: 10,
    },
    imageWrapper: {
        textAlign: 'center',
        position: 'relative'
    },
    profileimage: {
        width: 200,
          height: 200,
          objectFit: 'cover',
          maxWidth: '100%',
          borderRadius: '50%',
         
    },
    profileDetails: {
        textAlign: 'center',
    }
});

const ProfileSkeleton = (props) => {
    const {classes} = props;
    return (
        <Paper className = {classes.paper}>
            <div className = {classes.imageWrapper}>
                <img src={NoImg} alt="profile" className = {classes.profileimage} />
            </div>
            <div className = {classes.profileDetails}>
                <div className = {classes.handle}/>
                <div className = {classes.fullLine}/>
                <div className = {classes.fullLine}/>
                <div className = {classes.halfLine}/>
                <div className = {classes.halfLine}/>
                <div className = {classes.halfLine}/>
            </div>
        </Paper>
    )
}

ProfileSkeleton.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileSkeleton);
