﻿Ext.define('TrainingWeb.view.person.editor.EditorModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.personeditor',

    data: {
        record: null,
        isDirty: false
    }

    //,
    //requires: ['TrainingWeb.model.Person'],

    //data: {
    //    myTitle: 'Bound Title',
    //    searchval: 'That'
    //},
        
    //stores: {
    //    people: {
    //        source: 'personstore' // this is the id field from the store
    //        // if I want to filter this (i.e. specifically for this view) I can add filter statements
    //        // e.g.
            
    //        ,filters : [{
    //            property : "firstName",
    //            operator : "=",
    //            value: '{searchval}'
    //        }],
    //        sorters : [{
    //            property : "LastName",
    //            direction : "ASC"
    //        }]
            
    //    }
    //}
});

