import React, {Component} from "react";
import "./App.css";

//======================================================//
import "bootstrap/dist/css/bootstrap.min.css";
/* import React Icons */
// import { FaHome } from "react-icons/fa";
/* install vscode-styled-components into VSCode */
//import styled from "styled-components";
//React-router  https://reacttraining.com/react-router/web/guides/quick-start
//======================================================//
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Default from "./pages/DefaultPage";
import Cart from "./pages/CartPage";
//======================================================//
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidecart from './components/Sidecart';
import Footer from './components/Footer'
//======================================================//

class App extends Component {
  render() {
    return (
      <>
        {/* navbar  component, slidebar component, cart  component, footer component */}
        <Navbar/>
        <Sidebar></Sidebar>
        <Sidecart></Sidecart>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/products" exact component={Products}></Route>
          <Route path="/product/:id" component={SingleProduct}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer></Footer>
      </>
    );
  }
}

export default App;

/*
const color = "white";

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: ${color};
  font-size: ${probs => (probs.large ? "3rem" : "1rem")};
`;

function App() {
  return (
    <div>
      <h1 class="text-main">
        Hello from Jason's Tech store
        <FaHome />
      </h1>
      <Button large> Big Button</Button>
      <br />
      <Button> Normal Button</Button>
    </div>
  );
}

export default App;

*/
