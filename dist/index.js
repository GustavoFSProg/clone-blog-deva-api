"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

_dotenv2.default.config()

const app = _express2.default.call(void 0, )

const { PORT } = process.env

app.use(_express2.default.json())
app.use(_cors2.default.call(void 0, ))
app.use(_routes2.default)



app.get('/', function (req, res)
{
  return res.status(200).send({msg: ` 🍏 Api Running: ${PORT}`})
 })


app.listen(PORT, () =>
  {
  console.log(` 🍏 Api Running: ${PORT}`)
})

exports. default = app