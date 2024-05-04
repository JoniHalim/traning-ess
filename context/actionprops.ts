import React from "react";

export interface ActionProps {
    type: string,
    payload: any
}

export interface StateProps {
    children: React.ReactNode
}


export interface initialStateProps {
    navigation: boolean
}