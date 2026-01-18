## :fork_and_knife: Plate Stack Visualizer
An interactive visualizer based on the "stack" data structure, in the form of plates.

## :sparkles: Technologies
* HTML
* CSS
* JavaScript

## :rocket: Features
* Push a plate
* Pop a plate
* Check the size of the stack
* Clear the stack
* Overflow protection (max 13 plates) + underflow prevention
* Dynamic status messaging for all operations
* localStorage persistence across browser sessions/reloads
* Clean MVC separation (Stack class → render → events)
* Responsive design
  
## :pushpin: The Process
I started with the containers and positioning, then sourced a clean plate image. After experimenting, I achieved realistic plate stacking visuals and crafted the buttons.

Next came the core logic: a complete Stack class with push/pop/isEmpty/size/clear methods. I connected each button to dynamically render plate objects (div+img) matching the stack state.

To make it production-ready, I put a limit on the number of plates so they wouldn't exceed the height of the container, and added a message below to alert the user if the stack overflows, underflows, return its size, and confirm that the stack was cleared- based on the button pressed.

Finally, I implemented localStorage persistence, so the stack state survives page reloads and browser restarts. This project was a rewarding dive into DSA + real-world JS engineering.

## :open_file_folder: Preview
