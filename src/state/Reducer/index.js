import { combineReducers } from "redux"
import togglemode from "./modetoggle";
import usersdata from "./userdata";

const reducer = combineReducers({
    mode: togglemode,
    userdata: usersdata
})

export default reducer;