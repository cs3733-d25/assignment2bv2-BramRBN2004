import React from "react";

const Form1: React.FC = () => {
    return (
        <form>
            <label>
                Input:
                <input type = "text" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form1;