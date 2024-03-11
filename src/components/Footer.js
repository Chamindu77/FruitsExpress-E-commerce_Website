import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div >
      <footer style={{background: 'linear-gradient(to right, #000000,#2e8b57, #000000)',  height: '6vh', /*backgroundColor: '#013220'*/}} >
    <div class="col-md-4 d-flex align-items-center">
      <Link to="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        
      </Link>
      <span class="text-muted">© 2023 ~FruitsExpress~ , Inc</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
    </ul>
  </footer>
    </div>
  )
}
