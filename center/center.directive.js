PeopleApp.directive("centerDirective", function(){
  return{
    restrict:"E",
    templateUrl:"center/center.template.html",
    scope:{
      details:"="
    }
  }
})