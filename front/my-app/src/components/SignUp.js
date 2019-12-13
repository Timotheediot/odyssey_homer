import React, { useState } from 'react'
import './SignUp.css'

const SignUp = () => {

const [email, setEmail] = useState("mon@email.fr")
const [password, setPassword] = useState("monpassw0rd")
const [name, setName] = useState("James")
const [lastname, setlastname] = useState("Bond")
const [flash, setflash] = useState()

const obj = {email, password , name ,lastname}

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/auth/signup",
{
    method:  'POST',
    headers:  new  Headers({
        'Content-Type':  'application/json'
    }),
    body:  JSON.stringify(obj)
},
console.log(fetch.body)
)

.then(res  =>  res.json()
)
.then(
    res  =>  setflash(res.flash),
    err  =>  setflash(err.flash)
)
  
}
const user = {email, password, name, lastname}
  return (
    <div>
        <h1>{JSON.stringify(user,1,1)}</h1>
        <form onSubmit={handleSubmit} >
            <input type="email" name="email" onChange={ (e) => setEmail(e.target.value)} placeholder="mail" />
            <input type="password" name="mypassw0rd" onChange={ (e) => setPassword(e.target.value)} placeholder="password" />
            <input type="text" name="name" onChange={ (e) => setName(e.target.value)} placeholder="name" />
            <input type="text" name="lastname" onChange={ (e) => setlastname(e.target.value)} placeholder="lastname"/>
            <input type="submit" value="Soumettre" />
        </form>
    </div>
  );
}

export default SignUp;