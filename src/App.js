import logo from './logo.svg';
import './App.css';
import Products from './components/products';

import store from "./helpers/store"

function App() {
  return (
    <div className="App">
      <Products store={store} />
    </div>
  );
}

export default App;
