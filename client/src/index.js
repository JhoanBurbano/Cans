import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import LandingPage from './components/landing-page/landing';
import About from './components/views/about';
import Home from './components/views/home';
import View from './components/views/view';
import Create from './components/views/create';


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/app' element={<App/>}>
        <Route index element={<Home/>}/>
        <Route path='create' element={<Create/>}/>
        <Route path='can/:id' element={<View/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
  </Router>
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
