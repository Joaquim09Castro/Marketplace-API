const ClientController = require('../controllers/ClientsController');

module.exports = (app) => {

    app.get('/clients', ClientController.getAllClients());

    app.get('/clients/:id', ClientController.getOneClient());

    app.get('/clients/email/:email', ClientController.getOneClientEmail());

    app.post('/clients/add', ClientController.addClient());

    app.put('/clients/:id', ClientController.updateClient());

    app.delete('/clients/:id', ClientController.deleteClient());

};