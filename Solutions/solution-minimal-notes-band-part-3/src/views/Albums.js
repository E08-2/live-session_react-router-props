import React from "react";
import { Link } from "react-router-dom";

const Albums = props => {
    // Render a list of some of Black Sabbath's albums
    return (
        <ul>
            { 
                props.allAlbums.map(albumObj => {
                    return (
                        // For every "album" object in the "albums" state array, create a React Router <Link />
                        // This time, the "to" prop does not go to a static URL...
                        // Instead, each <Link /> goes to a path based on each album's unique id property.
                        // E.g. The first Link, based on the first "album" object (id 1) will have the path "/albums/new-album/1"
                        // Etc...
                        <li>
                            <Link to={`/albums/new-album/${albumObj.id}`}>{albumObj.title} ({albumObj.year})</Link>
                        </li>
                    );
                })
            }
        </ul>
    );
}

export default Albums;