const express = require('express');
const router = express.Router();
const saucesCtrl = require('../controllers/sauces');
const multer = require('../middleware/multer-config')
const auth = require('../middleware/auth');

router.get('/', auth, saucesCtrl.getAllSauces);
router.post('/', auth, multer, saucesCtrl.createSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, multer, saucesCtrl.deleteSauce);
router.post('/:id/like', auth, saucesCtrl.like);

module.exports = router;