export async function createOrder(req, res) {
  if (req.user == null) {
    res.status(403).json({
      message: "Please login and try again",
    });
    return;
  }

  const orderInfo = req.body;

  if (orderInfo.name == null) {
    orderInfo.name = req.user.firstName + " " + req.user.lastName;
  }

  //CBC00001
  let orderId = "CBC00001";

  const lastOrder = await Order.find().sort({ date: -1 }).limit(1);
  //[]
  if (lastOrder.length == 0) {
  }

  //add current users name if not provided
  //orderId generate
  //create order object
}
