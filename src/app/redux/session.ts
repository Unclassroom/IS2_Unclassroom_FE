import {SET_LOGIN_PENDING,SET_LOGIN_SUCCESS, SET_LOGIN_ERROR,
        setLoginPending,setLoginSuccess,setLoginError} 
        from './actions';

export function login(credentials) {
return dispatch => {
dispatch(setLoginPending(true));
dispatch(setLoginSuccess(false));
dispatch(setLoginError(null));
callLoginApi(credentials);

if(sessionStorage.getItem("jwt") == "-1"){
  dispatch(setLoginPending(true));
  dispatch(setLoginError(new Error ('Invalid user/password')));
}else{
  dispatch(setLoginPending(false));
  dispatch(setLoginSuccess(true));
}    
}
}
function callLoginApi(credentials) {
fetch('https://unhealthy-back.herokuapp.com/credential_token', {
method: 'POST',
mode: 'cors',
body: JSON.stringify({auth: credentials}),
headers: new Headers({
  'Content-Type': 'application/json'
 })
})
.then(response =>{
if(response.status == 201){
  response.json().then(json => {
    sessionStorage.setItem('jwt', json.jwt);
    window.alert("Succed :D");
  });
}else{
  sessionStorage.setItem('jwt', "-1");
  window.alert("Something went wrong D:");
}
})
.catch(error => console.error('Error:', error));
}


export default function reducer(state = {
isLoginSuccess: false,
isLoginPending: false,
loginError: null
}, action) {
switch (action.type) {
case SET_LOGIN_PENDING:
  return Object.assign({}, state, {
    isLoginPending: action.isLoginPending
  });

case SET_LOGIN_SUCCESS:
  return Object.assign({}, state, {
    isLoginSuccess: action.isLoginSuccess
  });

case SET_LOGIN_ERROR:
  return Object.assign({}, state, {
    loginError: action.loginError
  });

default:
  return state;
}
}