import React from "react";
import {add,sub,mul,div} from "./export";





function Import1(){
    return(
        <>
        <h1>Import And Export</h1>
            <ul>
                <li>sum of two no is : {add(10,20)}</li>
                <li>sub of two no is : {sub(10,20)}</li>
                <li>mul of two no is : {mul(10,20)}</li>
                <li>div of two no is : {div(10,3)}</li>
            </ul>
        </>
    )
}

export default Import1;