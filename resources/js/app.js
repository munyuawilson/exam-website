require('./bootstrap');
import Nav from './components/Nav'
import Body from './components/body';
import Services from './components/services';
import Footer from './components/footer';
import Pricing from './components/pricing';


import ReactDOM from 'react-dom';


ReactDOM.render(<Nav />,document.getElementById("nav"));
ReactDOM.render(<Body />,document.getElementById("body"));
ReactDOM.render(<Services />,document.getElementById("services"));
ReactDOM.render(<Footer />,document.getElementById("footer"));
ReactDOM.render(<Pricing />,document.getElementById("pricing"));

