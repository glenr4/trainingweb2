Ext.define('TrainingWeb.view.person.editor.EditorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.personeditor',

    init: function () {
        console.log("EditorController init");
        
        // Removed so that we can bind directly to the data
        //var viewModel = this.getViewModel();
        //var editorView = Ext.ComponentQuery.query('personeditorview'); // lookupReference does not work here, perhaps due to this view being created dynamically
        //// var editorView = this.lookupReference('personeditorviewref');
        //if (editorView) {
        //    var vmRecord = viewModel.get('record');
        //    console.log(vmRecord);

        //    editorView[0].loadRecord(vmRecord);

        console.log('EditorController: Reset form');
        console.log(this.getView().getForm().isDirty());
        this.getView().getForm().reset();   // clear the dirty flag
        console.log(this.getView().getForm().isDirty());

            //gives the same object as editorView[0] xxxx
        //} else {
        //    console.log('editorView not valid');
        //}

        //console.log(editorView);
    },
    onAfterRender: function (cmpt) {
        console.log('EditorController: onAfterRender');
        console.log(cmpt.isDirty());
        console.log(this.getView().getForm().isDirty());
        cmpt.reset();   // clear the dirty flag
        console.log(cmpt.isDirty());
        console.log(this.getView().getForm().isDirty());
    },
    onDirtyChange: function(cmpt){
        //console.log('EditorController: onDirtyChange');
        //console.log(cmpt.isDirty());
        //console.log(this.getView().getForm().isDirty());
        //cmpt.reset();   // clear the dirty flag
        //console.log(cmpt.isDirty());
        //console.log(this.getView().getForm().isDirty());

    },
    onBackToGrid: function () {
        console.log('EditorController: onBackToGrid');

        var self = this;
        //var viewModel = this.getViewModel();
        var form = this.getView().getForm();

        var store = Ext.data.StoreManager.lookup('personstore');

        //console.log(this.getView().getForm().getName());    // not a function aparently
        console.log(this.getView().getForm().isDirty());
        console.log(form.isDirty());

        if (form.isDirty()) {
            Ext.Msg.show({
                title: 'Save Changes?',
                message: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
                buttons: Ext.Msg.YESNOCANCEL,
                icon: Ext.Msg.QUESTION,
                fn: function (btn) {
                    if (btn === 'yes') {
                        console.log('Yes pressed');
                        
                        self.loadPreviousTab();
                    } else if (btn === 'no') {
                        console.log('No pressed');

                        store.rejectChanges();
                        self.loadPreviousTab();
                    } else {
                        console.log('Cancel pressed');
                        // Stay on the form
                    }
                }
            });
        } else {
            self.loadPreviousTab();
        }
    },
    onSave: function () {
        console.log("EditorController: onSave");

        // Removed because binding is used instead
        //var viewModel = this.getViewModel();
        //var editorView = Ext.ComponentQuery.query('personeditorview'); // lookupReference does not work here, perhaps due to this view being created dynamically
        //// var editorView = this.lookupReference('personeditorviewref');
        //console.log(editorView);
        //if (editorView) {
        //    editorView[0].updateRecord();
        //} else {
        //    console.log('editorView not valid');
        //}
        //if (this.isValid()) { // make sure the form contains valid data before submitting
            //form.updateRecord(record); // update the record with the form data
            //console.log('Form valid');
            
        //}
            
        this.loadPreviousTab();

    },
    loadPreviousTab: function () {
        // get tabs control
        var tabs = Ext.ComponentQuery.query('app-main');
        // get current tab i.e. the editor
        var currentTab = tabs[0].getActiveTab();
        // remove it 
        tabs[0].remove(currentTab);
        // replace/with the one we have in global area
        var previoustab = TrainingWeb.Globals.getCurrentab();
        var newtab = tabs[0].add(previoustab);
        // effectively 'shows' the new tab
        tabs[0].setActiveTab(newtab);
    }

    //,
    //onChange: function () {
    //    console.log("onChange executing");
    //    var viewModel = this.getViewModel();
    //    viewModel.set('isDirty', true);
    //    console.log(viewModel.get('isDirty'));
    //}

});

