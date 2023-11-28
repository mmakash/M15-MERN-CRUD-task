import React, { useState } from "react";
import { useEffect } from "react";
import { deleteStudent, getData } from "../ApiRequest/ApiRequest";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const StudentTable = () => {
  const [data, setData] = useState([]);
  let [change, setChange] = useState(0);
  useEffect(() => {
    (async () => {
      let res = await getData();
      setData(res.data);
    })();
  }, [change]);

  const deleteData = async (id) => {
    let res = await deleteStudent(id);
    if (res) {
      setChange(new Date().getTime());
      toast.success("Student Data Deleted");
    } else {
      toast.error("Request Fail");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold m-4 text-center">
        Here is All of Student Data
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Nationality</th>
              <th>Address</th>
              <th>E-mail</th>
              <th>Date-of-Birth</th>
              <th>Phone</th>
              <th>Admission-Date</th>
              <th>Courses</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>
                    {item.firstName} {item.lastName}
                  </td>
                  <td>{item.gender}</td>
                  <td>{item.nationality}</td>
                  <td>{item.address}</td>
                  <td>{item.email}</td>
                  <td>{item.dateOfBirth}</td>
                  <td>{item.phone}</td>
                  <td>{item.admissionDate}</td>
                  <td>{item.courses}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteData(item["_id"]);
                      }}
                      className="btn btn-outline btn-info"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={"/form?id=" + item["_id"]} className="btn btn-outline btn-info"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

            <Toaster position="top-center"/>

    </div>
  );
};

export default StudentTable;
