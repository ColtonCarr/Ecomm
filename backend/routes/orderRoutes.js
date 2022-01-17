import express from 'express'
const router = express.Router()
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getMyOrders,
    getAllOrders,
} from '../controllers/orderController.js'
import { protect, isAdmin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect, isAdmin, getAllOrders)
router.route('/:id').get(protect, getOrderById)
router.route('/:id/pay').put(protect, updateOrderToPaid)
router.route('/:id/deliver').put(protect, isAdmin, updateOrderToDelivered)
router.route('/myorders').put(protect, getMyOrders)


export default router