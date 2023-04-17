import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
})
// this is my pathway to get to register, as the user is going on this pathway, they will pass data which is their name, phone, and password with them
// 2 GETS 
export const home = () => api.get('/')
export const error = () => api.get("*")
export const registerUser = data => api.post(`/register`, data)
export const logUser = (data) => api.post(`/logIn`, data)
export const getUserById = id => api.get(`/user/${id}`)
export const getTrainerById = id => api.get(`/trainer/${id}`)
export const viewUser = (data) => api.put(`/userInfo`, data)
export const viewTrainers = (data) => api.put(`/trainerInfo`, data)
export const deleteTheUserById= id => api.delete(`/deleteUserInfo/${id}`)
// the trainers stuff
export const registerTrainer = data => api.post(`/registerTrainer`, data)
export const logTrainer = (data) => api.post(`/trainerlogIn`, data)
// 1 GET
export const getAllTrainers = () => api.get(`/aboutus`)

// admin stuff
export const registerAdmin = data => api.post(`/createAdmin`, data)
export const adminlogIn = (data) => api.post(`/adminLogin`, data)
// 2 GET
export const viewAllTrainers = () => api.get(`/adminViewTrainers`)
export const viewAllUsers = () => api.get(`/adminViewUsers`)

export const deleteTrainerById = id => api.delete(`/deleteTrainer/${id}`)
export const deleteUserById = id => api.delete(`/deleteUser/${id}`)


const apis = {
    home,
    error,
    registerUser,
    logUser,
    logTrainer,
    registerTrainer,
    viewAllTrainers,
    getAllTrainers,
    adminlogIn,
    registerAdmin,
    deleteTrainerById,
    viewAllUsers,
    deleteUserById,
    getUserById,
    viewUser,
    deleteTheUserById,
    viewTrainers,
    getTrainerById
}

export default apis


