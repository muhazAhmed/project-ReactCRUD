const Razorpay = require("razorpay")
const crypto = require("crypto")

const payment = (req,res) => {
    try {
        const instance = new Razorpay({
            ket_id : process.env.KEY_ID,
            key_secret : process.env.KEY_SECRET
        })

        const options = {
            amount : req.body.amount*100,
            currency : "INR",
            receipt : crypto.randomBytes(10).toString("hex")
        }

        instance.orders.create(options, (err, order) => {
            if (err) {
                return res.status(400).json(err.message)
            }
            return res.status(200).json({data : order})
        })
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const verifyPaymnet = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body

        const sign = razorpay_order_id + "|"  + razorpay_payment_id;
        const expectedSign =crypto
        .createHmac("sha256", process.env.KEY_SECRET)
        .update(sign.toString())
        .digest("hex");

        if (razorpay_signature === expectedSign) {
            return res.status(200).json("Payment verified successfully")
        } else {
            return res.status(400).json("Invalid Signature")
        }
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
module.exports = {payment, verifyPaymnet};