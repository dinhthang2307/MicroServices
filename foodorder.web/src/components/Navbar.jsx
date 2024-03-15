import {React} from "react";
import Logo from '../assets/Images/Sabzi.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { Actions as authActions } from "../redux/auth"; 
import { Actions as itemActions } from "../redux/item/action";

const Navbar = ({logUserOut, isLoading, authError, user, cartOpen,requestOpenCart}) => {
  const handleLogout = ()=>{
    logUserOut();
  }
   const onOpenCartClick = ()=>{
    var action = requestOpenCart();
  }
  return (
    <div className="container-fluid px-5 header sticky-top">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-2 border-bottom border-dark">
        <Link
         to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
            <img src={Logo} alt=""/>
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 menu-color">
              Home
            </Link>
          </li>
          <li>
            <Link to="/product" className="nav-link px-2 menu-color">
              Products
            </Link>
          </li>
          <li>
            <a href="#" className="nav-link px-2 menu-color">
              About
            </a>
          </li>
          
          { user?.email ? "":

          <li>
            <a href="/login" className="nav-link px-2 menu-color">
              Login
            </a>
          </li>
          }


        </ul>

        <div className="col-md-3 text-dark text-decoration-none">
          {user?.email ? <input type="button" value="log out" className="btn btn-success" onClick={() => handleLogout()}/>:""}
          <i className="bi bi-cart fs-3 text-dark text-decoration-none" onClick={()=>onOpenCartClick()}>o</i>
        </div>

       
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  authError: state.auth.error,
  user: state.auth.user,
  cartOpen: state.items.isCartOpen
})
 
const mapDispatchToProps = (dispatch) => ({
  logUserOut: () => dispatch(authActions.logUserOut()),
  requestOpenCart: () => dispatch(itemActions.requestOpenCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
