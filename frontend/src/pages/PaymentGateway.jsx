import React, {useState} from 'react'
import axios from 'axios'

const PaymentGateway = () => {

  const [buy, setbuy] = useState({
    amount : 10
  })

  const initPayment = (data) => {
		const options = {
			key: "YOUR_RAZORPAY_KEY",
			amount: data.amount,
			currency: data.currency,
			description: "Test Transaction",
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:8800/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

  const handlePayment =  async () => {
    try {
      const orderUrl = "http://localhost:8800/api/payment";
      const {data} = await axios.post(orderUrl, {amount : buy.amount})
      initPayment(data.data);
    } catch (error) {
     console.log(error.message); 
    }
  }

  return (
    <div className='payment' data-aos="zoom-in">
    <div className='pymnt-container'>
    <p className='pymnt-price'> Donate : <span> &#x20B9; {buy.amount} </span></p>
    <button onClick={handlePayment} className="dnt-btn">Donate</button>
    </div>
    </div>
  )
}

export default PaymentGateway
