import React from 'react'
import classes from './AmbarResponsiveLogo.scss'
import MediaQuery from 'react-responsive'

export const AmbarResponsiveLogo = ({mode, version}) => (
    <div className={classes.ambarResponsiveLogo}>
    </div>
)

AmbarResponsiveLogo.propTypes = {
    mode: React.PropTypes.string.isRequired,
    version: React.PropTypes.string.isRequired
}

export default AmbarResponsiveLogo