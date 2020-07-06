import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {

    render() {
        const {img, name, price, id} = this.props.item;
        return (
            <div>
                <img alt='' src={img} />
                <h1>{name}</h1>
                <p>${price}</p>
                <button onClick={() => this.props.deleteItemFn(id)}>Delete</button>
                <Link to={`/edit/${id}`}><button>Edit</button></Link>
            </div>
        )
    }
}

export default Product;