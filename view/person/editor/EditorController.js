Ext.define('TrainingWeb.view.person.editor.EditorController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.personeditor',

    init: function () {
        console.log("EditorCOntroller init");
        
        var viewModel = this.getViewModel();
        var editorView = Ext.ComponentQuery.query('personeditorview'); // lookupReference does not work here, perhaps due to this view being created dynamically
        // var editorView = this.lookupReference('personeditorviewref');
        if (editorView) {
            var vmRecord = viewModel.get('record');
            console.log(vmRecord);

            editorView[0].loadRecord(vmRecord);
            this.getView().getForm().reset();   // clear the dirty flag
            //gives the same object as editorView[0] xxxx
        } else {
            console.log('editorView not valid');
        }

        console.log(editorView);
    },
    onBackToGrid: function () {
        var viewModel = this.getViewModel();
        

        if (this.getView().getForm().isDirty()) {
            Ext.Msg.show({
                title: 'Save Changes?',
                message: 'You are closing a tab that has unsaved changes. Would you like to save your changes?',
                buttons: Ext.Msg.YESNOCANCEL,
                icon: Ext.Msg.QUESTION,
                fn: function (btn) {
                    if (btn === 'yes') {
                        console.log('Yes pressed');
                    } else if (btn === 'no') {
                        console.log('No pressed');
                    } else {
                        console.log('Cancel pressed');
                    }
                }
            });
        } else {

            //var viewmodel = this.getViewModel();

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
    },
    onSave: function () {
        console.log("onSave");
        var viewModel = this.getViewModel();
        var editorView = Ext.ComponentQuery.query('personeditorview'); // lookupReference does not work here, perhaps due to this view being created dynamically
        // var editorView = this.lookupReference('personeditorviewref');
        console.log(editorView);
        if (editorView) {
            editorView[0].updateRecord();
        } else {
            console.log('editorView not valid');
        }
        //if (this.isValid()) { // make sure the form contains valid data before submitting
            //form.updateRecord(record); // update the record with the form data
            //console.log('Form valid');
            
        //}
            
        this.onBackToGrid();

    }
    //,
    //onChange: function () {
    //    console.log("onChange executing");
    //    var viewModel = this.getViewModel();
    //    viewModel.set('isDirty', true);
    //    console.log(viewModel.get('isDirty'));
    //}

});

