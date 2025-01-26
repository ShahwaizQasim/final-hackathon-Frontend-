
import { useEffect, useState } from "react";

function Dashboard() {

  // const [getUser, setGetUser] = useState([]);
  // const [getProducts, setGetProducts] = useState([]);
  // const [orders, setOrders] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   UsersGet()
  //   productsGet()
  //   getOrders();
  // }, [])

  // const UsersGet = async () => {
  //   try {
  //     const UserCollection = collection(db, 'Users');
  //     const q = query(UserCollection)
  //     const arr = [];
  //     setLoading(true);
  //     const docs = await getDocs(q);
  //     docs.docs.forEach((users) => {
  //       return arr.push({ ...users.data(), id: users.id });
  //     });
  //     setGetUser([...arr]);
  //   } catch (error) {
  //     console.log("error in adminPanel", error);
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // const productsGet = async () => {
  //   try {
  //     const ProductsCollection = collection(db, "products");
  //     const q = query(ProductsCollection, orderBy("createdAt", "desc"))
  //     const arr = [];
  //     setLoading(true);
  //     const QuerySnapshot = await getDocs(q);
  //     QuerySnapshot.forEach((products) => {
  //       return arr.push({ ...products.data(), id: products.id });
  //     });
  //     setGetProducts([...arr])
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // const getOrders = async () => {
  //   try {
  //     setLoading(true)
  //     const OrderCollection = collection(db, "orders");
  //     const q = query(OrderCollection, orderBy("createdAt", "desc"));
  //     const arr = [];
  //     const UsersOrdersGet = await getDocs(q);
  //     UsersOrdersGet.forEach((data) => {
  //       return arr.push({ ...data.data(), Users: data.id })
  //     })
  //     setOrders([...arr]);
  //     console.log('orders', orders);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  return (
    (<section id="dashboard-section" className="dashboard h-[100vh]">
      <div className="card-container flex justify-center" style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <div className="card">
          <h3>Total Users</h3>
          <p>10</p>
        </div>
        <div className="card">
          <h3>Total Products</h3>
          <p>20</p>
        </div>
        <div className="card">
          <h3>Total Orders</h3>
          <p>30</p>
        </div>
      </div>
    </section>)

  );
}
export default Dashboard;
