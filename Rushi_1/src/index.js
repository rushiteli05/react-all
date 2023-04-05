import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
// import Import1 from './import_export/Import1';
import App1 from './project_1/App1';
import App2 from './project_2/App2';
import Project1 from './Project1';
import Import1 from './import_export/import';











// // let Element = <h4>This Is first Heading</h4>

// // let Root = ReactDOM.createRoot(document.getElementById('root'))
// // let Foot = ReactDOM.createRoot(document.getElementById('foot'))

// // Root.render(Element)
// // Foot.render(Element)




// // var h1 = document.createElement('h1');
// // h1.innerHTML = "Rushikesh Teli";
// // document.getElementById("rushi").appendChild(h1);





//Experssion....{}...  statement written karta yet nahi...

const name = "rushikesh teli"
ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <>
            <h1>Hi this is {name}.</h1>
            <p>My Roll No is {4 + 1}</p>



        </>);






//JXS coding/.....

const myElement = <h1>Hi...{5 + 5}.Brain Works...!</h1>

const myElement1 = (
    <>
        <h1>Lish Of Numbers</h1>
        <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>

        </ul></>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(myElement);
root.render(myElement1)







const rushi = (<>
    <h1>Rushi teli</h1>
</>)

const koot = ReactDOM.createRoot(document.getElementById('koot'));

koot.render(rushi);








//Experssion....{}...  statement written karta yet nahi...

const name1 = "rushikesh teli"
ReactDOM.createRoot(document.getElementById("root"))
    .render(
        <>
            <h1>Hi this is {name1}.</h1>
            <p>My Roll No is {4 + 1}</p>

        </>);








//using array..


const rohit = ([
    <>
        <h1>Adarash Gurukul peth vadgone</h1>
        <p>Hostel</p>
    </>
])
ReactDOM.createRoot(document.getElementById('aru')).render(rohit);







//add ..{}..    template literals {` ${}`}

const fname = "Aditya";
const lname = "pawar";

const fulln = (<>
    <h1>{`My name is ${fname},and my last name is ${lname}..`}</h1>
    <h3>My age is {Math.random()}</h3>
</>)

ReactDOM.createRoot(document.getElementById("aru")).render(fulln);







//app ...Date and time

const namw1 = "Parsad";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

const daydate = (
    <>
        <h1>Hello, My Name is{namw1}</h1>
        <p>Todays date = {currDate} </p>
        <p>Todays time = {currTime}</p>
    </>
)

ReactDOM.createRoot(document.getElementById("time")).render(daydate)







//add img ...edit text

const namee = "Advika";
const image1 = "https://picsum.photos/200/300";
const image2 = "https://picsum.photos/250/350";
const image3 = "https://picsum.photos/300/400";
const links = 'https://www.google.co.in/'

const gallery = (
    <>
        <h1 contentEditable="true">My Name is {namee}</h1>
        <img src={image1} alt="random img" />
        <img src={image2} alt="random image" />

        <a href={links} >
            <img src={image3} alt="random image" />
        </a>
    </>
)


ReactDOM.createRoot(document.getElementById("img")).render(gallery);




//adding css

const namee1 = "Shivansh";
const image11 = "https://picsum.photos/200/300";
const image22 = "https://picsum.photos/250/350";



const gallery1 = (
    <>
        <h1 class="heading">My Name is {namee1}</h1>
        <div className='imgpic'>
            <img src={image11} alt="random img" />
            <img src={image22} alt="random image" />
        </div>
    </>
)


ReactDOM.createRoot(document.getElementById("img1")).render(gallery1);





//add inline CSS....


const headcass = {
    color: "Blue",
    textAlign: "center",
    fontWeight: "bold"
}


const heading = (<>
    <h1 style={headcass}>Beain Works Class</h1>

    <p style={{ color: "violet" }}>Batch - MERN , JAVA , HTML</p>
</>)


ReactDOM.createRoot(document.getElementById('head')).render(heading)






//project-1


let currtDate = new Date();   //(year month day time)

currtDate = currtDate.getHours();

let greeting = " ";

let cssstyle = {}




if (currtDate >= 1 && currtDate <= 11) {
    greeting = "Good Morning";
    cssstyle.color = "green"

} else if (currtDate >= 12 && currtDate < 19) {
    greeting = "Good AfterNoon"
    cssstyle.color = "red"

} else {
    greeting = "Good Evening"
    cssstyle.color = "black"

};

const rushi1 = (<>
    <div className='dada1'>
        <h1 className='dada2'>hello sir <span style={cssstyle}>{greeting}</span></h1>
    </div>
</>)



ReactDOM.createRoot(document.getElementById("project")).render(rushi1)






//components ,...


const aru1 = (
    <App1/>
)

ReactDOM.createRoot(document.getElementById("teli")).render(aru1);



//components...

const mayu = (
    <App2 />
)

ReactDOM.createRoot(document.getElementById("mayu")).render(mayu)







//project 3





const shub = (
   <Project1/>
)

ReactDOM.createRoot(document.getElementById("mayu1")).render(shub);




//import_export....



const aaju = (<Import1/>);

ReactDOM.createRoot(document.getElementById("imp")).render(aaju)

















































































