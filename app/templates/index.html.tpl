<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>fenix Dash</title>
  <meta name="description" content="fenix Dash">
  <meta name="author" content="iMetricas">

  <link rel="stylesheet" href="build/vendor.css?v=<%- version %>">
  <link rel="stylesheet" href="build/app.css?v=<%- version %>">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


  <!--[if lt IE 9]>
    <script src="./js/html5shiv-3.7.3.js"></script>
  <![endif]-->
</head>

<body ng-app="fenixDash" layout="column" ng-cloak>
  <md-toolbar>
      <div ui-view="top" layout="row" flex></div>
  </md-toolbar>
  <section layout="row" flex>
    <!--div flex="20" layout="column">
      <div ui-view="left"></div>
    </div-->
    <div flex layout="column">
      <div ui-view="main"></div>
      <!--section flex="70">flex="70"</section>
      <section flex="20">flex="20"</section>
      <section flex >flex </section-->
    </div>
  </section>

  <script src="build/vendor.js?v=<%- version %>"></script>
  <script src="build/app.js?v=<%- version %>"></script>
</body>
</html>
