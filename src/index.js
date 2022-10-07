import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createClient, Provider } from 'urql';
import reportWebVitals from './reportWebVitals';

const client = createClient({
  // uri: 'https://flyby-gateway.herokuapp.com/',
  // uri: '',
  url: 'https://magentopractice.m2dev.invanos.net/kagento/graphql',
  // link: new createHttpLink({
  //   uri: 'https://magentopractice.m2dev.invanos.net/kagento/graphql',
  //   // uri: 'https://flyby-gateway.herokuapp.com/',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
