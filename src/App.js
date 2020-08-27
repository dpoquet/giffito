import React from 'react';
import './App.css'; 
import { Route, Link } from 'wouter';
import DetailPage from './pages/Detail';
import SearchPage from './pages/Search';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
		<div className="App-wrapper">
			<header>
				<h1><Link to="/">Giffy</Link></h1>
			</header>

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
