import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';

import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news-list';

class App extends Component {

    state = {
        news:JSON
    }

    render() {
        return (
            <div className="hey">
                < Header />
                < NewsList 
                    news = {this.state.news}
                />
            </div>
        );
    }
    
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);