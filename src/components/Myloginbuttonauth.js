
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

function Myloginbuttonauth() {
const a=10;
    localStorage.setItem("mykey",a);



    const { loginWithRedirect } = useAuth0();
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
}

export default Myloginbuttonauth