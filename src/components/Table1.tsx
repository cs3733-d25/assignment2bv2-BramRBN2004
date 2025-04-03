import React from "react"

const Table1: React.FC = () => {
    return (
        <table>
            <h2>MEDIA I'VE ANALYZED</h2>
            <table className="collapse">
                <tr>
                    <th>Name</th>
                    <th>Media Type</th>
                    <th>Themes/Messagaes</th>
                </tr>
                <tr>
                    <th>Undertale</th>
                    <th>Video Game</th>
                    <th>Actions have consequences</th>
                </tr>
                <tr>
                    <th>Attack on Titan</th>
                    <th>Anime</th>
                    <th>Wars, Survival, Cycle of Violence, and the human condition</th>
                </tr>
                <tr>
                    <th>The Incredibles</th>
                    <th>Movie</th>
                    <th>Family, Not taking life for granted and enjoying the life you have</th>
                </tr>
            </table>
        </table>
    );
};

export default Table1;