const initiateState = {
    loggedIn: false,
    user: {}
}

const userReducer = (state = initiateState, action) => {
    let {payload} = action;
    switch(action.type){
        case "SET_USER":
            console.log(action);
            return {
                ...state, 
                loggedIn: true,
                user : payload
            }
        case "LOG_OUT":
            return {
                ...state,
                loggedIn: false,
                user: {}
            }
        default:
            return state;
    }
}

export default userReducer;