import { Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux"

const ProtectedRoute = ({user}) => {
 
    // Check if the user is authenticated
    if (!user) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/login" />;
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };

  const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading,
    authError: state.auth.error,
    user: state.auth.user
  })

  
export default connect(mapStateToProps)(ProtectedRoute)