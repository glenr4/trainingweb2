Ext.define('TrainingWeb.view.person.PersonController', {
    extend: 'Ext.app.ViewController',
    requires: [
       //  'TrainingWeb.view.person.editor.Editor'
    ],
    alias: 'controller.person',

    init: function () {
        console.log("PersonController init");
        //var store = Ext.data.StoreManager.lookup('personstore');
        //console.log(store);

        var viewModel = this.getViewModel(),
            viewData = viewModel.get('people');
        console.log(viewModel);
    },
    onRowClick: function (cmp, record) {
        console.log('PersonController: onRowClick');

//        var viewmodel = this.getViewModel();

        // get tabs control
        var tabs = Ext.ComponentQuery.query('app-main');
        
        // get current tab
        var currentTab = tabs[0].getActiveTab();
        // store it in viewmodel
        // viewmodel.set('currenttab', currentTab);
        // Ext.GlobalEvents.fireEvent("updatemodeldata", "currenttab", currentTab);

        // store it in global singleton
        TrainingWeb.Globals.setCurrentab(currentTab);

        // remove it
        console.log('PersonController: Remove tab');
        tabs[0].remove(currentTab, false);
        // add a new one - editor
        var newtab = tabs[0].add({
            title: 'Person Editor',
            items: [
                {
                    xtype: 'personeditorview',
                    // Still required for data binding
                    viewModel: {
                        data: {
                            record: record  // pass the record to the Editor View Model
                        }
                    }
                }
            ]
        });

        //this.fireEvent('populateEditor', record);
        //console.log('fireEvent(populateEditor)');

        // effectively 'shows' the new tab
        console.log('PersonController: Show tab');
        tabs[0].setActiveTab(newtab); 
    }


});

