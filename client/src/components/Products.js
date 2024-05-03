import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  const productList = async () => {
    try {
      const result = await fetch("http://localhost:7070/api/products");
      const data = await result.json();
      setProductsList(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    productList();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const result = await fetch(`http://localhost:7070/api/deleterecord/${id}`, {
        method: "DELETE"
      });
      const data = await result.json();
      console.log(data);
      if (data){
        alert("data deleted successfully...");
        productList()
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="productlist">
      <h1>This is Products Component</h1>
      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operations</li>
      </ul>
      {Array.isArray(productsList) && productsList.map((item, index) => (
        <ul key={item.id}>
          <li>{index + 1}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>{item.company}</li>
          <li>
            <button className="delete-btn" onClick={() => handleDelete(item._id)}>Delete</button>
            <Link to={"/update/"+item._id}>update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Products;
