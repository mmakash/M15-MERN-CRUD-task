/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { Toaster, toast } from "react-hot-toast";
import { getDataById, postData, updateData } from "../ApiRequest/ApiRequest";
import { useNavigate } from "react-router-dom";



const FormData = () => {
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    nationality: "",
    address: "",
    email: "",
    phone: "",
    admissionDate: "",
    courses: "",
  });

  const [updateId, setUpdateId] = useState(null);

  useEffect(() => {
    (async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      console.log("Query parameter id:", id);
      setUpdateId(id);
      if(id !== null){
        await FillFrom(id);
      }
    })();
  }, []);
  

  const FillFrom = async (id) => {
    let res = await getDataById(id);
    // alert(JSON.stringify(res));
    console.log(res.data[0]);
    setFormValue({
      ...formValue,
      firstName: res.data[0].firstName,
      lastName: res.data[0].lastName,
      gender: res.data[0].gender,
      dateOfBirth: res.data[0].dateOfBirth,
      nationality: res.data[0].nationality,
      address: res.data[0].address,
      email: res.data[0].email,
      phone: res.data[0].phone,
      admissionDate: res.data[0].admissionDate,
      courses: res.data[0].courses,
    });
  }


  const handleChange = (name, value) => {
    // setFormValue({
    //   ...formValue,
    //   [name]: value,
    // });
    setFormValue((formValue)=>{
      return{
        ...formValue,
        [name]: value
      }
    })
  };

const save =  async() => {
  if(formValue.email.length === 0){
    toast.error("Email Required");
  }
  else if(formValue.phone.length === 0){
    toast.error("Phone Required");
  }
  else if(formValue.firstName.length === 0){
    toast.error("First Name Required");
  }
  else if(formValue.lastName.length === 0){
    toast.error("Last Name Required");
  }
  else if(formValue.gender.length === 0){
    toast.error("Gender Required");
  }
  else if(formValue.dateOfBirth.length === 0){
    toast.error("Date Of Birth Required");
  }
  else if(formValue.nationality.length === 0){
    toast.error("Nationality Required");
  }
  else if(formValue.address.length === 0){
    toast.error("Address Required");
}
  else if(formValue.admissionDate.length === 0){
    toast.error("Admission Date Required");
  }
  else if(formValue.courses.length === 0){
    toast.error("Courses Required");
  }



  else{

    
  if(updateId === null){
    let res = await postData(formValue);
    if(res){
      toast.success("Student Data Added");
      navigate("/");
    }
    else{
      toast.error("Request Fail");
    }
  }
  else{
    let res = await updateData(updateId, formValue);
    if(res){
      toast.success("Student Data Updated");
      navigate("/");
    }
    else{
      toast.error("Request Fail");
    }
  }
    
  }


}
 
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto bg-white rounded p-6 shadow-md">
        <h2 className="text-2xl font-bold mb-4">Student Admission Form</h2>


        <div>
          {/* First Name */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-600"
            >
              First Name
            </label>
            <input
              value={formValue.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              type="text"
              id="firstName"
              name="firstName"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>


          {/* Last Name */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-600"
            >
              Last Name
            </label>
            <input
              value={formValue.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              type="text"
              id="lastName"
              name="lastName"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>


          {/* Gender */}
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-sm font-medium text-gray-600"
            >
              Gender
            </label>
            <select
              value={formValue.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              id="gender"
              name="gender"
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>


          {/* Date of Birth */}
          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-600"
            >
              Date of Birth
            </label>
            <input
              value={formValue.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>


          {/* Nationality */}
          <div className="mb-4">
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-600"
            >
              Nationality
            </label>
            <input
              value={formValue.nationality}
              onChange={(e) => handleChange("nationality", e.target.value)}
              type="text"
              id="nationality"
              name="nationality"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>


          {/* Address */}
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <textarea
              value={formValue.address}
              onChange={(e) => handleChange("address", e.target.value)}
              id="address"
              name="address"
              rows="3"
              className="mt-1 p-2 w-full border rounded-md"
            ></textarea>
          </div>


          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              value={formValue.email}
              onChange={(e) => handleChange("email", e.target.value)}
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>


          {/* Phone */}
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Phone
            </label>
            <input
              value={formValue.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>


          {/* Admission Date */}
          <div className="mb-4">
            <label
              htmlFor="admissionDate"
              className="block text-sm font-medium text-gray-600"
            >
              Admission Date
            </label>
            <input
              value={formValue.admissionDate}
              onChange={(e) => handleChange("admissionDate", e.target.value)}
              type="date"
              id="admissionDate"
              name="admissionDate"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>


          {/* Courses */}
          <div className="mb-4">
            <label
              htmlFor="courses"
              className="block text-sm font-medium text-gray-600"
            >
              Courses
            </label>
            <input
              value={formValue.courses}
              onChange={(e) => handleChange("courses", e.target.value)}
              type="text"
              id="courses"
              name="courses"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>


          {/* Submit Button */}
            <div className="mt-6">
              <button
                onClick={save}
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md"
              >
                Submit
              </button>
            </div>
        </div>
        <Toaster position="top-center"/>
      </div>
    </>
  );
};


export default FormData;



