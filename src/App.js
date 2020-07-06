import React, {Component} from 'react';
import './App.css';

// import Dashboard from './Components/Dashboard/Dashboard';
// import Form from './Components/Form/Form';
import routes from './routes/routes';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: [],
      selectedProduct: {}
    }

    this.getInventory = this.getInventory.bind(this);
    this.setProduct = this.setProduct.bind(this);
  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
    .catch(err => console.log(err));
  }

  setProduct(product) {
    this.setState({selectedProduct: product});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className='display-page'>
          {routes}
        </main>
      </div>
    );
  }
}

export default App;
