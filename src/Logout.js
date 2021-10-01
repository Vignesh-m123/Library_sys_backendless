import React from 'react';

const Logout = () =>{
    const acti= () =>{
        localStorage.removeItem("token");
    }
    return(
        <div>
        <button className="btn btn-danger" onClick={acti} > Logout</button>
        </div>
    )

}

export default Logout;