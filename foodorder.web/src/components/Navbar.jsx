import {React} from "react";
import Logo from '../assets/Images/Sabzi.png'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { Actions as authActions } from "../redux/auth"; 
import { Actions as itemActions } from "../redux/item/action";

const Navbar = ({logUserOut, cart,  user, requestOpenCart}) => {
  const handleLogout = ()=>{
    logUserOut();
  }
  const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);
  const onOpenCartClick = () => {
    var action = requestOpenCart();
  }
  return (
      <nav class="navbar navbar-expand-md bg-body-tertiary">
  <div class="container-xl">
    <div class="navbar-brand">
      <img src="https://codingyaar.com/wp-content/uploads/coding-yaar-logo.png" alt=""/>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
               Home
             </Link>
        </li>
        {user?.email ? <li class="nav-item">
          <Link to="/product" className="nav-link">
               Products
             </Link>
        </li> 
        :
     ""}
     {user?.email ? "" :
        <li class="nav-item">
        <Link to="/Login" className="nav-link">
               Login
             </Link>
        </li>}
        {user?.email ? <li class="nav-item">
          <Link onClick={()=>{handleLogout()}} className="nav-link">
               Logout
             </Link>
        </li> 
        :
     ""}
      </ul>
      <div class="search-and-icons">
        <form class="d-flex mb-2 me-2" role="search">
          <input class="form-control me-2" type="search" disabled aria-label="Search"/>
        </form>
        <div class="user-icons d-flex mb-2">
          {
            user?.email ?  <div className="cart">
               <Link to="/cart">
              <button className="btn btn-outline-danger">
              {/* <i onClick={()=>onOpenCartClick()} className="bi bi-cart3">
                </i></button> */}
               
                <i className="bi bi-cart3">
                </i></button>
                </Link>
                </div> : ""
          }
         
        </div>
      </div>
      <div class="contact-info d-md-flex">
        <p>+0987654321 | +1234567890 </p>
        <p><a href="mailto:">contact@domainname.com</a></p>
      </div>
    </div>
  </div>
</nav>


  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
  user: state.auth.user,
  cart: state.items.cart
})
 
const mapDispatchToProps = (dispatch) => ({
  logUserOut: () => dispatch(authActions.logUserOut()),
  requestOpenCart: () => dispatch(itemActions.requestOpenCart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
