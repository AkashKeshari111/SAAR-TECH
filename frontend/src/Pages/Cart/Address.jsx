import React from 'react'
import { useState } from 'react'

const Address = () => {
const [form,setForm]=useState({});

const AddressChange=(e)=>{
     const {name,value,type}=e.target;
     setForm({
        [name]:value
     })
}
const handleAddress=(e)=>{
    e.preventDefault()
    const payload = {
      first_name:form.first_name,
      last_name:form.last_name,
      address:form.address,
      country:form.country,
      state:form.state,
      city:form.city,
      mobile:form.mobile,
      email:form.email
      
}
    fetch("http://localhost:8080/address/address",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json',
            "token":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzZkMGJiZDEwOTAwMmMxM2I5NjkyODMiLCJpYXQiOjE2NjgxODIzMTcsImV4cCI6MTY2ODI2ODcxN30.S_06cxvWC2RewuewBkH7HhXmPJDjzUxeeEPtw9TxBkk`
        },
        body:JSON.stringify(payload)
    }).then(res=>res.json()).then((res)=>{
        console.log(res)
        // getYourData()
    })
}

  return (
    <div>
        <form onClick={handleAddress}>
            <input type="text" placeholder='First name' name="first_name"  value={form.first_name}  onChange={AddressChange}/>
            <input type="text" placeholder='Last name' name="last_name"  value={form.last_name} onChange={AddressChange}/>
            <input type="text" placeholder='Address' name="address" value={form.address} onChange={AddressChange}/>
            <input type="text" placeholder='Country name' name="country" value={form.country} onChange={AddressChange}/>
            <input type="text" placeholder='State name' name="state" value={form.state} onChange={AddressChange}/>
            <input type="text" placeholder='City name' name="city" value={form.city} onChange={AddressChange}/>
            <input type="number" placeholder='Contact number' name="mobile" value={form.mobile} onChange={AddressChange}/>
            <input type="email" placeholder='email' name='email' value={form.email} onChange={AddressChange}/>
            <input type="checkbox" />
            <button type="submit">Save</button>
        </form>
    </div>
  )
}

export default Address