import React from 'react'

const Navbar = () => {
  return (
    // <div className='flex-nav'>
      <>
      
      {/* <div className='flex-icon'>

      <img className="main-icon" style={{  height: '100%',borderRadius: 9999}} src="Ellipse 1.svg" />

      <div className='title' style={{color: 'white', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '700', wordWrap: 'break-word'}}>Epic International and Co.</div>
      </div> */}
      <ol className='menu'>
        {/* <li><a href="">Home</a></li>
        <li><a href="">ABOUT US</a></li>
        <li><a href="">OUR SERVICES</a></li>
        <li><a href="">OUR COURSES</a></li> */}
        <a href='/' style={{left: 1074, top: 56, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>HOME</a>
    <a href='/Services' style={{left: 1227, top: 56, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>ABOUT US</a>
    <a href="" style={{left: 1404, top: 56, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>OUR SERVICES</a>
    <a href="/Our-Courses" style={{left: 1592, top: 56, position: 'absolute', color: 'white', fontSize: 20, fontFamily: 'Open Sans', fontWeight: '600', wordWrap: 'break-word'}}>OUR COURCES</a>
    
      </ol>
      
    </>
  )
}

export default Navbar
