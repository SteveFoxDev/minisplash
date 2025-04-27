# minisplash

Miniature version of unsplash built in ReactJS, using Unsplash API

## About
minisplash is the 2nd version of a picture search app I had built previously. The original app used the Unsplash API as well, but it only returned 10 images and was very plain. I decided to rebuild it using infinite scroll. My first attempt at infinite scroll was using intersection observer but it was clunky and wasn't consistent. I ended up using a package called react-infinite-scroll-component, which was very easy to implement. This app mimics the styling of unsplash with 3 columns in a wide view port, without large gaps in the grid. I was able to recreate this by making 3 grid columns, then filling each column individually with basically 1/3rd of the data received from the API call. I used media queries to move the images evenly in the other two columns when the screen is resized. I also used React Context API to access state throughout the app. Overall I am happy with the app, it is small but I learned a lot trying technologies like intersection observer to create my own custom infinite scrolling feature.  

## Technologies Used

* React
* NodeJS
* HTML5
* CSS3
* axios
* JavaScript
* SCSS
* Git
* GitHub


## To Do 
 
* Add error component
