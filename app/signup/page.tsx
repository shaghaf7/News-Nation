import { Button } from '@/components/ui/button'
import React from 'react'

function signup() {
  return (
    <div>
      <header>
          Sign-in
      </header>
      <div>
        <h4>
          Signup for News-Nation
        </h4>
        <input placeholder='Enter your Username' type='text'></input>
        <input placeholder='Enter Your email' type='text' ></input>
        <input placeholder='Enter Your password' type='password'></input>
        <input placeholder='Confirm Your Password' type='password'></input>
        <Button>Signup</Button>
      </div>
    </div>
  )
}

export default signup

