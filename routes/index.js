const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController')
const { catchErrors } = require('../handlers/errorHandlers')

// Do work here
router.get('/', catchErrors(storeController.getStore));
router.get('/Stores', catchErrors(storeController.getStore))
router.get('/Stores/:id/edit', catchErrors(storeController.editStore))

router.get('/add', storeController.addStore)
router.post('/add', 
    storeController.upload,
    catchErrors(storeController.resize),
    catchErrors(storeController.createStore))
router.post('/add/:id', storeController.upload,
catchErrors(storeController.resize),catchErrors(storeController.updateStore))

router.get('/store/:slug', storeController.getSingleStore)

router.get('/tags', catchErrors(storeController.getStoresByTag))
router.get('/tags/:tag', catchErrors(storeController.getStoresByTag))



module.exports = router;
