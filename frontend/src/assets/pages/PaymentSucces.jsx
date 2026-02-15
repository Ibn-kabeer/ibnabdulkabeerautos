// src/pages/PaymentSuccess.jsx
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");

  useEffect(() => {
    if (reference) {
      axios.get(`http://localhost:5000/api/payments/verify/${reference}`)
        .then(res => {
          if (res.data.data.status === "success") alert("Payment successful!");
        })
        .catch(err => console.error(err));
    }
  }, [reference]);

  return <div className="p-4">Verifying payment...</div>;
}