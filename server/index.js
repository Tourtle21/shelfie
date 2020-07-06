require('dotenv').config();
const express = require('express'),
    massive = require('massive'),
    ctrl = require('./controller'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    app = express();

app.use(express.json());

app.get('/api/inventory', ctrl.getInventory);
app.get('/api/inventory/:id', ctrl.getItem);
app.post('/api/inventory', ctrl.addItem);
app.delete('/api/inventory/:id', ctrl.deleteItem);
app.put('/api/inventory', ctrl.updateItem);

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log("DATABASE CONNECTED")
}).catch(err => console.log(err))

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));