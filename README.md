The Giphy app project was created to learn how to pull data from an API and how to break it down in React. 

Contributions: Logan A.

The Giphy app was a really fun and eye opening experience for me because I got a taste of what React is capable of. This app allows users to search the Giphy API for their
favorite Gifs. ( Mine are the Kermit the frog gifs. What about you? )



FETCH REQUEST: The flow of data starts with our fetch request. In the service file I set up a fetch to get all the trending gifs to display first. It made sense to do this since
we want something to be displayed to our user when they first launch the app. 

MODEL: I set up an interface to allow easy access to calling the data in other files. I made sure to model the interface how the API is structured, but only with the data I
need to use. 

MAIN FILE: In the main is where we want to handle the data first coming in. To do this, I set up a hook with a variable with the type of Giphy[] - this means the variable is an
array of Gifs. Now that I have that information I need to pass that array down as a prop to the Results list file.

RESULTS LIST FILE: Once the array of Gifs data is passed down from the main file I'm apple to use .map. The .map method allows us to go through each single Gif in the array and do
something with the data. In my example, I set up the .map to create a Result component for each Gif. Doing that alone doesn't get a displayed list of Gifs. I need to pass down a
single Gif as a prop to the Result component and create the HTML structure do display the data.

RESULT FILE: In the Result file is where the magic happens. This file is solely for creating the layout of a single Gif. Here we can use our interface that we created to dip into the data and pull what we need. We use JSX to dispaly the data wrapped in HTML tags like how you would normally fill HTML tags. Once the data is placed in the tags I used CSS to add styles like normal.
