PeopleApp.directive("navbarDirective", function(){
  return{
    restrict:"E",
    templateUrl:"navbar/navbar.template.html",
    scope:{
      search:"="
    }
  }
})