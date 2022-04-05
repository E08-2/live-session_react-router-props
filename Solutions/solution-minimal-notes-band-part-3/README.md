## React Router Part 3: Passing Props

Using the project you have been working on (about your own favourite band), see if you can change your band page's routing:

1. Delete the `fetchData` function from the `Albums` component. You can also delete the state variables from the `Albums` and `CurrentAlbum` components.
2. Add the `fetchData` function (remember: this simulates a GET request to a server) and the `allAlbums` state variable to the `App` parent component. This will now be the only state in your project.
3. Use **props** in your React Router routes to pass appropriate data from the parent `App` component to the `Albums` and `CurrentAlbum` components.
- First try to use the more modern technique of using **children** elements inside your `Route` opening and closing tags, e.g.
	
```jsx
<Route>
    <ChildElement />
</Route>
```

- When you are done, make sure all your routes are still working as expected with the new structure!

- If everything is working, comment out the last changes, and try to use an older-style **render** method to achieve the same results, e.g.
	
```jsx
<Route render={...} />
```

- If everything is still working, well done! Remember that you will usually want to use the easier, more modern "children element" approach, but it will be good for you to understand the "render" method if you see it in someone else's code. :-)

4. Use the `useHistory` hook to add a "Back" button to your `<NotFound />` component, if you haven't done so already. Also, make sure the user will **always** see a `<NotFound />` component if they go to an invalid URL.

5. **Only if you have extra time**, research the `useHistory` hook, and see if you can find other interesting ways to use it in your project!

Good luck, and have fun. :-)

---

## Part 2

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
    - The second route should render the `currentAlbum` component when the user navigates to the path "/albums/album".
    - Make sure your app is working by going to the "/albums" path and clicking on each of the list items. Do you see the `Album` component ("I am an Album!")? If not, think about why this might be!

---

### Part 2B!

12. If you didn't already add an "Albums" link to your `Navigation` component, feel free to do so now. :-)

13. Now, in **`Albums.js`** make sure each `<Link>` has a **"to"** property set to a **dynamic** path. This will always start with "/albums/", and end with the **id** value of the `album` object you were looking at when you created the `Link`. Each `Link` should also render some text, for example, the name of the current album and its year. 

14. Now, in **`App.js`** update your `/albums/album` route to be a **dynamic route**. It should use a **param** at the end of the path, e.g. ":id". The Route should render the `CurrentAlbum` component.

**Note:** This will mean that when you click one of your `Links`, the `Route` you just created can take the user to the correct page!

15. Now, in **`CurrentAlbum.js`**, add a state variable which **matches** the `albums` array in the `Albums` component.

16. Finally, still in **`CurrentAlbum.js`**, see if you can use `useParams()` just like I did to **take the parameter** from the URL the user navigated to when they asked to see a specific album, and match it to one of the album objects in the state variable. You can then use the object you found to show information about **that specific album**.

**Note:** It doesn't matter which album the user clicked on! Your dynamic route plus `useParams` can find out which object the user wants to see **after they click** the link in the `Albums` component. :-)

**Note 2:** Feel free to check out the GIF I will send in the **"Exercises"** Slack channel for an example of how your app should work at the end of this exercise.

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
