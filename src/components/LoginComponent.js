import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./../actions/user.action";


 const LoginComponent = () => {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const dispatch = useDispatch();

    const handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let newUser = {...user, [name]: value}
        setUser(newUser);
    }

    const onSubmit = (e) => {
        e.persist()
        dispatch(fetchUser(user))
    }

    return (
        <>
            <h1>Login Form</h1>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={user.username}
                        onChange={handleOnChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleOnChange}
                    />
                    <br/>
                    <input
                        type="submit"
                        value="Login"
                    />
                </form>
        </>
    )
}

export default LoginComponent
