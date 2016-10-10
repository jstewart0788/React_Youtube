import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCI_iPQoslQ145_vAo3tZkH6lqxFdtpXgY";

const App = () => {

  return (
  <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
