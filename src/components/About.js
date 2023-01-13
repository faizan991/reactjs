import React from 'react'
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h4>This is About page</h4>
      <h4>App version : 0.0.1</h4>
      <a href='/'>Home</a>

      <td> <button onClick={() => navigate(-1) }>UseNavigate to Go back</button> </td>
    </div>
  )
}

export default About
