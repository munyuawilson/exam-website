require('./bootstrap');
import Nav from './components/Nav'
import Body from './components/body';


import ReactDOM from 'react-dom';

ReactDOM.render(<Nav />,document.getElementById("nav"));
ReactDOM.render(<Body />,document.getElementById("body"));

