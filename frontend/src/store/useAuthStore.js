import {create} from "zustand";

export const useAuthStore = create((set) => ({
    authUser: {name: "john",_id:123, age:24},
    isLoggedIn:false,

    login: () => {
        console.log("we just Logged in");
        set({isLoggedIn:true, isLoading:true})
    },
}));

