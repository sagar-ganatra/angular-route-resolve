app.run(function ($httpBackend) {
   $httpBackend.whenGET(/js$/).passThrough();
   $httpBackend.whenGET(/html$/).passThrough();
   $httpBackend.whenGET('/service/search').respond([
       {
           'name': 'Alan Harper',
           'email': 'alan@example.com'
       },
       {
           'name': 'Benjamin West',
           'email': 'benjamin@example.com'
       },
       {
           'name': 'Sam Hecker',
           'email': 'sam@example.com'
       }
   ]);
});