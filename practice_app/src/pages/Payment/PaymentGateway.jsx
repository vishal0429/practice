import React from "react";
import styles from "./PaymentGateway.module.scss";
import Button from "../../components/Button/Button";

function PaymentGateway() {
  const openRazorpay = () => {
    const options = {
      key: "rzp_test_sOdMqCZYqVGA8E",
      amount: 1000,
      currency: "INR",
      name: "Vishal pvt ltd",
      description: "Test Transaction",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
      handler: function (response) {
        alert(`✅ Payment successful: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Vishal Gupta",
        email: "vishalgupta@example.com",
        contact: "8898032237",
      },
      notes: {
        address: "Test Office",
      },
      theme: {
        color: "#ff2f00ff",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePlus = () => {
    displatch(incrementCount());
  };

  return (
    <div>
      <Button
        onClick={openRazorpay}
        style={{ padding: "8px 16px", fontSize: "16px" }}
      >
        Pay ₹100
      </Button>
    </div>
  );
}

export default PaymentGateway;
