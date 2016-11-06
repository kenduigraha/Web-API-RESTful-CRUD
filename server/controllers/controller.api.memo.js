'use strict'
const Memo = require('../models/models.api.memo')

/*
  * @api {get} /api/memos
  * @api purpose get all memos
  * @apiName allMemos
  * @apiGroup memos
  *
  * @apiSuccess show all memo's content {String}
*/
let allMemos = (req, res) => {
  Memo.find({}, (err, all_memos) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!all_memos) res.status(404).json({'message': 'Failed to get all memos'})

    res.status(200).json(all_memos)
  })
}

/*
  * @api {post} /api/memos
  * @api purpose post one new memo
  * @apiName addMemo
  * @apiGroup memos
  *
  * @apiSuccess new memo's content {String}
*/
let addMemo = (req, res) => {
  console.log(req.body.content);
  Memo.create({
    content: req.body.content
  }, (err, new_memo) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!new_memo) res.status(404).json({'message': 'Failed to add memo'})

    res.status(200).json(new_memo)
  })
}

/*
  * @api {put} /api/memos/:id
  * @api purpose put one specific memo
  * @apiName editMemo
  * @apiGroup memos
  *
  * @apiSuccess edit memo's content {String}
*/
let editMemo = (req, res) => {
  Memo.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new : true
  }, (err, updated_memo) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!updated_memo) res.status(404).json({'message': 'Failed to updated memo'})

    res.status(200).json(updated_memo)
  })
}

/*
  * @api {delete} /api/memos/:id
  * @api purpose delete one specific memo
  * @apiName deleteMemo
  * @apiGroup memos
  *
  * @apiSuccess delete memo's content {String}
*/
let deleteMemo = (req, res) => {
  Memo.findOneAndRemove({
    _id: req.params.id
  }, (err, deleted_memo) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!deleted_memo) res.status(404).json({'message': 'Failed to delete memo'})

    res.status(200).json(deleted_memo)
  })
}

module.exports = {
  allMemos  : allMemos,
  addMemo  : addMemo,
  editMemo  : editMemo,
  deleteMemo: deleteMemo
}
