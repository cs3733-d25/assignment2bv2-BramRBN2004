import React from "react";

const Form2: React.FC = () => {
    return (
        <><p>------------------------------------------------</p>
            <h2>Ali Feedback Form </h2>
            <form>
                <label>
                    Input:
                    <input type="text"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form2;