import { apiPost } from "../../utils/utils";
import store from "../store";
import types from "../types";
import axios from 'axios'
const { dispatch } = store;
import { REGISTER } from "../../config/urls";

export const saveUserData = (data) => {
    console.log(data,"data>>>>>>>>>>>")
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}


export function register(data) {
    console.log('fher>>>>', data);
    return new Promise((resolve, reject) => {
      apiPost(REGISTER, data)
        .then(res => {
            console.log(res,"response from actions")
          resolve(res);
      
        })
        .catch(error => {
          reject(error,"reject");
        });
    });
  }



export const logout = () => {
    dispatch({
        type: types.LOGOUT
    })
}