"use client"

import React, {Dispatch, useReducer} from "react";
import Reducer, {initialState} from "./reducer";
import {ActionProps, initialStateProps, StateProps} from "@/context/actionprops";


const StateContext = React.createContext<React.ComponentState>([])

export const useStateContext = (): [initialStateProps, Dispatch<ActionProps>] => React.useContext(StateContext)

const StateProvider: React.FC<StateProps> = ({children}) => {
    return (
        <StateContext.Provider value={useReducer(Reducer, initialState)}>
            {children}
        </StateContext.Provider>
    );
};

export default StateProvider;