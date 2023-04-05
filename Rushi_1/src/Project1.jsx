import React from "react";


function Project1 (){

    
let cutDate = new Date(2022 ,5 ,5 ,1);

cutDate = cutDate.getHours;

 let newprint = " ";

 let css1style ={}


if (cutDate >= 1 && cutDate < 12) {
    newprint = "Good Morning";
    css1style.color="Pink"
} else if (cutDate >= 12 && cutDate < 19) {
    newprint = "Good Afternoon";
    css1style.color="Blue"
} else {
    newprint = " Good Evening";
    css1style.color="black";
}

return(
    <>
    <div className='Arru1'>
        <h1 className='arru2'>Hi Hello,<span style={css1style}>{newprint}</span></h1>
        </div>
    </>
)
}


export default Project1;