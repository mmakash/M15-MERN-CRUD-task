/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getDataById, postData } from '../ApiRequest/ApiRequest';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const FormData = () => {
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: '',
        nationality: '',
        address: '',
        email: '',
        phone: '',
        admissionDate: '',
        courses: ''
    })


    const handleChange = (name,value) => {
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

   const saveData = async () => {
    //  let res = await postData(formValue);
    //  console.log(formValue);
      if(formValue.firstName.length === 0){
          alert("Please Enter First Name");
      }
      else if(formValue.lastName.length === 0){
          alert("Please Enter Last Name");
      }
      else if(formValue.gender.length === 0){
          alert("Please Enter Gender");
      }
      else if(formValue.dateOfBirth.length === 0){
          alert("Please Enter Date Of Birth");
      }
      else if(formValue.nationality.length === 0){
          alert("Please Enter Nationality");
      }
      else if(formValue.address.length === 0){
          alert("Please Enter Address");
      }
      else if(formValue.email.length === 0){
          alert("Please Enter Email");
   }
   else if(formValue.phone.length === 0){
       alert("Please Enter Phone");
   }
   else if(formValue.admissionDate.length === 0){
       alert("Please Enter Admission Date");
   }
   else if(formValue.courses.length === 0){
       alert("Please Enter Courses");
   }
   else{
       let res = await postData(formValue);
       if(res){
          alert("Data Added Successfully");
       }
       else{
          alert("Something went wrong");
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
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
            <input value={formValue.firstName} onChange={(e) => handleChange('firstName',e.target.value)} type="text" id="firstName" name="firstName" className="mt-1 p-2 w-full border rounded-md" />
          </div>
  
          {/* Last Name */}
          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
            <input value={formValue.lastName} onChange={(e) => handleChange('lastName',e.target.value)} type="text" id="lastName" name="lastName" className="mt-1 p-2 w-full border rounded-md" />
          </div>
  
          {/* Gender */}
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-600">Gender</label>
            <select value={formValue.gender} onChange={(e) => handleChange('gender',e.target.value)} id="gender" name="gender" className="mt-1 p-2 w-full border rounded-md">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
  
          {/* Date of Birth */}
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-600">Date of Birth</label>
            <input value={formValue.dateOfBirth} onChange={(e) => handleChange('dateOfBirth',e.target.value)} type="date" id="dateOfBirth" name="dateOfBirth" className="mt-1 p-2 w-full border rounded-md" />
          </div>
  
          {/* Nationality */}
          <div className="mb-4">
            <label htmlFor="nationality" className="block text-sm font-medium text-gray-600">Nationality</label>
            <input value={formValue.nationality} onChange={(e) => handleChange('nationality',e.target.value)} type="text" id="nationality" name="nationality" className="mt-1 p-2 w-full border rounded-md" />
          </div>
  
          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
            <textarea value={formValue.address} onChange={(e) => handleChange('address',e.target.value)} id="address" name="address" rows="3" className="mt-1 p-2 w-full border rounded-md"></textarea>
          </div>
  
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input value={formValue.email} onChange={(e) => handleChange('email',e.target.value)} type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" />
          </div>
  
          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
            <input value={formValue.phone} onChange={(e) => handleChange('phone',e.target.value)} type="tel" id="phone" name="phone" className="mt-1 p-2 w-full border rounded-md" />
          </div>
  
          {/* Admission Date */}
          <div className="mb-4">
            <label htmlFor="admissionDate" className="block text-sm font-medium text-gray-600">Admission Date</label>
            <input value={formValue.admissionDate} onChange={(e) => handleChange('admissionDate',e.target.value)} type="date" id="admissionDate" name="admissionDate" className="mt-1 p-2 w-full border rounded-md" />
          </div>
  
          {/* Courses */}
          <div className="mb-4">
            <label htmlFor="courses" className="block text-sm font-medium text-gray-600">Courses</label>
            <input value={formValue.courses} onChange={(e) => handleChange('courses',e.target.value)} type="text" id="courses" name="courses" className="mt-1 p-2 w-full border rounded-md" />
          </div>
  
          {/* Submit Button */}
         <Link to="/">
         <div className="mt-6">
            <button onClick={saveData} type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
          </div>
         </Link>
        </div>
      </div>
        </>
    );
};

export default FormData;