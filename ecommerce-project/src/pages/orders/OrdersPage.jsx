import axios from "axios";
import { useEffect, useState } from "react";
import { OrdersGrid } from "./OrdersGrid"
import { Header } from "../../components/Header";
import "./OrdersPage.css";



export function OrdersPage({ cart, loadCart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrdersData = async () => {
      const response = await axios.get("/api/orders?expand=products")
      setOrders(response.data);
    };
    fetchOrdersData();
  }, []);
    
   
  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/png" href="orders-favicon.png" />

      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <OrdersGrid orders={orders}  loadCart={loadCart}/>
        
      </div>
    </>
  );
}
