import React from "react";
// useParams hook
import { useParams, Redirect } from "react-router-dom";
import NotFound from "./NotFound";

const CurrentAlbum = props => {
    console.log("The album I clicked in the Albums component was:", props.album);

    // Get our "id" parameter (see Route 7 in App.js!) and put it in a variable called "id" (using object destructuring)
    // E.g. If the user clicked a link that went to "/albums/new-album/2"...
    // The value of "id" would be "2".
    // Note that we cannot know in advance which link in <Albums /> the user will click!
    // * But now, using the parameter, we can find out what the user clicked AFTER they do so...
    // * ... And render the correct content.
    const { id } = useParams();

    // ! Alternative to using object destructuring - takes longer!
    // const params = useParams();
    // const id = params.id;

    const chosenAlbum = props.allAlbums.find(album => album.id === id);

    // If the user finds an album with the same id as the "id" parameter...
    // Render the details of that album
    if (chosenAlbum) {
        return ( 
            <div>My ID is {chosenAlbum.id}. My title is {chosenAlbum.title}. My year is {chosenAlbum.year}.</div>
        )
    } else {
        return (
            // <Redirect to="/" />

            // If the user tries to find an album which doesn't exist, e.g. via "/albums/new-album/999"...
            // Render a <NotFound /> component
            <NotFound />
        )
    }
}

export default CurrentAlbum;