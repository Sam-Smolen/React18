import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.css';

import JSON from './db.json';

import Header from './components/header';
import Footer from './components/footer';
import NewsList from './components/news-list';

class App extends Component {

    state = {
        active:false,
        news:JSON,
        filtered:[],
        footerText: 'I am a Happy Footer'
    }

    getKeywords = (event) => {
        console.log(event.target.value);
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1;
        });

        this.setState({
            filtered
        })
    }

    changeColor = () => {
        this.setState({
            active: this.state.active ? false : true
        })
    }

    render() {
        const {filtered,news,active,footerText} = this.state
        return (
            <div className="hey">
                < Header 
                    active = {active}
                    keyword = {this.getKeywords}
                    changeColor = {this.changeColor}
                />
                < NewsList 
                    news = {filtered.length === 0 ? news : filtered}
                >
                    <h1>I am Children</h1>
                </ NewsList >
                < Footer
                    footerText = { footerText }
                />
            </div>
        );
    }
    
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);