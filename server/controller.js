
module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
        .then(products => res.status(200).send(products))
        .catch(err => res.status(500).send(err));
    },
    getItem: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.get_item(id)
        .then(product => res.status(200).send(product))
        .catch(err => res.status(500).send(err));
    },
    addItem: (req, res) => {
        const db = req.app.get('db');
        const {name, price, img} = req.body;
        db.create_product(name, price, img)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    deleteItem: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        console.log(id);
        db.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    },
    updateItem: (req, res) => {
        const db = req.app.get('db');
        const {name, price, img, id} = req.body;
        console.log(req.body)
        db.update_product(id, name, price, img)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    }
}