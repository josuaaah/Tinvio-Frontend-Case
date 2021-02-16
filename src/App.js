import React from 'react';
import './App.css';

import Details from "./Details"
import Posts from "./Posts";

function App() {
  return (
    <div class='parent inline-flex-parent'>
      <div class='child'><Details /></div>
      <div class='child'><Posts /></div>
    </div>
  );
}

export default App;
