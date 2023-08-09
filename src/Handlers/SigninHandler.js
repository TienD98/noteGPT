import { useDispatch, useSelector } from "react-redux";
import { getUser, getPassword } from "../Components/Signin/SigninSlice";
import bcrypt from 'bcryptjs';

function SigninHander() {
    // const username = useSelector((state) => state.signin.userName);
    const password = useSelector((state) => state.signin.hashedPassword);
    const dispatch = useDispatch();

    const handlerUsername = (event) => {
        dispatch(getUser(event.currentTarget.value));
    };

    const handlerPassword = (event) => {
        // dispatch(getPassword(event.currentTarget.value));
        const hashed = passwordHash(event.currentTarget.value, 10).then((pw) => {
            console.log(pw);
            dispatch(getPassword(pw));
        });
        // console.log(hashed);
        console.log(password);
    }

    const passwordHash = async (password, saltRounds) => {
        try {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);
            return hash;
        } catch (err) {
            console.log(err);
        }
    }

    return { handlerPassword, handlerUsername }
}

export default SigninHander