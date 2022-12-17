import React, {useState} from 'react'

const PaymentGateway = () => {

const [amount, setAmount] = useState('')
const [err, setError] = useState(null);

const handleSubmit = (e) => {
    e.preventDefault()
    if(amount === ""){
        setError(err.response.data);
    }else{
        var options = {
            key : "",
            key_secret : "",
            amount : amount *100,
            currency : "INR",
            name : "",
            handler : function (response) {
                alert(response.razorpay_payment_id)
            },
            prefill : {
                name : "",
                email : "",
                phone : "",
            }
        }
    }
}

  return (
    <div className='payment'>
      <div className='pytm-main'>
        <form>
        <h2>Donate For Our Work</h2>
        <input required type="number" placeholder="Enter Amount" name='amount' value={amount} onChange = {(e) => setAmount(e.target.value)} />
        {err && <p>{err}</p>}
        <button onClick={handleSubmit}>Donate</button>
        </form>
      </div>
    </div>
  )
}

export default PaymentGateway
