import React from 'react'

export default function Register() {
  return (
    <>
        <div>
            <h1> Register Page  </h1> 
            <form action="">
                <label htmlFor="">Nom Complet</label>
                <input type="text"  />
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Mot de Passe</label>
                <input type="password" />
                <label htmlFor="">Confirmer Mot de Passe</label>
                <input type="password" />
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    </>
  )
}
