import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inventory: []
        }
    }

    componentDidMount() {
        this.getInventory();
    }
    getInventory() {
        axios.get('/api/inventory')
        .then(res => this.setState({inventory: res.data}))
        .catch(err => console.log(err));
    }
    deleteItem = (id) => {
        axios.delete(`/api/inventory/${id}`)
        .then(res => this.getInventory())
        .catch(err => console.log(err))
    }

    render() {
        const mappedProducts = this.state.inventory.map((item, i) => (<Product key={i} setProductFn={this.props.setProductFn} deleteItemFn={this.deleteItem} item={item} />));
        return (
            <div>Dashboard
                {mappedProducts}
            </div>
        )
    }
}

export default Dashboard;