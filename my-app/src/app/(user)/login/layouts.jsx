import React from 'react'

export default function Login({children}) {
  return (
   <>
    <div>
        <h1> Login Page </h1>
        <form action="">
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
   </>
  )
}
