import React from 'react';
import './App.css'; 
import './components/Gif.css'; 
import GifList from './components/GifList';
import { Route, Link } from 'wouter';
import GifDetail from './components/GifDetail';

function App() {
  return (
    <div className="App-content">
      <header>
        <h1>Giffy</h1>

        <ul className="nav">
          <li><Link to="/gif/fcbarcelona">Gif de FCB</Link></li>
          <li><Link to="/gif/homer">Gif de Homer</Link></li>
          <li><Link to="/gif/morty">Gif de Morty</Link></li>
          <li><Link to="/gif/rick">Gif de Rick</Link></li>
        </ul>
      </header>
      
      <Route component={GifList} path="/gif/:keyword" />
      <Route component={GifDetail} path="/:id" />
    </div>
  );
}

export default App;
