import React from "react";
import {Dialogs} from "./Dialogs";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AddDialogsAC, AddNewDialogsAC, dialogType, messageType} from "../../Redux/message-reducer";


/*
export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const AddNewDialogs = (newDialog: string) => {
                        store.dispatch(AddNewDialogsAC(newDialog))
                    }

                    const AddDialogs = (title: string) => {
                        store.dispatch(AddDialogsAC(title))
                    }
                    let messagesPage = store.getState().messagesPage
                    return (
                        <Dialogs message={messagesPage.message} AddNewDialogs={AddNewDialogs} AddDialogs={AddDialogs}
                                 messages={messagesPage.messages} dialogs={messagesPage.dialogs}/>
                    )

                }
            }

        </StoreContext.Consumer>

    )
}*/




type mapStateToProps ={
    message: string
    messages: Array<messageType>
    dialogs:Array<dialogType>
}
type mapDispatchToPropsType ={
    AddNewDialogs:(newDialog: string)=>void
    AddDialogs:(title: string)=>void
}

export type dialogsPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):mapStateToProps=> {
    return {
        message: state.messagesPage.message,
        messages: state.messagesPage.messages,
        dialogs:state.messagesPage.dialogs
    }
}


const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return{
        AddNewDialogs:(newDialog: string) => {
            dispatch(AddNewDialogsAC(newDialog))
        },
        AddDialogs:(title: string) => {
            dispatch(AddDialogsAC(title))
        },
    }

}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)