import React from "react";
import List1 from "./List1";
import Table1 from "./Table1";
import Form1 from "./Form1";

interface HobbyProps {
    hobby: string;
    imageSrc: string;
}

const Hobby1: React.FC<HobbyProps> = ({hobby, imageSrc}) => {
    return (
        <div>
            <h2>{hobby}</h2>
            <img src={imageSrc} alt = {hobby} width = "100"/>
            <List1 />
            <Table1 />
            <Form1 />
        </div>
    );
};

export default Hobby1;