require('./bootstrap');
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import { createRoot } from 'react-dom/client';



import Services from './components/services';
import Footer from './components/footer';
import Pricing from './components/pricing';
import Testimonial from './components/testimonial';

import Brand from './components/brand';
import Secondsection from './components/secondsection';
import LoginForm from './components/loginform';
//ReactDOm is not being used lately

const form= createRoot(document.getElementById("form"));
form.render(<LoginForm />);
const nav= createRoot(document.getElementById("nav")).render(<Nav />);
const brand= createRoot(document.getElementById("brand")).render(<Brand />);
const services= createRoot(document.getElementById("services")).render(<Services />);
const footer= createRoot(document.getElementById("footer")).render(<Footer />);
const pricing= createRoot(document.getElementById("pricing")).render(<Pricing />);

const secondsection= createRoot(document.getElementById("secondsection")).render(<Secondsection />);

const testimonial= createRoot(document.getElementById("testimonial")).render(<Testimonial />);
/*
ReactDOM.render(<Nav />,document.getElementById("nav"));
ReactDOM.render(<Brand />,document.getElementById("brand"));
ReactDOM.render(<Services />,document.getElementById("services"));
ReactDOM.render(<Footer />,document.getElementById("footer"));
ReactDOM.render(<Pricing />,document.getElementById("pricing"));
ReactDOM.render(<Testimonial />,document.getElementById("testimonial"));

ReactDOM.render(<Secondsection />,document.getElementById("secondsection"));
*/