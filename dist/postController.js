"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _client = require('@prisma/client');


const { promisify } = require('util')

var cloudinary = require('cloudinary')

var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config()

const prisma = new (0, _client.PrismaClient)()

 var imagem = ''
  var resultado = ''

async function registerPost(req, res) {
 
  cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    cloudinary.uploader.upload(req.file.path, function (result, error) {
      imagem = result.secure_url
      resultado = result
      console.log(resultado)
    })
  try {
    const post = await prisma.posts.create({
      data: {
        title: req.body.title,
        image: imagem,
        autor: req.body.title,
        text: req.body.title,
      },
    })

    return res.status(201).send({ post })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

async function getAll(req, res) {
  try {
    const data = await prisma.posts.findMany({
     take: Number(3),
      // skip: 1,

      orderBy: {
        createdAt: 'desc',
      },
    })

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

exports. default = { registerPost, getAll }
