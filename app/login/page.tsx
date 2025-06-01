import React from 'react'


function login() {
  return (
    <div>
      <header className=''>Login </header>
      <div>
        <h3>Login into News-Nation</h3>
        <input placeholder='Enter Your Email' type='text'></input>
        <input placeholder='Enter Your password' type ='password'></input>
        <button className='bg-purple-800'>Login</button>
      </div>
    </div>
  )
}

export default login
