import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Products = () => {
  const [productsList, setProductsList] = useState([]);

  const productList = async () => {
    try {
      const result = await fetch("http://localhost:7070/api/products",{
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });
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
        method: "DELETE",
        headers:{
          authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      });
      const data = await result.json();
      console.log(data);
      if (data) {
        alert("data deleted successfully...");
        productList();
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  //Search Api call
  const handelSearch = async (e) => {
    const key = e.target.value;
    if (key) {
    
        let result = await fetch(`http://localhost:7070/api/search/${key}`,{
          headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
          }
        });
        result = await result.json();
        if (result) {
          setProductsList(result);
        }      
    } else {
      productList();
    }
  };

  return (
    <div className="productlist">
      <h1>This is Products Component</h1>
      <input className="Search-Input TextBox" type="text" placeholder="Search Item" onChange={handelSearch}></input>

      <ul>
        <li>S.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operations</li>
      </ul>
      {productsList.length > 0 ? (
        productsList.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>{item.company}</li>
            <li>
              <button className="delete-btn" onClick={() => handleDelete(item._id)}>Delete</button>
              <Link className="update-btn" to={"/update/" + item._id}>update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Result Found</h1>
      )}
    </div>
  );
};

export default Products;
