import { useEffect, useState } from "react";


import { Oval } from "react-loader-spinner";

import { getSingleUser } from "../Services/Api";
import { useParams } from "react-router-dom";

const SingleUser = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const loadSingleUserData = async () => {
           try {
               const response = await getSingleUser(id);
               setUsers(response);
               setLoading(false)
           } catch (error) {
               console.log(error.message)
               setLoading(false)
           } 
        }
        loadSingleUserData();
 },[id])

  return (
    <div className="container mx-auto p-5 overflow-auto">
      <h1 className="text-3xl font-bold my-3">Single User</h1>
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
                  
                </tr>
              </thead>
              <tbody>
              
                  <tr key={users._id} className="text-lg text-center">
                    <td className="px-4 py-2 border">{1}</td>
                    <td className="px-4 py-2 border">{users.name}</td>
                    <td className="px-4 py-2 border">{users.email}</td>
                  
                  </tr>
                
              </tbody>
            </table>
          )}
        </>
      )} 
    </div>
  );
};

export default SingleUser;