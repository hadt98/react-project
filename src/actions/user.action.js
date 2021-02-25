const data = {
    user: {
        username: "default_user",
        password: "default_password"
      },
      token: "123.123.123"
}

const setUser = (payload) => {
    return {
        type: "SET_USER",
        payload: payload
    }
}

export const logoutUser = () => ({type: "LOG_OUT"})

export const fetchUser = (user) => dispatch => {
    let token =  `${data.token}_${user.username}_${user.password}`;
    localStorage.setItem("token", token);
    dispatch(setUser(user));
}

export const signUpUser = (user) => dispatch => {
    let token =  `${data.token}_${user.username}_${user.password}`;
    localStorage.setItem("token", token);
    dispatch(setUser(user))
}

export const autoLogin = () => dispatch => {
    localStorage.setItem("token", data.token);
    dispatch(setUser(data.user))
}