import  {create} from 'zustand' 
import axiosInstance from '../Utils/AxiosInstance'
import {toast} from 'react-hot-toast'

const useAuthStore = create((set) => ({
    user:null,
    isLoggedIn:false,
    isLoggingIn:false,
    isSigningUp:false,
    isLoggingOut:false,
    isEditingProfile:false,
    isAuthentiCating:false,

    register: async (data, navigate) => {
        set({isSigningUp:true})
        try {
            const response = await axiosInstance.post("/auth/register", data)
            set({user:response.data.user, isLoggedIn:true})
            navigate("/movies")
            toast.success("User signedUp successfully")
        } catch (error) {
            toast.error("Something went wrong")
            console.log(error)
        } finally{
            set({isSigningUp:false})
        }
    },

    login: async (data, navigate) =>{
        set({isLoggingIn:true})
        try {
            const response = await axiosInstance.post("/auth/login", data)
            set({user:response.data.user,isLoggedIn:true})
            navigate("/movies")
            toast.success("User Loggedin successfully")
        } catch (error) {
            toast.error("something went wrong")
            console.log(error)
        } finally{
            set({isLoggingIn:false})
        }
    },

    logout: async (navigate) => {
        set({isLoggingOut:true})
        try {
            await axiosInstance.post("/auth/logout")
            set({isLoggedIn:false, user:null})
            navigate("/")
            toast.success("User LoggedOut Successfully")
        } catch (error) {
            toast.error("Something went wrong")
            console.log(error)
        } finally{ 
            set({isLoggingOut:false})
        }
    },

    check: async () =>{
        set({isAuthentiCating:true})
        try {
            const response = await axiosInstance.get("/auth/check")
            set({user:response.data.user,isLoggedIn:true})
        } catch (error) {
            console.log(error)
        } finally{
            set({isAuthentiCating:false})
        }
    }
}))

export default useAuthStore