import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { LoginHeader } from '../header/header';
import './LoginScreen.css'
import LoginForm from '../loginForm/loginForm';

const LoginScreen = () => {
    const { user, setUser } = useContext(UserContext);

    return (
        <>
            <LoginHeader />

            <LoginForm />
        </>
    );
};

export default LoginScreen;