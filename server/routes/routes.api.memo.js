const express = require('express')
const router = express.Router()

const controller = require('../controllers/controller.api.memo')

/* GET All Memos. */
router.get('/', controller.allMemos)

/* Process One Memos. */
router.post('/', controller.addMemo);

/* Process Edit Memos. */
router.put('/:id', controller.editMemo);

/* Process Delete Memos. */
router.delete('/:id', controller.deleteMemo);

module.exports = router;
