import React, { useEffect } from "react";
import { useState } from "react";
import { postData, getDataById, updateData } from "../ApiRequest/ApiRequest";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const StudentForm = () => {
  let navigate = useNavigate();
  const [FormValue, setFromValue] = useState({
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

  let [UpdateId, setUpdateId] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    setUpdateId(id);

    (async () => {
      if (id !== null) {
        FillFrom(id);
      }
    })();
  }, []);

  const FillFrom = async (id) => {
    let res = await getDataById(id);

    setFromValue({
      firstName: res.firstName,
      lastName: res.lastName,
      gender: res.gender,
      dateOfBirth: res.dateOfBirth,
      nationality: res.nationality,
      address: res.address,
      email: res.email,
      phone: res.phone,
      admissionDate: res.admissionDate,
      courses: res.courses,
    });
  };

  const InputOnChange = (name, value) => {
    setFromValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };
  const Save = async () => {
    if (FormValue.firstName.length === 0) {
      toast.error("firstName Required");
    } else if (FormValue.lastName.length === 0) {
      toast.error("lastName Required");
    } else if (FormValue.gender.length === 0) {
      toast.error("Task Title Required");
    } else if (FormValue.dateOfBirth.length === 0) {
      toast.error("dateOfBirth Required");
    } else if (FormValue.nationality.length === 0) {
      toast.error("nationality Required");
    } else if (FormValue.address.length === 0) {
      toast.error("address Required");
    } else if (FormValue.email.length === 0) {
      toast.error("Email Required");
    } else if (FormValue.phone.length === 0) {
      toast.error("phone Required");
    } else if (FormValue.admissionDate.length === 0) {
      toast.error("admissionDate Required");
    } else if (FormValue.courses.length === 0) {
      toast.error("courses Required");
    } else {
      if (UpdateId === null) {
        let res = await postData(FormValue);
        console.log(res);
        if (res) {
          toast.success("Student Data Created");
          navigate("/");
        } else {
          toast.error("Request Fail");
        }
      } else {
        let res = await updateData(FormValue, UpdateId);
        console.log(res);
        if (res) {
          toast.success("Student Data  Update");
          navigate("/");
        } else {
          toast.error(" Update Request Fail");
        }
      }
    }
  };
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
              value={FormValue.firstName}
              onChange={(e) => InputOnChange("firstName", e.target.value)}
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
              value={FormValue.lastName}
              onChange={(e) => InputOnChange("lastName", e.target.value)}
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
              value={FormValue.gender}
              onChange={(e) => InputOnChange("gender", e.target.value)}
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
              value={FormValue.dateOfBirth}
              onChange={(e) => InputOnChange("dateOfBirth", e.target.value)}
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
              value={FormValue.nationality}
              onChange={(e) => InputOnChange("nationality", e.target.value)}
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
              value={FormValue.address}
              onChange={(e) => InputOnChange("address", e.target.value)}
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
              value={FormValue.email}
              onChange={(e) => InputOnChange("email", e.target.value)}
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
              value={FormValue.phone}
              onChange={(e) => InputOnChange("phone", e.target.value)}
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
              value={FormValue.admissionDate}
              onChange={(e) => InputOnChange("admissionDate", e.target.value)}
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
              value={FormValue.courses}
              onChange={(e) => InputOnChange("courses", e.target.value)}
              type="text"
              id="courses"
              name="courses"
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              onClick={Save}
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Toaster
        className="text-center"
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
};

export default StudentForm;
