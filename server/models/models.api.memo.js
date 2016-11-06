'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let MemoSchema = new Schema({
  content: String
}, {
  timestamps: true
})

module.exports = mongoose.model('memos', MemoSchema)
