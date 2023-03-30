import logo from './logo.svg';
import './App.css';

function App() {
  const cart = [
    {name:"Anik", price:10},
    {name:"Bnik", price:20},
    {name:"Cnik", price:30},
    {name:"Dnik", price:40},
    {name:"Enik", price:50},
  ];
  return (
    <div className="App">
      {
        cart.map(product => <Product name={product.name} price={product.price}></Product>)
      }
    </div>
  );
}

function Product(props){
  return (
    <div className='product-container'>
      
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price} BDT</h4>
    </div>
  )
}

export default App;
