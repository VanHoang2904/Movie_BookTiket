import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './routes';
import DefaultLayout from './DefaultLayout/index';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
            const Page = route.component
            let Layout = DefaultLayout
            Layout = route.layout  ?  route.layout : Fragment 
            return <Route key={index} path={route.path} element = {<Layout><Page /></Layout>} />
          })}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
