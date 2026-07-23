"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import api from "@/Services/api";



const AuthContext = createContext();




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [role, setRole] = useState(null);

    const [loading, setLoading] = useState(true);

    const [isAuthenticated, setIsAuthenticated] = useState(false);



    const fetchCurrentUser = async () => {

        const token = localStorage.getItem("token");


        // No token → guest

        if (!token) {

            setLoading(false);

            return;

        }


        try {

            const response = await api.get("/auth/me");


            setUser(response.data.user);

            setRole(response.data.role);

            setIsAuthenticated(true);

        }

        catch (error) {

            localStorage.removeItem("token");

            setUser(null);

            setRole(null);

            setIsAuthenticated(false);

        }

        finally {

            setLoading(false);

        }

    };




    useEffect(() => {

        fetchCurrentUser();

    }, []);




    const login = async (token) => {

        localStorage.setItem("token", token);

        await fetchCurrentUser();

    };



    const logout = () => {

        localStorage.removeItem("token");

        setUser(null);

        setRole(null);

        setIsAuthenticated(false);

    };




    return (

        <AuthContext.Provider

            value={{

                user,

                role,

                loading,

                isAuthenticated,

                login,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

};



export const useAuth = () => useContext(AuthContext);

export default AuthProvider;