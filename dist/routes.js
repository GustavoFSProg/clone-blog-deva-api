"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _uploadConfig = require('./uploadConfig'); var _uploadConfig2 = _interopRequireDefault(_uploadConfig);

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _postController = require('./postController'); var _postController2 = _interopRequireDefault(_postController);

const upload = _multer2.default.call(void 0, _uploadConfig2.default)

const route = _express.Router.call(void 0, )

route.get('/all', _postController2.default.getAll),
route.post('/register', upload.single('image'), _postController2.default.registerPost)

exports. default = route
