// src/pages/PaymentSuccess.jsx
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "../../api/axios";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference");

  useEffect(() => {
    if (reference) {
      axios.get(`/payments/verify/${reference}`)
        .then(res => {
          if (res.data.data.status === "success") alert("Payment successful!");
        })
        .catch(err => console.error(err));
    }
  }, [reference]);

  return <div className="p-4">Verifying payment...</div>;
}