$( document ).ready(function() {
    
    /*
     * Setup
     */
    var api = squid_api.setup({
        "clientId" : "local"
    });
    
    /*
     * Controller part
     */
    
    // analysis controller
    var analysis = new api.controller.AnalysisContoller();
    
    // filters controller
    new api.controller.FiltersContoller();
    
    /*
     * Declare the views 
     */
     
    new api.view.LoginView();
    
    new api.view.StatusView();
    
    new api.view.ProjectSelector({
        el : '#project'
    });
    
    new api.view.DomainSelector({
        el : '#domain'
    });
    
    new api.view.PeriodSelectionView({
        el : '#date'
    });
    
    new api.view.MetricSelectorView({
        el : '#metric'
    });
    
    new api.view.DimensionSelector({
        el : '#dimension'
    });
    
    new api.view.DataTableView ({
        el : '#table',
        model : analysis.model,
    });
    
    new api.view.CategoricalView({
        el : '#selection',
        filterPanel : '#filters',
        filterSelected : '#selected'
    });

    
    /*
     * Start the App
     */
    api.init();
});
