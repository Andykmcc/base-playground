;(function(){
  var App = {};
  App.firebase = new Firebase("https://intense-fire-661.firebaseio.com/");

  App.save = function(name){
    this.firebase.set({
      name: name
    }); 
  };
  
})();