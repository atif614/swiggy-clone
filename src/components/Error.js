import React from "react";
import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const error = useRouteError();
    console.log(error.error);
    return(
        <div>
            Something went wrong
            {JSON.stringify(error)} <br/>
            {error.error.message} <br/>
            {error.error.stack}
        </div>
    )
}

export default Error;