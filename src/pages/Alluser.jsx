import { useEffect, useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdEdit, MdDelete } from "react-icons/md";

import { Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { deleteUser, getAllUser } from "../Services/Api";

const Alluser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const loadAllUserData = async () => {
           try {
               const response = await getAllUser();
               setUsers(response);
               setLoading(false)
           } catch (error) {
               console.log(error.message)
               setLoading(false)
           } 
        }
        loadAllUserData();
 },[])

    const handleDelete = async(id) => {
        try {
            await deleteUser(id);
            setUsers((prevuser)=>prevuser.filter((user)=>user._id!==id))
        } catch (error) {
            console.log(error.message);
        }
    }
    
  return (
    <div className="container mx-auto p-5 overflow-auto">
      <h1 className="text-3xl font-bold my-3">All User</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Oval
            height={80}
            width={80}
            color="#000000"
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#808080"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <>
          {users.length === 0 ? (
            <p className="text-center font-bold">No Users Found</p>
          ) : (
            <table className="table table-auto w-full">
              <thead>
                <tr className="bg-gray-300 text-center ">
                  <th className="px-4 py-2 border">slno</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border">Email</th>
                  <th className="px-4 py-2 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className="text-lg text-center">
                    <td className="px-4 py-2 border">{index + 1}</td>
                    <td className="px-4 py-2 border">{user.name}</td>
                    <td className="px-4 py-2 border">{user.email}</td>
                    <td className="px-4 py-2 border">
                      <div className=" text-3xl space-x-4 flex justify-center items-center">
                        <Link to={`/${user._id}`}>
                          <IoMdEye className="text-blue-700" />
                        </Link>
                        <Link to={`/update/${user._id}`}>
                          <MdEdit className="text-green-700" />
                        </Link>
                                <button onClick={() =>
                                    handleDelete(user._id)
                                }>
                          <MdDelete className="text-red-700" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      )} 
    </div>
  );
};

export default Alluser;