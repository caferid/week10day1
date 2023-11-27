import React from 'react'
import { Link } from 'react-router-dom'

function Nabar() {
  return (
    < >
    <p>burasi navbardi</p>
        <button> <Link to="/"> home ye kec</Link></button>
        <button><Link to="/contact"> CONTACTA YS KEC</Link></button>
    </>
  )
}

export default Nabar