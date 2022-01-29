The Giphy app project was created to learn how to pull data from an API and how to break it down in React. 

Contributions: Logan A.

The Giphy app was a really fun and eye opening experience for me because I got a taste of what React is capable of. This app allows users to search the Giphy API for their
favorite Gifs. ( Mine are the Kermit the frog gifs. What about you? )



FETCH REQUEST: The flow of data starts with our fetch request. In the service file I set up a fetch to get all the trending gifs to display first. It made sense to do this since
we want something to be displayed to our user when they first launch the app. 

MODEL: I set up an interface to allow easy access to calling the data in other files. I made sure to model the interface how the API is structured, but only with the data I
need to use. 

MAIN FILE: In the main is where we want to handle the data first coming in. To do this, I set up a hook with a variable with the type of 
