# React Routing Part 2: Dynamic Routing

Improve your band page's routing by adding a dynamic route!

You should create a view which will show details of one of the band's albums. As we cannot know in advance which album the user will want to see, we will have to decide on what to render **after** the user has chosen an album...

### Instructions

These instructions mirror what you just saw in the live coding, but feel free to ask if there is anything you want to clarify. :-)

1. In **`App.js`**, refactor (rewrite) your `<Route />` components. They should no longer have both an opening and closing tag (e.g. `<Route>...</Route>`) but instead should use a "self-closing" syntax (e.g. `<Route ... />`).

2. Create a new component in your project's "views" directory called "NotFound". This should render a `h2` element in your UI with the content "Page Not Found!".

3. In **`App.js`**, change your routing so that you are no longer using a `<Redirect />` when the user navigates to an unknown path. Instead, when the user does this, you should use a `<Route />` to render the `NotFound` component.
    - Remember that this should work for **any** path **not** covered by your routing. You can test it by trying to navigate to some random paths (e.g. "/scoobydoo" or "/abc123"), and making sure you always see the `NotFound` component!

4. Next, create a new component in your project's "views" directory called "Albums". For now, this should render an empty `div`.

5. Create another new component in your project's "views" directory called "CurrentAlbum". For now, this should render a `div` in your UI with the content "I am an Album!".

6. Back in the **`Albums`** component, use a `useState` hook to create a state variable called `allAlbums`. This should be initialized to an empty array. 

7. Create a function called `fetchData`. We will use this to **pretend** to fetch some data from a server, containing the details of albums by your music band. In reality, this function will simply return an array of **at least 3** objects. Each object should represent one of your band's albums, including "id", "title" and "year" properties (you can add others if you like!)

8. Use a `useEffect` hook to update the `allAlbums` state variable so it has the value of the array of 3+ album objects returned from the `fetchData` function.

9. Still in the **`Albums`** component, render a `h1` tag with the content "Albums" in your UI.

10. Underneath the `h1`, you should create a `ul` element. Inside this, you should use **.map()** on your `allAlbums` state variable to render a list of **`<li>`** elements in your UI (one for each object inside the `albums` array). Each **`<li>`** should contain a React Router **`<Link />`** component (don't forget to import this!). For now, the `to` property of each `<Link />` should be set to "/albums/album".

11. Now, in **`App.js`**, create two new routes: 
    - The first route should render the `Album` component when the user navigates to the path "/albums".
    - The second route should render the `currentAlbum` compnent when the user navigates to the path "/albums/album".
    - Make sure your app is working by going to the "/albums" path and clicking on each of the list items. Do you see the `Album` component ("I am an Album!")? If not, think about why this might be!

---

## Part 1

Please create a small React app for your favorite music band.  
Your navigation should contain as many items as the members of your band (4+ members. You may like The White Stripes, but we need more routes!)

Use the **React Router** package to handle your navigation.  

### BONUSES

If you have some extra time:

1. You can add some extra styling to your pages to make them look even nicer! 

2. If you have enough time, you are also welcome to research, and experiment with, **transitions** between views - how we can add some extra effects to our transitions from one view to another. Here is an interesting library:

- https://reactcommunity.org/react-transition-group/