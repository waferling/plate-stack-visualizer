## :fork_and_knife: Plate Stack Visualizer
A visualizer based on the "stack" data structure, in the form of plates.

## :sparkles: Technologies
* HTML
* CSS
* JavaScript

## :rocket: Features
* Push a plate
* Pop a plate
* Check the size of the stack
* Clear the stack
* Error handling of all edge-cases
* Local storage for data persistence
  
## :pushpin: The Process
I started with creating the containers and positioning them, then found a nice image of a plate. After some experimenting, I was able to make the plates look stacked against each other, and added the buttons. The UI was now ready, and I moved to implementing the logic in JavaScript.

I created a Stack class, complete with methods to push, pop, check if the stack is empty, return the size of the stack, and clear the stack. Next, I linked the buttons to the logic so a plate object would be rendered, with its image. The other methods were implemented similarly.

After that, I put a limit on the number of plates so they wouldn't exceed the height of the container, and added a message below to alert the user if the stack overflows, underflows, return its size, and confirm that the stack was cleared- based on the button pressed.

I also put in a favicon on the page. Lastly, I added in local storage for data persistence across browser sessions, so that the stack stays intact however the user left it- even if the page was reloaded or closed and visited later. For me, this project was a fun and engaging learning experience.

## :open_file_folder: Preview
