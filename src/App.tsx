//import React from "react";
import Title from "./components/title";
import Intro from "./components/intro";
import Hobby1 from "./components/hobby1";
import Hobby2 from "./components/hobby2";
import './App.css'

function App() {
    return (
    <div>
        <Title teamNumber={8} hobby1="Basketball" hobby2="" />
        <Intro name1="Brandon" name2="Ali" />
        <Hobby1 hobby="Basketball" imageSrc="Basketbaloo.jpg" />
        <Hobby2 hobby="" imageSrc="" />
    </div>
    );
};

export default App
