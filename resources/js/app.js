require('./bootstrap');
import Nav from './components/Nav'

import Services from './components/services';
import Footer from './components/footer';
import Pricing from './components/pricing';
import Testimonial from './components/testimonial';


import ReactDOM from 'react-dom';
import Brand from './components/brand';
import Secondsection from './components/secondsection';
import LoginForm from './components/loginform';



ReactDOM.render(<Nav />,document.getElementById("nav"));
ReactDOM.render(<Brand />,document.getElementById("brand"));
ReactDOM.render(<Services />,document.getElementById("services"));
ReactDOM.render(<Footer />,document.getElementById("footer"));
ReactDOM.render(<Pricing />,document.getElementById("pricing"));
ReactDOM.render(<Testimonial />,document.getElementById("testimonial"));

ReactDOM.render(<Secondsection />,document.getElementById("secondsection"));
ReactDOM.render(<LoginForm />,document.getElementById("form"));