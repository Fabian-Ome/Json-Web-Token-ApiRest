import { Router } from 'express'
const router = Router();

import * as productsCtrl from '../controllers/products.controller';
import { autJwt } from '../middlewares';

router.post('/', [autJwt.verifyToken, autJwt.isModerator], productsCtrl.createProduct);

router.get('/', productsCtrl.getProducts);

router.get('/:productId', productsCtrl.getProductById);

router.put('/:productId', [autJwt.verifyToken, autJwt.isAdmin], productsCtrl.updateProductById);

router.delete('/:productId', [autJwt.verifyToken, autJwt.isAdmin], productsCtrl.deleteProductById);

export default router;