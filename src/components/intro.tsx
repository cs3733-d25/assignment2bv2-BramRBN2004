import React from "react";

interface IntroProps {
    name1: string;
    name2: string
}

const Intro: React.FC<IntroProps> = ({name1, name2}) => {
    return <p>Hey, We are {name1} and {name2}, and these are our hobbies.</p>
};

export default Intro;