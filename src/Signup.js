import React from 'react';
import Navbar from './navbar/Navbar'
import Formfield from './formfield/FormField'
import CoolButton from './formfield/CoolButton'

const Signup = (props) => {
    return (
        <div>
            <Navbar />
            <Formfield label="email" placeholder= "slava@gmail.com" />
            <Formfield  label="password" placeholder= "slava"/>
            <Formfield  label="username" placeholder= "slava305"/>
            <CoolButton  isSmall isDanger className="is-rounded my-class"/>
            
        </div>
    );
};

export default Signup;