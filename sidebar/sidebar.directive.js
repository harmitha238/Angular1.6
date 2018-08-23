PeopleApp.directive("sidebarDirective", function(){
  return {
    restrict:"E",
    templateUrl:"sidebar/sidebar.template.html",
    scope:{
      people:"=",
      search:"=",
      getPerson:"&"
    }
  }
})