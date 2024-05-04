import {ActionProps, initialStateProps} from "@/context/actionprops";

export const initialState: initialStateProps = {
    navigation: false
}

const Reducer = (state: initialStateProps = initialState, action: ActionProps): initialStateProps => {
    switch (action.type) {
        default : {
            return state

        }

        case "SET_NAVIGATION": {
            return {
                ...state,
                navigation: action.payload
            }
        }
    }
}

export default Reducer