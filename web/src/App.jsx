import React from 'react';
import {FiSearch, FiPackage} from 'react-icons/fi'

import './styles/App.css'

function App() {
  return (
    <>
      <header id="header">
        <h1 className="title-aside">Easy Install - Linux</h1>
        <FiPackage className="title-aside" size={[60]} color="rgb(18, 117, 231)"/>
      </header>

      <div id="app">
        <form className="pesquisa">

        <input type="search" id="texto" />
        <FiSearch className="btn"/>
        </form>
      </div>
    </>
  );
}

export default App;
