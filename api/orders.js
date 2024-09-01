<<<<<<< HEAD
<<<<<<< HEAD
//model ko import karao


module.exports.PlaceOrder = async (req, res) => {
    try {
        const { userId, addressId, } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            res.status(400).send({ message: "User not found" })
        }
        const address = await Address.findById(addressId)
        if (!address) {
            address.save()

        }
        await orders.save({ ...req.body, addressId, userId })
        res.status(200).send({})
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}
// Will be called from user side

module.exports.updatePayment = async (req, res) => {
    try {
        const response = await orders.findByIdAndUpdate(req.params.id, { payment_status: req.body.payment_status })
        if (req.body.payment_status === 1) {
            const response = await orders.findByIdAndUpdate(req.params.id, { order_status: "In Transit" })
        }
        res.status(200).send({ message: "Payment updated successfully" })
    } catch (err) {
        console.log(err)
    }
}
// Will be called from admin only

module.exports.dashboard = async (req, res) => {
    try {
        const orders = await Order.find().countDocuments()
        const users = await User.find().countDocuments()
        const totalSales = await Order.find().select('totalAmount').reduce(add, 0)
        const add = (a, b) => a + b;
        res.status(200).send({ orders, users, totalSales })
    } catch (err) {
        console.log(err)
    }
}
=======
>>>>>>> 1313bb7b6af5c0b28713d7902728894a23f7b3ba
=======
const Order = require("../models/orders.model");

module.exports = {
  createOrder: async (req, res) => {
    try {
      const newOrder = new Order(req.body);
      const savedOrder = await newOrder.save();
      return res.status(201).json(savedOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getOrders: async (req, res) => {
    try {
      const ordersList = await Order.find().populate("customer");
      if (!ordersList.length) {
        return res.status(404).json({ message: "No orders found" });
      }
      return res.status(200).json(ordersList);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  getOrderByID: async (req, res) => {
    try {
      const { order_id } = req.params;
      const foundOrder = await Order.findById(order_id).populate("customer");
      if (!foundOrder) {
        return res.status(404).json({ message: "Order not found" });
      }
      return res.status(200).json(foundOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  updateOrderByID: async (req, res) => {
    try {
      const { order_id } = req.params;
      const updatedOrder = await Order.findByIdAndUpdate(order_id, req.body, {
        new: true,
      }).populate("customer");
      return res.status(200).json(updatedOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  deleteOrderByID: async (req, res) => {
    try {
      const { order_id } = req.params;
      const deletedOrder = await Order.findByIdAndDelete(order_id);
      return res.status(200).json(deletedOrder);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
       dashboard: async ( req, res ) =>
  {
         try
         {
           const orders = await order.find().orders()
           res.status( 200 ).send( { orders } )
         }
         catch ( error )
         {
           return res.status( 500 ).json( { error: error.message } );
         }
},


};
>>>>>>> 31a373c1e221ee799abed3fd71de970de2bbe3bd
