// import logo from './logo.svg';
import './App.css';

function App() {

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illistrator', price:'$60'}
  ]

  return (
    <div className="App">
      <header className="App-header">
      <h1>My <span style={{color:"lightblue"}}> React</span>  practice</h1>

     
      
      <Product Product= {products[0]}></Product>
      <Product Product= {products[1]}></Product>
  
      

      </header>
    </div>
  );
}

function Product(props){
  const productStyle={
    border:'2px solid gray', 
    borderRadious:'5px',
    backgroundColor:'gray',
    height:'220px',
    width:'280px',
    float:'left',
    margin:'15px'
  }
const btn={
  backgroundColor:'#008CBA',
  border: 'none',
  color: 'white',
  padding: '15px 32px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  
}
const {name, price} =props.Product;
  return(
    <div style={productStyle}>
    <h2>{name} </h2>
    <h1>Price: {price}</h1>
    <button style={btn}> Buy Now </button>
    </div>
  )
}


export default App;
