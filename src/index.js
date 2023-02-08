import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './assets/views/App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/global.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './assets/store/reducers/rootReducer';


// Fake comments
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung conment của lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

const reduxStore = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
