import './App.css';

function Header() {
  return (
    <div className="header" style={{}}>
      <h1>Ecommerce App</h1>
    </div>
  )
}

function Item(props) {
  return (
    <div className="item">
      <div className='itemName'>{props.name}</div>
      <div className='itemPrice'>Price: {props.price}</div>
      <div className='itemDescription'>Description: {props.description}</div>
      <button className="addToCart" type='button'>Add to cart</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <div className="ItemContainer">
        <Item name="Banana" price="50rs" description="This a yellow long thingy" />
        <Item name="Banana" price="50rs" description="This a yellow long thingy" />
        <Item name="Banana" price="50rs" description="This a yellow long thingy" />
        <Item name="Banana" price="50rs" description="This a yellow long thingy" />
        <Item name="Banana" price="50rs" description="This a yellow long thingy" />
        <Item name="Banana" price="50rs" description="This a yellow long thingy" />
        <Item name="Banana" price="50rs" description="This a yellow long thingy" />
        <Item name="Banana" price="50rs" description="This a yellow long thingy" />
        <Item name="Banana" price="50rs" description="This a yellow long thingy" />
      </div>
    </div>
  );
}

export default App;
