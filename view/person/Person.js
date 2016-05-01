Ext.define('TrainingWeb.view.person.Person', {
    extend: 'Ext.grid.Panel',
    xtype: 'personview',

    requires: [
        'TrainingWeb.view.person.PersonModel',
        'TrainingWeb.view.person.PersonController'
    ],

    controller: 'person',
    viewModel: 'person',

    
    columns: [
        { text: 'First Name', dataIndex: 'firstName' },
        { text: 'Last Name', dataIndex: 'lastName' },
        { text: 'Email', dataIndex: 'email' },
        { text: 'Phone', dataIndex: 'phone' }
    ],

   // Option 1 bind directly using this approach
   // store: 'personstore',

    bind: {
        // Option 2 bind via the view model
        //          use this approach if we need a copy of the global store for this particular view i.e. if you need to filter the store (see the view model)
        store: '{people}',
        title: '{myTitle}'
    },
    listeners: {
        rowdblclick: 'onRowClick'
    }

});

