import React from 'react';
import './App.css'; 
import { Route } from 'wouter';
import DetailPage from './pages/Detail';
import SearchPage from './pages/Search';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';

function App() {
  return (
		<div className="App-wrapper">
      <Header />
      <div className="App-content">
        <Route component={Home} path="/" />
        <Route component={SearchPage} path="/search/:keyword" />
        <Route component={DetailPage} path="/:id" />
        <Route component={ErrorPage} path="/404" />
      </div>
		</div>
	);
}

export default App;
