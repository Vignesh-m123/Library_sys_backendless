import React from 'react';
import {LOGIN, REGISTER_REQUEST, REGIS_TER, REGISTER_FAIL, BOOK, BOOK_FLAG,LOGOUT } from './Action_types';
// const Types = {
//     LOGIN: 'LOGIN',
//     REGISTER: 'REGISTER',
//     BOOKS: 'BOOKS',
//     BOOK_FLAG: 'BOOK_FLAG',
//     //JWTT: 'JWTT'
//   }
// const Action = {
// export const registerfail =(Data) =>({ 
//     type : Types.REGISTER_FAIL, 
//     payload : Data}),
// export const register=()=>{
//       const {username,password,error}=data;
//       type:Types.REGIS_TER,
//       payload:{username, password,error};
// dispatch => {
//      dispatch({ type: LOAD_USERS_LOADING });
// };
    
export const register = (data)=>{ 
       return{
      
            type : REGIS_TER, 
            payload:data
       }
     }


// export const registerfail =(data) =>({ 
// type : REGISTER_FAIL,
// })

export const registerRequest =(data) =>({ 
      type : REGISTER_REQUEST, 
      payload : data
      })
      
const login = (username,password) => ({ 
      type : LOGIN, 
      payload : {username,password }})

const books = (bk) => ({ 
      type : BOOK, 
      payload : { bk } })

// const booksflag = (status) => ({ 
//       type: Types.BOOK_FLAG, 
//       payload: status })

// const logout = () => ({ 
//       type: Types.LOG_OUT,
//       payload:null 
//       })
       

//   jwtt: (jwt) => ({ 
//         type: Types.JWT_T, 
//         payload: jwt })

// export default {//logout, books, booksflag, registerfail, login,
//        register };