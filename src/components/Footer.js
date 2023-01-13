import React from 'react'
//import { Link , NavLink } from 'react-router-dom';
import { NavLink , useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate()
  return (
    <footer>

      <p>Copyright 2022 </p>
      <table>
        {/* <tr>
          <td> <a href='/home'>Home</a> </td>
          <td> <a href='/about'>About</a> </td>
        </tr> */}
        {/* <tr>
          <td> <Link to='home'>Home</Link>  </td>
          <td> <Link to='about'>About</Link>  </td>
        </tr> */}
        <tr>
          <td> <NavLink to='home'>Home</NavLink>  </td>
          <td> <NavLink to='about'>About</NavLink>  </td>
          <td> <NavLink to='lazy'>Lazy</NavLink>  </td>
          {/* <td> <button onClick={() => {navigate('about')}}>UseNavigate to about</button> </td> */}
          <td> <button onClick={() => {navigate('about' , {replace : true} )}}>UseNavigate to about with replace navigation history</button> </td>
        </tr>
      </table>

    </footer>
  )
}

export default Footer
