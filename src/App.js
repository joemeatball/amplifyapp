import React from 'react';
import logo from './logo.svg';
import './App.css';
function App() {
  return (
 <div className="App">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
   <meta name="google-signin-client_id" content="550364092484-bfg270ovnshopajsptqcgglrm2dfhevc.apps.googleusercontent.com.apps.googleusercontent.com"/>
   
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from V2</h1>
      </header>
        <div class="g-signin2" data-onsuccess="onSignIn">Sign in</div>
    </div>

  );
}

export default App;
