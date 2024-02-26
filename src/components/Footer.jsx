import React from 'react'

function Footer() {
  return (
    <div className='bg-dark text-white'>
      <div className='container pt-5'>
        <div className='footer-content row'>
          <div className='media col-lg-5'>
            <h5 className='d-flex'><i style={{height:'25px'}} className="fa-brands fa-fort-awesome me-2"></i>ROYAL PALACE</h5>
            <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet cumque qui deserunt totam dolor! Aspernatur placeat, animi numquam reiciendis</p> 
            <p>Code licenced MIT, docs CC BY 3.0</p>
            <p>Currently v5.3.2</p>
          </div>
          <div className='links d-flex flex-column col-lg-2'>
            <h5>Links</h5>
            <a href="">Features</a>
            <a href="">How it works</a>
            <a href="">Prices</a>
            <a href="">Contact</a>
          </div>
  
          <div className='guides d-flex flex-column col-lg-2'>
            <h5>Guides</h5>
            <a href="https://react.dev/" style={{textDecoration:'none',color:'white'}} target='_blank'>React JS</a>
            <a href="https://reactrouter.com/en/main" style={{textDecoration:'none',color:'white'}} target='_blank'>React Routing</a>
            <a href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</a>
          </div>
  
          <div className='contact d-flex flex-column col-lg-3'>
            <h5>Contact Us</h5>
            <div className="d-flex">
              <input type="text" className='form-control me-1' placeholder='Email id Please'/>
              <button className='btn btn-info'><i className='fa-solid fa-arrow-right'></i></button>
            </div>
            <div className="d-flex justify-content-between pt-3">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer