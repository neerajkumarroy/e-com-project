import React, { useEffect, useState } from 'react';
import { useParams,useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [company,setCompany] = useState("");
    const params = useParams();
    const navvigate = useNavigate();
       
//prifile Data
   const prifilData = async() =>{
    // console.log("neeraj-------",params);
    let result = await fetch(`http://localhost:7070/api/product/${params.id}`,{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      }
    })
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);
   }

   useEffect(()=>{
    prifilData();
   },[])

   const handelUpdate = async()=>{
    console.log(name,price,category,company);
    let result = await fetch(`http://localhost:7070/api/updateproduct/${params.id}`,{
      method:'put',
      body:JSON.stringify({name,price,category,company}),
      headers:{
        "content-Type":"application/json",
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`

      }
    })
    result = await result.json();
    if(result)
      {
        navvigate("/");
      }
    
   }

  return (
    <div className='Register'>
        <h1 className='update-heading'>Update Product</h1>

        <input className='add-TextBox' type='text' placeholder='Product Name'
        value={name} onChange={(e)=>setName(e.target.value)}
         />

        <input className='add-TextBox' type='text' placeholder='Product Price'
        value={price} onChange={(e)=>setPrice(e.target.value)}
         />

        <input className='add-TextBox' type='text' placeholder='Product Category'
        value={category} onChange={(e)=>setCategory(e.target.value)}
         />

        <input className='add-TextBox' type='text' placeholder='Product Company'
        value={company} onChange={(e)=>setCompany(e.target.value)}
         />
        <button className='Signup-btn addbtn' type='button' onClick={handelUpdate}>Update</button>
      
    </div>
  )
}

export default UpdateProduct;