Ext.define('TrainingWeb.model.Person', {
    extend: 'Ext.data.Model',
    idProperty: 'personId', // this indicates that personId is the Primary Key (needed if we use this model in a relationship)
    fields: [
        { name: 'personId' },
        { name: 'firstName' },
        { name: 'lastName' },
        { name: 'email' },
        { name: 'phone' }
    ]
});