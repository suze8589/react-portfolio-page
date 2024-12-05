// App.jsx
import React from "react";
import "./App.css";
import cat from "./assets/cat.jpg";

/*function App() {
  return (
    <div className="App">
    <div className="container">
      <div className="content">
        <h1>My Portfolio Page</h1>
        <h1>Susana<br/>Eduardo</h1>
        
        <img
      src={photo}
      alt='Susana Photo'
      className='rounded-lg md-8 md:mb-0 md:mr-8'
      width={300}
      height={450}
      />
        <p></p>
        <div className="social-links">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.google.com/" target="_blank" rel="noreferrer"><i className="fab fa-google"></i></a>
        </div>
      </div>
    </div>
  </div>
      
    
  );
};

export default App; // Default <export></export>
*/

function App() {
  return (
    <div className="container text-white p-50 rounded-lg max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="title text-red-500 text-lm font-bold">
          {" "}
          Kaiser Chiefs New Album:
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={cat}
          alt="A man taking a bath in a thunder storm with his cat!"
          className="rounded-lg mb-4 md:mb-0 md:mr-4"
          width="300"
          height="450"
        />
        <div>
          <h2 className="title text-red-500 text-4xl mb-8 font-bold">
            "Feline Frenzy"
          </h2>
          <p className="text-black text-md mb-8 p-4">
            Get ready to unleash your inner feline! The Kaiser Chiefs are back
            with a purr-fectly crafted collection of tracks that celebrate the
            wild, whimsical, and wonderfully unpredictable world of our furry
            friends. From the catchy hooks that make you want to dance to the
            anthemic choruses that echo the spirit of independence, "Feline
            Frenzy" is a tribute to all the cat lovers out there.
          </p>
          <div className="flex justify-center mt-8 space-x-8">
            <a href="#" className="text-red-500 text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-red-500 text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-red-500 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-red-500 text-2xl">
              <i className="fas fa-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
