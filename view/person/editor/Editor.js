Ext.define('TrainingWeb.view.person.editor.Editor', {
    extend: 'Ext.form.Panel',
    xtype: 'personeditorview',
    reference: 'personeditorviewref',

    requires: [
        'TrainingWeb.view.person.editor.EditorModel',
        'TrainingWeb.view.person.editor.EditorController'
    ],

    controller: 'personeditor',
    viewModel: 'personeditor',

    trackResetOnLoad: true, // This stops the form being marked as dirty when the record is loaded

    defaultType: 'textfield',
    items: [
     {
        fieldLabel: 'First  Name',
        name: 'firstName',
         
            allowBlank: false
        },
        {
            fieldLabel: 'Last Name',
            name: 'lastName',
            allowBlank: false
        }
    ],
    buttons: [
        {
            text: 'Back',
            listeners : {
                click: 'onBackToGrid'
            }
        },
        {
            text: 'Save',
            listeners: {
                click: 'onSave'
            }
        }
    ]
    //,
    //listeners: {
    //    change: 'onChange'
    //}

});

