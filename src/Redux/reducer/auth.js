import { clearUserData, removeData, removeItem, } from "../../utils/utils";
import types from "../types";
const initialState = {
    userData: {},

};

const userStatus = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            const data = action.payload;
            console.log(data, "data>>>>>>>>>>>")
            // setLogin(data)

            return {

                ...state,
                userData: data

            };
            case types.LOGOUT:{
                removeData("userData").then((res)=>{
                  console.log('res',res)
                })
                return{
                  userData:undefined
                }
              }


        default:
            return { ...state }
    }

}

export default userStatus