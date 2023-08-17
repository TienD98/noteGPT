// import axios from "axios";
// import { useRef } from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function SigninSuccess() {
//     let user = useRef();
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get('https://notegpt-686471fdfc45.herokuapp.com/welcome', { withCredentials: true })
//             .then((res) => {
//                 console.log(res.data);
//             }).catch((err) => {
//                 navigate('/signin');
//                 console.log(err);
//             });
//     });

//     const click = () => {
//         axios.get('https://notegpt-686471fdfc45.herokuapp.com/welcome/profile', { withCredentials: true })
//             .then((result) => {
//                 user.current = result.data;
//                 document.getElementById('user').innerHTML = "Username: " + user.current.username;
//                 document.getElementById('hash').innerHTML = "Hashed Password: " + user.current.password;
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }

//     const clickLogout = () => {
//         axios.get('https://notegpt-686471fdfc45.herokuapp.com/logout', { withCredentials: true })
//             .then((res) => {
//                 localStorage.removeItem('authenticated');
//                 console.log(res.data);
//                 navigate('/');
//             })
//             .catch((err) => {
//                 console.log(err);
//             })
//     }

//     return (
//         <div className="container-fluid text-center">
//             <h1 className="">WELCOME TO THE APP! </h1>
//             <div>
//                 <button className="btn btn-link" onClick={click}>account</button>
//                 <button className="btn btn-link" onClick={clickLogout}>log out</button>
//             </div>
//             <div className="card w-75 mb-3  mx-auto ">
//                 <div className="card-body">
//                     <h5 className="card-title">User info</h5>
//                     <p className="card-text lead" id="user"></p>
//                     <p className="card-text lead" id="hash"></p>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default SigninSuccess