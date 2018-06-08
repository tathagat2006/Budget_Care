//FIRST MODULE CREATED.

var budgetController = ( function(){
    var x = 23;
    var add = function(a){
        return x + a;
    }
    return {
        publicTest:function(b){
            console.log(add(b));
        }
    }
})();

// UI CONTROLLER MODULE.

var UIController = ( function(){
    
    
}
)

// APP CONTROLLER (COMMUNICATING BETWEEN THE ABOVE MODULES).

var controller = ( function(){
    
    
}
)
