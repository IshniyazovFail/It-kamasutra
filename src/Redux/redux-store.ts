import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./profile-reducer";
import {MessagesReducer} from "./message-reducer";
import {UserReduser} from "./user-reduser";


let rootReduser = combineReducers(
    {
        profilePage: ProfileReducer,
        messagesPage: MessagesReducer,
        userPage:UserReduser,
    }
)


export type AppStateType = ReturnType<typeof rootReduser>


export const store = createStore(rootReduser);

