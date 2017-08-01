import React from "react";
import ReactDOM from 'react-dom';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyDzngDD_3919DCX-O4ItRzbWn0iJDkssvg';

const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('.container'));
