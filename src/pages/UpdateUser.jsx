import React, { useEffect, useState } from 'react'
import { getSingleUser, updateUser } from '../Services/Api'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [formData, setformData] = useState({
        name: "",
        email:"",
    })
    useEffect(() => {
        const loadSingleUserData = async () => {
           try {
               const response = await getSingleUser(id);
               setformData(response);
          
           } catch (error) {
               console.log(error.message)
          
           } 
        }
        loadSingleUserData();
 },[id])

    const handleChange = (e) => {
       setformData({...formData, [e.target.name]:e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
       try {
           const response = await updateUser(id,formData);
           toast.success(response.message);
           setformData({
            name: "",
            email:"",
           })
           setTimeout(() => {
            navigate ("/all")
           },6000)
       } catch (error) {
           toast.error(error.message);
       }
    }
  return (
    <div className="container mx-auto p-5">
    <h1 className="text-3xl font-bold text-center mb-4">Update User</h1>
    <ToastContainer position="bottom-left" />
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto border p-5 rounded-md"
    >
      <div className="my-2">
        <label className="text-gray-500 text-lg font-semibold">Name</label>
        <input
          onChange={handleChange}
          type="text"
          className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
          name="name"
          required
          value={formData.name}
          autoComplete="off"
        />
      </div>
      <div className="my-2">
        <label className="text-gray-500 text-lg font-semibold">Email</label>
        <input
          onChange={handleChange}
          className="block border w-full px-4 py-2 rounded-md outline-none focus:border-blue-500 my-1 "
          type="text"
          name="email"
          required
          value={formData.email}
          autoComplete="off"
        />
      </div>
  
      <button className="bg-gray-700 w-full px-4 py-2 text-white text-lg font-semibold rounded-md hover:bg-gray-800">
        Submit
      </button>
    </form>
  </div>
  )
}

export default UpdateUser;
