import axios from "axios";

export async function getData() {
    try {
        const response = await axios.get("http://localhost:4000/api/v1/read-all");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getDataById(id) {
    try {
        const response = await axios.get(`http://localhost:4000/api/v1/get-student/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function postData(data) {
    try {
        const response = await axios.post("http://localhost:4000/api/v1/create-student", data);
        if(response.status === 200){
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}
export async function updateData(id, data) {
    try {
        const response = await axios.put(`http://localhost:4000/api/v1/update-student/${id}`, data);
        if(response.status === 200){
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

export async function deleteStudent(id) {
    try {
        const response = await axios.get(`http://localhost:4000/api/v1/delete-student/${id}`);
        if(response.status === 200){
            return true;
        }
        else{
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}