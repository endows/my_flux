var data = {}

window.$ = require('jquery')
var se = new EventSource("http://localhost:3000/tags");
se.onmessage = function(e) {
  var _data = JSON.parse(e.data)
  for (var attr in _data) { data[attr] = _data[attr]; }
}

module.exports = function() {
  return data
}
