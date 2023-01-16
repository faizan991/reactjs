import {useState} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {useAuth} from './auth'

const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const rediract = location.state?.path || '/'
    const handleLogin = () => {
        if(user) {
            auth.login(user)
            navigate(rediract , {replace : true})
        } else {
            alert('field is empty')
        }
    }

    return (
        <div>
            <h1>Provide Login Informaion</h1>
            <label>Name : </label>
            <br /> <input type="text" onChange={(e) => setUser(e.target.value) } />  <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
