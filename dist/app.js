"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])({
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Origin', 'X-Requested-With', 'x-api-key']
}));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.status(200).json({
    message: "Hello"
  });
});
app.listen(_config["default"].PORT, function () {
  return console.log("Serving content on ".concat(_config["default"].PORT));
});