import initialState from "./initialState"
import axios from "axios"

export const REQUEST_LOGIN = "@@auth/REQUEST_LOGIN"
export const REQUEST_LOGIN_FAILURE = "@@auth/REQUEST_LOGIN_FAILURE"
export const REQUEST_LOGIN_SUCCESS = "@@auth/REQUEST_LOGIN_SUCCESS"
export const REQUEST_LOG_USER_OUT = "@@auth/REQUEST_LOG_USER_OUT"
export const REQUEST_GET_USER = "@@auth/REQUEST_GET_USER"

export default function authReducer(state = initialState.auth, action = {}) {
  switch(action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        isLoading: true,
      }
    case REQUEST_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        user: {},
      }
    case REQUEST_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        user: action.data
      }
    case REQUEST_LOG_USER_OUT:
      return {
        ...initialState.auth,
      }
      case REQUEST_GET_USER:
        return {
          ...state,
          user: action.data
        }
    default:
      return state
  }
}

export const Actions = {}

Actions.requestUserLogin = ({ username, password }) => {
    // const navigate = useNavigate();
    return async (dispatch) => {

      dispatch({ type: REQUEST_LOGIN })
  
      // create the url-encoded form data
      const formData = {
        username: username,
        password: password
      }


    console.log("fomrdata:", formData)
      // set the request headers
      const headers = {
        'Content-type': 'application/json; charset=UTF-8',
        'mode': 'no-cors',
        'Accept': 'application/json',
        'Origin': 'http://localhost:3000'
      }
  
      try {
        // make the actual HTTP request to our API
        const res = await axios({
          method: `POST`,
          url: `https://localhost:7002/api/auth/login`,
          data: formData,
          headers
        })
  
        // stash the access_token our server returns
        const access_token = res.data.result.token
        localStorage.setItem("access_token", access_token)
        var user = res.data.result.user;
        var jsonUser = JSON.stringify(user)
        localStorage.setItem("user", jsonUser)
        // dispatdch the fetch user from token action creator
        return dispatch({type:REQUEST_LOGIN_SUCCESS, data: user})

      } catch (error) {
        // dispatch the failure action
        return dispatch({ type: REQUEST_LOGIN_FAILURE, error: error?.message })
      }
    }
  }

  Actions.requestGetUser = (user) => {
    return async (dispatch) => {
      dispatch({type: REQUEST_GET_USER, data: user})
    }
  }

 Actions.logUserOut = () => {
    localStorage.removeItem("access_token")
    localStorage.removeItem("user")
    return {
      type: REQUEST_LOG_USER_OUT
    }
  }
  