var app = angular.module('fenixDash', ['ui.router', 'ngMaterial']).constant("Constant", {
  'timeframes': ["day", "last_7_days", "last_31_days", "this_month"],
  'devicesNames': {
    "mo": "Mobile",
    "de": "Desktop",
    "ta": "Tablet"
  }
);
