import { useDispatch, useSelector } from "react-redux"
import {logoutUser} from "./../actions/user.action";

const Logout = () => {
    const dispatch = useDispatch();
    const userReducer = useSelector(state => state.userReducer);
    return (
        <button onClick={() => {
            dispatch(logoutUser())
        }}>Logout </button>
    )
}

export default Logout;