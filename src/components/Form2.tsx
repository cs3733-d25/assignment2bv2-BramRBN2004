// src/components/Form2.tsx
import React from 'react';

const Form2: React.FC = () => {
    return (
        <>
            <h2>Ali Riad's Basketball Feedback Form</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" /><br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" /><br /><br />

                <label htmlFor="dribbles">Can you dribble?</label>
                <input type="checkbox" id="dribbles" name="dribbles" /><br />

                <label htmlFor="shoots">Can you shoot?</label>
                <input type="checkbox" id="shoots" name="shoots" /><br />

                <label htmlFor="plays">Do you play regularly?</label>
                <input type="checkbox" id="plays" name="plays" /><br />

                <label htmlFor="level">Skill Level:</label><br />
                <input type="radio" id="level1" name="level" value="beginner" />
                <label htmlFor="level1">Beginner</label><br />
                <input type="radio" id="level2" name="level" value="intermediate" />
                <label htmlFor="level2">Intermediate</label><br />
                <input type="radio" id="level3" name="level" value="expert" />
                <label htmlFor="level3">Expert</label><br />

                <label htmlFor="comments">Comments:</label><br />
                <textarea id="comments" name="comments"></textarea><br /><br />

                <label htmlFor="dropdown">Favorite Position:</label>
                <select id="dropdown" name="position">
                    <option value="guard">Guard</option>
                    <option value="forward">Forward</option>
                    <option value="center">Center</option>
                </select><br /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Form2;
