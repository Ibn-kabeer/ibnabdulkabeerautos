import { useState } from "react";
import axios from "axios";

export default function Cars() {
  const [cars, setCars] = useState([]);

  const handleBuy = async (car) => {
    const email = prompt("Enter your email for payment");
    if (!email) return;

    try {
      // Initialize Payment
      const { data } = await axios.post("http://localhost:5000/api/payments/pay", {
        email,
        amount: car.price
      });

      const { authorization_url } = data.data;

      // Redirect to Paystack checkout
      window.location.href = authorization_url;
    } catch (err) {
      console.error(err);
      alert("Payment failed to initialize");
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/cars")
      .then(res => setCars(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {cars.map(car => (
        <div key={car._id} className="border p-2 rounded shadow">
          <h2 className="font-bold text-lg">{car.title}</h2>
          <p>Price: ₦{car.price}</p>
          <p>Year: {car.year}</p>
          <p>Condition: {car.condition}</p>
          <p>{car.description}</p>
          <button 
            onClick={() => handleBuy(car)} 
            className="bg-green-500 text-white px-2 py-1 mt-2 rounded"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}