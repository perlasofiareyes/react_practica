import { useState } from "react"

const API_URL = "https://api-production-d98c3.up.railway.app"
const [isLogin, setIsLogin] = useState(false)
const [token, setToken] = useState("")
const [user, setUser] = useState({})

const useAuth = () => {
    const login = async (user) => {
        const res = await fetch (API_URL+"/login/",{
            method: "post",
            headers: {"content-type":"application/json"},
            body:JSON.stringify(user)
        })
        const data = await res.json()
        setIsLogic(data.login)
        setUser(data.user)
        setToken(data.token)
        return data
    }
    const logout = () => {
        setIsLogin(false)
        setUser({})
    }
    return { isLogin, token, user, login, logout}
}

export default useAuth