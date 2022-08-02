import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProductList from "./components/ProductList";


function App(){
  return(
    <Router>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes>
              <Route exact path="/">
                <ProductList />
              </Route>
              <Route exact path="/add">
                <AddProduct />
              </Route>
              <Route exact path="/edit/:id">
                <EditProduct />
              </Route>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;