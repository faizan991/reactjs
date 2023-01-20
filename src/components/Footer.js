import React from 'react'
//import { Link , NavLink } from 'react-router-dom';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from './auth'

const Footer = () => {
  const navigate = useNavigate()
  const auth = useAuth()
  return (
    <footer>

      <p>Copyright 2022 </p>
      <br />
      <table width='100%'>
        {/* <tr>
          <td> <a href='/home'>Home</a> </td>
          <td> <a href='/about'>About</a> </td>
        </tr> */}
        {/* <tr>
          <td> <Link to='home'>Home</Link>  </td>
          <td> <Link to='about'>About</Link>  </td>
        </tr> */}
        <thead>
          <tr>
            <td width='25%'></td>
            <td width='25%' align='right'>Nev</td>
            <td width='25%' align='left'>Menu</td>
            <td width='25%'></td>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>
              <NavLink to='list-posts'>list posts</NavLink>
            </td>
            <td> <NavLink to='home'>Home</NavLink>  </td>
            <td> <NavLink to='about'>About</NavLink>  </td>
            <td> <NavLink to='lazy'>Lazy</NavLink>  </td>
          </tr>
          <tr>
            <td> <NavLink to='profile'>Profile</NavLink>  </td>
            {!auth.user && (
              <td> <NavLink to='login'>Login</NavLink>  </td>
            )}
            <td>   </td>
            {/* <td> <button onClick={() => {navigate('about')}}>UseNavigate to about</button> </td> */}
            <td> 
              <button title='to about with replace navigation history' 
                      onClick={() => { navigate('about', { replace: true }) }}>UseNavigate</button> 
              </td>
          </tr>
        </tbody>
      </table>

    </footer>
  )
}

export default Footer
