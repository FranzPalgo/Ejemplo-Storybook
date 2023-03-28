import React from 'react'
import './stylesButton.css'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// export const Button = ({type, isDisabled}) => {
//     let classType = ""
//     let isdisabled = ""
//     isdisabled = (isDisabled) ? "is-disabled" : ""
//     classType = (type) ? `type-${type} ` : ""
//     return (
//     <button className={classType + "button" + " " + isdisabled}>
//         Aceptar
//     </button>)
// }

export const Button = ({type, isDisabled, children}) => {
    return (
    <button 
        className={classNames('button', 
        {[`type-${type}`] : type}, 
        {'is-disabled' : isDisabled})}
    >
        {children}
    </button>)
}

Button.propTypes = {
    children: PropTypes.string,
    isDisabled: PropTypes.bool,
    type: PropTypes.oneOf(["primary", "secondary"])
}

Button.defaultProps = {
    children: "Boton",
    isDisabled: false,
    type: "primary"
}