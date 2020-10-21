import axios from "axios";
// create a new "instance" of axios with the config object built into it
// get the token from localstorage
export const axiosWithAuth = () => {
  let token = window.localStorage.getItem("token");
  token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkYW0iLCJ1c2VySWQiOjYzLCJpYXQiOjE2MDMzMDkyMjYsImV4cCI6MTYwMzMyNzIyNn0.b9W3vhJTB04MUPAfke0eRYfW7Ld5Y6TJomS3tVrm-no";
  return axios.create({
    headers: {
      authorization: token
    }
    // baseURL: "https://pintereach-backend-ajg.herokuapp.com/"
  });
};

