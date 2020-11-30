import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Deals from "./components/Deals";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Pizzas from "./components/Pizzas";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/Data";
import { GlobalStyle } from "./globalStyles";
import { dealData } from "./components/Deals/data";
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pizzas">
          <GlobalStyle></GlobalStyle>
          <Pizzas></Pizzas>
          <Products heading="Choose your favorite" data={productData} />
          <Footer />
        </Route>
        <Route path="/cart">
          <GlobalStyle></GlobalStyle>
          <Cart />
          <Footer />
        </Route>
        <Route path="/">
          <GlobalStyle></GlobalStyle>
          <Hero></Hero>
          <Deals data={dealData} />
          <Feature />
          <Products heading="Sweet Treats For You" data={productDataTwo} />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
