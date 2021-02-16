import React from 'react';
import './App.css';

import Details from "./Details"
import Posts from "./Posts";

function App() {
  return (
    <table>
      <tr>
        <td><Details /></td>
        <td><Posts /></td>
      </tr>
    </table>
  );
}

export default App;
