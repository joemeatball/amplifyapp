import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
<script src="https://apis.google.com/js/platform.js" async defer></script>
   <meta name="google-signin-client_id" content="550364092484-bfg270ovnshopajsptqcgglrm2dfhevc.apps.googleusercontent.com.apps.googleusercontent.com">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
    </div>
<div class="g-signin2" data-onsuccess="onSignIn"></div>
  );
}

export default App;
