import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: '',
            name: '',
            price: ''
        }
        this.resetInputs = this.resetInputs.bind(this);
        this.createProduct = this.createProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        console.log(this.props);
        if (this.props.match.params.id) {
            axios.get(`/api/inventory/${id}`)
            .then(res => this.setState(res.data[0]))
            .catch(err => console.log(err))
        }
    }

    handleInput(val, inputType) {
        this.setState({[inputType]: val});
    }

    resetInputs() {
        this.setState({name: '', img: '', price:''})
    }

    updateProduct() {
        console.log(this.state);
        axios.put('/api/inventory', this.state)
        .then()
        .catch(err => console.log(err))
    }

    createProduct() {
        axios.post('/api/inventory', this.state)
        .then()
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div id='dashboard'>
                dashboard
                <img id='form-img' src={this.state.img} />
                <h3>Image URL:</h3>
                <input onChange={(e) => this.handleInput(e.target.value, 'img')}placeholder='URL' value={this.state.img} />
                <h3>Product Name:</h3>
                <input onChange={(e) => this.handleInput(e.target.value, 'name')}placeholder='Name' value={this.state.name} />
                <h3>Price:</h3>
                <input onChange={(e) => this.handleInput(e.target.value, 'price')}placeholder='0' type='number' value={this.state.price} />
                <div className='form-buttons'>
                    <button className='form-button' onClick={this.resetInputs}>Cancel</button>
                    {this.props.location.pathname === '/add' ? 
                    <Link to='/'><button className='form-button' onClick={this.createProduct}>Add to Inventory</button></Link> :
                    <Link to='/'><button onClick={this.updateProduct} className='form-button'>Save Changes</button></Link>}
                </div>
            </div>
        )
    }
}

export default Form;