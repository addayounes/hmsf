import React from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/ducks/user";
import GoogleLogo from "../../assets/svg/GoogleLogo.svg";
import "./Login.css";

const Login: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(LoginUser());
    };

    return (
        <section className='split-center login'>
            <div className='login-card'>
                <h1>
                    Sign in and start exploring the <span>beauty</span> of flowers
                </h1>
                <div onClick={handleLogin} className='login-btn'>
                    <img src={GoogleLogo} alt='google-logo' />
                    <p>Sign in with Google</p>
                </div>
            </div>
        </section>
    );
};

export default Login;
