require('./bootstrap');
import Nav from './components/Nav'
import Body from './components/body';
import Services from './components/services';


import ReactDOM from 'react-dom';
import Services from './components/services';

ReactDOM.render(<Nav />,document.getElementById("nav"));
ReactDOM.render(<Body />,document.getElementById("body"));
ReactDOM.render(<Services />,document.getElementById("services"));

