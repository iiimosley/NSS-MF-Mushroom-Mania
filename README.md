# NSS - Modern Frameworks: Mushroom Mania

## Directives
In a single view application implementing AngularJs:
+ load JSON data is display it in listform (+2 radio buttons, +1 text input)
+ Text Input to fiter search by matching text of displayed JSON data
+ Radio Buttons (Poisonous or Non-Poisonous) shows/hides all mushrooms matching the context provided

### Required Components
+ +1 Angular app module
+ +1 Controller: to load JSON with `$http` Angular XHR call
+ +1 Partial bound to controller
+ JSON data to be read from Firebase DB, rather than locally
+ Put the JSON object into $scope.mushrooms and bind that variable in your partial. 

### Assignment Extension
+ Modify application to include a factory component to retrieve JSON data
  + create factory in Angular & return data
  + inject factory dependancy in controller
  + use apporpriate functionality to fetch factory data
  + set retrieved data to `$scope.mushroom` controller variable to template data into the partial
  
  
