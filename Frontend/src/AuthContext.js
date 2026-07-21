import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const updateUser = (newUser) => {
        setUser(newUser)
    }

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/api/user/profile`, { credentials: "include" })
            const data = await res.json()
            updateUser(data)
        }
        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={{ user, updateUser }}>
            {children}
        </AuthContext.Provider>
    )
}