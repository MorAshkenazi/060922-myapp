import axios from "axios";
import User from "../interfaces/User";

const api: string = "https://jsonplaceholder.typicode.com/users";

// add new user
export function addUser(newUser: User) {
  // post request jsonplaceholder to add new user
  return axios.post(api, newUser);
}

// check user in login
// `${api}/${id}`
