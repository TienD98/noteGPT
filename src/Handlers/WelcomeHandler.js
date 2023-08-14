import axios from "axios";

function SigninHandler() {
    axios.get('https://notegpt-686471fdfc45.herokuapp.com/welcome')
        .then((res) => {
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })
}

export default SigninHandler