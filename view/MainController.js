/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TrainingWeb.view.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    config: {
       
        listen: {
            global: {
                updatemodeldata: 'updateModelData'
            }
        }
    },
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    updateModelData: function (dataname, datavalue) {
        var model = this.getViewModel();
        model.set(dataname, datavalue);
    },

    init: function () {
        console.log("MainController init");
    },
    onAdded: function () {
        console.log('MainController: onAdded');
    },
    onRemoved: function () {
        console.log('MainController: onRemoved');
    },
    onTabchange: function () {
        console.log('MainController: onTabchange');
    },
    onAfterrender: function () {
        console.log('MainController: onAfterrender');
    }

});
