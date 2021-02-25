import userReducer from './user.reducer'
import commentReducer from './comment.reducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    userReducer,
    commentReducer
})

export default rootReducer