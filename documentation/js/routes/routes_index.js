var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","loadChildren":"./pages/home/home.module#HomePageModule","data":{"title":"Home"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/home/home-routing.module.ts","module":"HomePageRoutingModule","children":[{"path":"","component":"HomePage"}],"kind":"module"}],"module":"HomePageModule"}]},{"path":"subscribe","loadChildren":"./pages/subscribe/subscribe.module#SubscribePageModule","data":{"title":"Subscribe"},"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/subscribe/subscribe-routing.module.ts","module":"SubscribePageRoutingModule","children":[{"path":"","component":"SubscribePage"}],"kind":"module"}],"module":"SubscribePageModule"}]},{"path":"","redirectTo":"home","pathMatch":"full"},{"path":"subscribe","loadChildren":"./pages/subscribe/subscribe.module#SubscribePageModule","children":[{"kind":"module","children":[],"module":"SubscribePageModule"}]}],"kind":"module"}]}
