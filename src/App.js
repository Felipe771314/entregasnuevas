import './App.css';
import  Product from "./components/Product";
import Navbar from "./components/Navbar";
import ProductsModule from "./components/ProductsModule";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductsModule/>
     <Product/> 
      
  
    </div>
  );
}

export default App;
