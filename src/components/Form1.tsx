import React from "react";

const Form1: React.FC = () => {
    return (
        <><p>---------------------------------------------------------------------------</p>
            <h2>Brandon's Feedback Form</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"/><br/><br/>

                <label htmlFor="email"> Email Address:</label>
                <input type="email" id="email" name="email"/><br/><br/>

                <fieldset>
                    <legend>What types of media do you enjoy? (Check all that apply)</legend>
                    <input type="checkbox" id="tv shows" name="tv shows" value="TV"/>
                    <label htmlFor="tv shows">TV Shows</label><br/>
                    <input type="checkbox" id="movies" name="movies" value="movies"/>
                    <label htmlFor="movies">Movies</label><br/>
                    <input type="checkbox" id="books" name="books" value="books"/>
                    <label htmlFor="books">Books</label><br/>
                    <input type="checkbox" id="video games" name="video games" value="video games"/>
                    <label htmlFor="video games">Video Games</label><br/>
                </fieldset>
                <br/>

                <fieldset>
                    <legend>What is your average entertainment time a week?</legend>
                    <input type="radio" id="low" name="hrs" value="Low"/>
                    <label htmlFor="low">Low (1-5 hrs)</label><br/>
                    <input type="radio" id="medium" name="hrs" value="Medium"/>
                    <label htmlFor="medium">Medium (6-9 hrs)</label><br/>
                    <input type="radio" id="high" name="hrs" value="High"/>
                    <label htmlFor="high">High (10+ hrs)</label><br/>
                </fieldset>

                <label htmlFor="comments">Comments:</label>

                <label htmlFor="media">Favorite Kind of Entertainment:</label>
                <select id="media" name="media">
                    <option value="TV">TV Shows</option>
                    <option value="Movies">Movies</option>
                    <option value="Video Games">Video Games</option>
                    <option value="Books">Books</option>
                </select><br/><br/>

                <button type="submit">Submit</button>

            </form>
        </>
    );
};

export default Form1;