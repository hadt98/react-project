import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {signUpUser} from "../actions/user.action"


 const SignUpComponent = () => {
    const dispatch = useDispatch();

    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
        age: ""
    })

    const handleOnChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        const user = {...newUser, [name]:value}
        setNewUser(user);
    }

    const onSubmit = (e) => {
        e.persist();
        dispatch(signUpUser(newUser))
    }
    return (
        <>
         <h1>SignUp Form</h1>
                <form onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={newUser.username}
                        onChange={handleOnChange}
                    />
                    <br/>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={newUser.password}
                        onChange={handleOnChange}
                    />
                    <br/>
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={newUser.age}
                        onChange={handleOnChange}
                    />

                    <br/>
                    <input
                        type="submit"
                        value="Sign up"
                    />
                </form>
        </>
    )
}

export default SignUpComponent;