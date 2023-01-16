import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

const Profile = () => {

    const auth = useAuth()
    const Navigate = useNavigate()

    const handleLogout = () => {
        auth.logOut()
        Navigate('/')
    }

    return (
        <div>
            <h1>This is Profile Page {auth.user}</h1>
            <button onClick={handleLogout}>log Out</button>
        </div>
    )
}

export default Profile
