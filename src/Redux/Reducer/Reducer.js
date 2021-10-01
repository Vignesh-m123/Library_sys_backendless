import {LOGIN, REGISTER_REQUEST, REGIS_TER, REGISTER_FAIL, BOOK, BOOK_FLAG,LOGOUT} from '../Actions/Action_types';
const initial ={
    username:"", password:"", error:false
    //book: {bookname = "", status = ""}
}

const  Reducer  = (state=initial,Action) =>{
    switch(Action.type){
        case REGIS_TER:
            return{
                ...state,
                username:Action.payload.username,
                password:Action.payload.password,
                error:Action.payload.error
            };
        case LOGIN:
            return{
                ...state,
                username:Action.payload.username,
                password:Action.payload.password,
              
            };    
        case REGISTER_FAIL:
            return{
                ...state,
                data:{error:true}
            };    
         default:
             return state; 
            
    }

}
export default Reducer;




// const initailState={
//     data:'lorem ipsum',
// }
// const rootReducer=(state=initailState,action)=>{
//     switch(action.type){
//         case 'ADD_DATA':
//             return{
//                 ...state,
//                 data: action.payload
//             }
//         default:
//             return state;
//     }
// }
