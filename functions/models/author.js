const mongoose = require('mongoose');
const authorSchema = require('../schema/author');

const AuthorModel = mongoos.model('Author', authorSchema);

module.exports = AuthorModel;