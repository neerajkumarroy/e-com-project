import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const AddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company,setCompany] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    

   const handleAddProduct = async() =>{
    console.log(name);
    if(!name || !price || !category || !company)
    {
      setError(true)
        return false
    }  
    console.log(name,price,category,company);
    let result =await fetch('http://localhost:7070/api/addproduct',{
      method:'post',
      body:JSON.stringify({name,price,category,company}),
      headers:{
        "content-Type":"Application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`

      }
    })
    result = await result.json();
    if(result)
    {
      alert("Data Add Successfully...!");
      navigate('/')
    }    
   }

  return (
    <div className='Register'>
        <h1 className='Add_heading'>Add Product</h1>

        <input className='add-TextBox' type='text' placeholder='Product Name'
        value={name} onChange={(e)=>setName(e.target.value)}
         />
         {error && !name && <span className='error'>Please enter valide name</span>}

        <input className='add-TextBox' type='text' placeholder='Product Price'
        value={price} onChange={(e)=>setPrice(e.target.value)}
         />
         {error && !price && <span className='error'>Please enter valide Price</span>}


        <input className='add-TextBox' type='text' placeholder='Product Category'
        value={category} onChange={(e)=>setCategory(e.target.value)}
         />
         {error && !category && <span className='error'>Please enter valide category</span>}


        <input className='add-TextBox' type='text' placeholder='Product Company'
        value={company} onChange={(e)=>setCompany(e.target.value)}
         />
         {error && !company &&<span className='error'>Please enter valide company</span>}


        <button className='Signup-btn addbtn' type='button' onClick={handleAddProduct}>Add Product</button>
      
    </div>
  )
}

export default AddProduct;