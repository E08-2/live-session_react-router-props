import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./views/Home";
import Ozzy from "./views/Ozzy";
import Tony from "./views/Tony";
import Geezer from "./views/Geezer";
import Bill from "./views/Bill";
import NotFound from "./views/NotFound";
import Albums from "./views/Albums";
import CurrentAlbum from "./views/CurrentAlbum";
import "./App.css";

const App = () => {
    const [albums, setAlbums] = useState([]);
    // * Exercise 4: State variables to track the details of the new album the user is creating in the <Albums /> form
    const [newAlbumTitle, setNewAlbumTitle] = useState("");
    const [newAlbumYear, setNewAlbumYear] = useState("");

    // When the app first renders - and never again!...
    // Update the "albums" state variable using the "pretendToUseFetch" function
    useEffect(() => {
        setAlbums(pretendToUseFetch());
    }, [])

    // Pretend we are using fetch() to GET the following data...
    const pretendToUseFetch = () => {
        return [
            {
                id: "1",
                title: "Black Sabbath",
                year: "1970"
            },
            {
                id: "2",
                title: "Master of Reality",
                year: "1971"
            },
            {
                id: "3",
                title: "Sabotage",
                year: "1975"
            },
            {
                id: "4",
                title: "Kittens For Everyone!",
                year: "2022"
            }
        ]
    }

    // * Exercise 4: Create a function to update the title of a new album the user is creating in the Form
    const updateNewAlbumTitle = newTitle => {
        setNewAlbumTitle(newTitle);
    }

    // * Exercise 4: Create a function to update the year of a new album the user is creating in the Form
    const updateNewAlbumYear = newYear => {
        setNewAlbumYear(newYear);
    }

    // * Exercise 4: Create a function to:
    //  - (1) add a new album the user has created to the state array of albums
    //  - (2) reset the value of the "new album" state variables so the user can start creating another new album
    const updateAlbums = newAlbum => {
        setAlbums(albums.concat(newAlbum));
        setNewAlbumTitle("");
        setNewAlbumYear("");
    }

    return (
        <div>
            <Router>
                <header>
                    <Navigation />
                </header>

                {/* 
                When the user navigates to a path, e.g. "localhost:3000/" or "localhost:3000/vocals" 
                The Router will handle all the different paths the user may need to take
                We will set up a Route to handle each path the user can take
                */}
                <main>
                    <Switch>
                        {/* Route 1: "Home" page */}
                        {/* // ? Update 1: Refactor Routes to use a self-closing syntax */}
                        {/* <Route path="/" exact>
                            <Home />
                        </Route> */}

                        <Route path="/" exact component={Home} />

                        <Route path="/vocals" exact component={Ozzy} />

                        <Route path="/guitar" exact component={Tony} />

                        <Route path="/bass" exact component={Geezer} />

                        <Route path="/drums" exact component={Bill} />
                        
                        {/* Route 6: Make a route to a view which renders a list of albums */}
                        <Route path="/albums" exact>
                            <Albums 
                                allAlbums={albums} 
                                newTitle={newAlbumTitle}
                                newYear={newAlbumYear} 
                                update={updateAlbums}
                                updateTitle={updateNewAlbumTitle}
                                updateYear={updateNewAlbumYear} 
                            />
                        </Route>

                        {/* // ? Route 7: Make a DYNAMIC route to show the details of a specific album */}
                        <Route path="/albums/new-album/:id" exact>
                            <CurrentAlbum allAlbums={albums} />
                        </Route>

                        {/* // Route 8: Change Redirect to a Not Found Component using a wildcard (*) path */}
                        {/* <Redirect to="/" /> */}

                        <Route path="*" component={NotFound} />
                    </Switch>
                </main>

            </Router>
        </div>
    )
}

export default App;