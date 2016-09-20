var app = angular.module('fenixDash', ['ui.router', 'ngMaterial']).constant("Constant", {
  'timeframes': ["day", "last_7_days", "last_31_days", "this_month"],
  'devicesNames': {
    "mo": "Mobile",
    "de": "Desktop",
    "ta": "Tablet"
  },
  "countries": {
    "AF": "Afghanistan", "Aland Islands": "ALA", "AL": "Albania", "DZ": "Algeria", "AS": "American Samoa", "AD": "Andorra", "AO": "Angola", "AI": "Anguilla", "Antarctica": " ", "AG": "Antigua and Barbuda", "AR": "Argentina", "AM": "Armenia", "AW": "Aruba", "AU": "Australia", "AT": "Austria", "AZ": "Azerbaijan", "BS": "Bahamas", "BH": "Bahrain", "BD": "Bangladesh", "BB": "Barbados", "BY": "Belarus", "BE": "Belgium", "BZ": "Belize", "BJ": "Benin", "BM": "Bermuda", "BT": "Bhutan", "BO": "Bolivia", "BA": "Bosnia and Herzegovina", "BW": "Botswana", "BV": "Bouvet Island", "BR": "Brazil", "VG": "British Virgin Islands", "IO": "British Indian Ocean Territory", "BN": "Brunei Darussalam", "BG": "Bulgaria", "BF": "Burkina Faso", "BI": "Burundi", "KH": "Cambodia", "CM": "Cameroon", "CA": "Canada", "CV": "Cape Verde", "KY": "Cayman Islands", "CF": "Central African Republic", "TD": "Chad", "CL": "Chile", "CN": "China", "HK": "Hong Kong, Special Administrative Region of China", "MO": "Macao, Special Administrative Region of China", "CX": "Christmas Island", "CC": "Cocos (Keeling) Islands", "CO": "Colombia", "KM": "Comoros", "CG": "Congo (Brazzaville)", "CD": "Congo, Democratic Republic of the", "CK": "Cook Islands", "CR": "Costa Rica", "CI": "Côte d'Ivoire", "HR": "Croatia", "CU": "Cuba", "CY": "Cyprus", "CZ": "Czech Republic", "DK": "Denmark", "DJ": "Djibouti", "DM": "Dominica", "DO": "Dominican Republic", "EC": "Ecuador", "EG": "Egypt", "SV": "El Salvador", "GQ": "Equatorial Guinea", "ER": "Eritrea", "EE": "Estonia", "ET": "Ethiopia", "FK": "Falkland Islands (Malvinas)", "FO": "Faroe Islands", "FJ": "Fiji", "FI": "Finland", "FR": "France", "GF": "French Guiana", "PF": "French Polynesia", "TF": "French Southern Territories", "GA": "Gabon", "GM": "Gambia", "GE": "Georgia", "DE": "Germany", "GH": "Ghana", "GI": "Gibraltar", "GR": "Greece", "GL": "Greenland", "GD": "Grenada", "GP": "Guadeloupe", "GU": "Guam", "GT": "Guatemala", "GG": "Guernsey", "GN": "Guinea", "GW": "Guinea-Bissau", "GY": "Guyana", "HT": "Haiti", "HM": "Heard Island and Mcdonald Islands", "VA": "Holy See (Vatican City State)", "HN": "Honduras", "HU": "Hungary", "IS": "Iceland", "IN": "India", "ID": "Indonesia", "IR": "Iran, Islamic Republic of", "IQ": "Iraq", "IE": "Ireland", "IM": "Isle of Man", "IL": "Israel", "IT": "Italy", "JM": "Jamaica", "JP": "Japan", "JE": "Jersey", "JO": "Jordan", "KZ": "Kazakhstan", "KE": "Kenya", "KI": "Kiribati", "KP": "Korea, Democratic People's Republic of", "KR": "Korea, Republic of", "KW": "Kuwait", "KG": "Kyrgyzstan", "LA": "Lao PDR", "LV": "Latvia", "LB": "Lebanon", "LS": "Lesotho", "LR": "Liberia", "LY": "Libya", "LI": "Liechtenstein", "LT": "Lithuania", "LU": "Luxembourg", "MK": "Macedonia, Republic of", "MG": "Madagascar", "MW": "Malawi", "MY": "Malaysia", "MV": "Maldives", "ML": "Mali", "MT": "Malta", "MH": "Marshall Islands", "MQ": "Martinique", "MR": "Mauritania", "MU": "Mauritius", "YT": "Mayotte", "MX": "Mexico", "FM": "Micronesia, Federated States of", "MD": "Moldova", "MC": "Monaco", "MN": "Mongolia", "ME": "Montenegro", "MS": "Montserrat", "MA": "Morocco", "MZ": "Mozambique", "MM": "Myanmar", "NA": "Namibia", "NR": "Nauru", "NP": "Nepal", "NL": "Netherlands", "AN": "Netherlands Antilles", "NC": "New Caledonia", "NZ": "New Zealand", "NI": "Nicaragua", "NE": "Niger", "NG": "Nigeria", "NU": "Niue", "NF": "Norfolk Island", "MP": "Northern Mariana Islands", "NO": "Norway", "OM": "Oman", "PK": "Pakistan", "PW": "Palau", "PS": "Palestinian Territory, Occupied", "PA": "Panama", "PG": "Papua New Guinea", "PY": "Paraguay", "PE": "Peru", "PH": "Philippines", "PN": "Pitcairn", "PL": "Poland", "PT": "Portugal", "PR": "Puerto Rico", "QA": "Qatar", "RE": "Réunion", "RO": "Romania", "RU": "Russian Federation", "RW": "Rwanda", "BL": "Saint-Barthélemy", "SH": "Saint Helena", "KN": "Saint Kitts and Nevis", "LC": "Saint Lucia", "MF": "Saint-Martin (French part)", "PM": "Saint Pierre and Miquelon", "VC": "Saint Vincent and Grenadines", "WS": "Samoa", "SM": "San Marino", "ST": "Sao Tome and Principe", "SA": "Saudi Arabia", "SN": "Senegal", "RS": "Serbia", "SC": "Seychelles", "SL": "Sierra Leone", "SG": "Singapore", "SK": "Slovakia", "SI": "Slovenia", "SB": "Solomon Islands", "SO": "Somalia", "ZA": "South Africa", "GS": "South Georgia and the South Sandwich Islands", "SS": "South Sudan", "ES": "Spain", "LK": "Sri Lanka", "SD": "Sudan", "SR": "Suriname *", "SJ": "Svalbard and Jan Mayen Islands", "SZ": "Swaziland", "SE": "Sweden", "CH": "Switzerland", "SY": "Syrian Arab Republic (Syria)", "TW": "Taiwan, Republic of China", "TJ": "Tajikistan", "TZ": "Tanzania *, United Republic of", "TH": "Thailand", "TL": "Timor-Leste", "TG": "Togo", "TK": "Tokelau", "TO": "Tonga", "TT": "Trinidad and Tobago", "TN": "Tunisia", "TR": "Turkey", "TM": "Turkmenistan", "TC": "Turks and Caicos Islands", "TV": "Tuvalu", "UG": "Uganda", "UA": "Ukraine", "AE": "United Arab Emirates", "GB": "United Kingdom", "US": "United States of America", "UM": "United States Minor Outlying Islands", "UY": "Uruguay", "UZ": "Uzbekistan", "VU": "Vanuatu", "VE": "Venezuela (Bolivarian Republic of)", "VN": "Viet Nam", "VI": "Virgin Islands, US", "WF": "Wallis and Futuna Islands", "EH": "Western Sahara", "YE": "Yemen", "ZM": "Zambia", "ZW": "Zimbabwe"
    }
  }
);

