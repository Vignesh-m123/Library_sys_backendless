import { all, takeEvery, takeLatest, call, put, fork } from "redux-saga/effects";
import Reducer from '../Reducer/Reducer';
import axios from 'axios';
//import {Data} from '../../Data';
import Store from '../Store';
import {register} from '../Actions/Action.js';
import  {REGIS_TER, REGISTER_FAIL}  from '../Actions/Action_types';
import { END } from "redux-saga";
import { useDispatch } from "react-redux";

export function* Saga() {
   yield takeLatest( 'REGIS_TER', reegister);
    // yield takeLatest('LOGIN',loginsaga);
 }
// const dispatch = useDispatch();
//  function* loginsaga(action){
//      console.log("saga login called");
//      yield call(api,action);

//      const api=(payload)=>{
         
//         const url=`http://localhost:8000/user?username=${payload.username}`;
//         axios.get(url)
//         .then(response=>{console.log(response)
//         if(response){
                        
//         }}).catch(error=>{throw error})
//          return axios.post("http://localhost:8000/user/",action.payload)
//          .then(response=>{
//          if(response){
//              return console.log(response);
//          }else{
//              return (response="User login credentials are wrong");
//          }}).catch(error=>{throw error});
//  }
//  }

function* reegister(action){
    
    // const dispatch = useDispatch();
 
    console.log("Saga function called");
    try{
        // const can =axios.post('Data.json',data).then((Response)=>{can = Response.data});
        console.log("tttrklkrg")
        //const Jso =JSON.stringify(action.payload);
        const api = () =>  {
        return axios.post("http://localhost:8000/user/", 
        action.payload).then (response => {
            if(response){console.log(response)
                // yield put(
                   // ({type:REGIS_TER,payload:action.payload});
            }}).catch((error)=> {throw error});
        };
        // const api = ()=>{ 
        //     return fetch('http://localhost:8000/user',{
        //       method: 'POST',
        //       headers: {
        //         "Content-Type": "application/json"
        //       }
        //       }
        //     )
        //       .then((resp) => {
        //         console.log(resp)})
        //       .catch((error) => {
        //           throw error;
        //         //dispatch(warningOccurred(error, url));
        //       })         
        // };
        yield call(api,action);
       yield console.log("rendred");       
    }catch(error){
        console.log(error);
    };
}


// function* createPostSaga(action) {
//     const token = yield select(selectToken);
//     const headerParams = {
//       "Authorization": `JWT ${token}`
//     };
  
//     const apiCall = () => {
//       return axios.post('/posts', {
//         action.payload // only if not an object. Otherwise don't use outer {},
//       },
//       headerParams: headerParams,
//      ).then(response => response.data)
//       .catch(err => {
//         throw err;
//       });
//     }
  
//     console.log(token, headerParams);
//     try {
//       yield call(apiCall);
//       yield call(getPosts());
//     } catch (error) {
//       console.log(error);
//     }