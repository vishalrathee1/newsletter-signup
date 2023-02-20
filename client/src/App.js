import React from "react";
import { useState } from "react";

import Signup from "./Signup";

const App = () => {
    const [apiResponse, setapiResponse] = useState("");

    function callApi(){
        fetch("http://localhost:9000/testbackendAPI")
        .then(res => res.text())
        .then(res => setapiResponse(res))
        .catch(err => err);

    }

    callApi();


    return(
        <div>
            {/* Hello Subscribers! */}
            {/* <p>{apiResponse}</p> */}
            <Signup />

        </div>
    )

}

export default App;