app.constant("FenixConfig", {
  'url': 'http://localhost:8000',
});

app.factory('FenixData', function ($http, FenixConfig) {
  var FenixData = function(token) {
    var self = this;

    this.initialize = function() {
      self.token = token;
      self.domains = ['d1', 'd2', 'd3'];
      self.product_types = {
        'd1': ['singles1', 'catalog1'],
        'd2': ['singles2', 'catalog2'],
        'd3': ['singles3', 'catalog3']
      };
    };

    this.changeArrayEl = function(opt, target, subtarget){
      if(!opt){
        return null;
      }
      var targetEl = self[target];
      if(subtarget){
        targetEl = targetEl[subtarget];
      }
      if(opt.current){
        var currentIndex = targetEl.indexOf(newDomain);
        if( currentIndex >= 0){
          return targetEl[currentIndex];
        }
        return null;
      }
      if(opt.next){
        var currentIndex = targetEl.indexOf(opt.next);
        if(currentIndex >= 0){
          if( currentIndex < targetEl.length - 1){
            return targetEl[currentIndex+1];
          }
          return targetEl[0];
        }
        return null;
      }
      if(opt.prev){
        var currentIndex = targetEl.indexOf(opt.prev);
        if(currentIndex >= 0){
          if( currentIndex > 0){
            return targetEl[currentIndex-1];
          }
          return targetEl[self[target].length - 1];
        }
        return null;
      }
    };
    self.initialize();
  };
  return (FenixData);
});

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
          url: '/:token',
          views: {
            'top' : { templateUrl: 'templates/base/tpl.top.html', controller: 'TopCtrl'},
            'left' : { templateUrl: 'templates/base/tpl.left.html', controller: 'LeftCtrl'},
            'main' : { templateUrl: 'templates/base/tpl.main.html',},
          },
          resolve: {
            fenixConfig: function($stateParams, FenixData){
              return new FenixData($stateParams.token);
            },
            current: function($stateParams, fenixConfig){
              return {
                token: $stateParams.token,
                domain: fenixConfig.domains[0],
                product_type: fenixConfig.product_types[fenixConfig.domains[0]][0]
              };
            }
          }
        })
      .state('index.dash', {
          url: '/dash/:domain',
          views: {
            'main@index' : {
              templateUrl: 'templates/dash.html',
              controller: 'DashCtrl'
            },
          },
        })
})
.controller('TopCtrl', function($scope, fenixConfig, current){
  $scope.fenix = fenixConfig;
  $scope.current = current;
  $scope.updateNav = function(direction, target){
    var opt = {}
    if(target === 'domains'){
      opt[direction] = current.domain;
      current.domain = fenixConfig.changeArrayEl(opt, target) || current.domain;
      opt[direction] = current.product_type;
      current.product_type = fenixConfig.product_types[current.domain][0];
    }
    if(target === 'product_types'){
      opt[direction] = current.product_type;
      current.product_type = fenixConfig.changeArrayEl(opt, target, current.domain) || current.product_type;
    }
  }
})
.controller('LeftCtrl', function($scope, fenixConfig, current){
  $scope.fenix = fenixConfig;
  $scope.current = current;
})
.controller('DashCtrl', function($scope, $stateParams, current){
  current.domain = $stateParams.domain;
})

