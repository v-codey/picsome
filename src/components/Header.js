import React, { useContext } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Context } from "../Context"

function Header({ darkMode }) {
  const { cartItems } = useContext(Context)
  const cartClassName =
    cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"
  return (
    <header className={darkMode ? "darkMode" : ""}>
      <Link to="/">
        <h2 className="hoverEffect">Lorem Pic-Some</h2>
      </Link>
      <Link to="/cart">
        <i className={`${cartClassName} ri-fw ri-2x hoverEffect`}></i>
      </Link>
    </header>
  )
}

Header.defaultProps = {
  darkMode: false,
}
Header.propTypes = {
  darkMode: PropTypes.bool,
}

export default Header
