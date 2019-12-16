import React, { useState } from 'react'
import TextField from '@material-ui/core/textfield'
import Button from '@material-ui/core/button'
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
        <h2>{JSON.stringify(user,1,1)}</h2>
        <form onSubmit={handleSubmit} >
            <TextField type="email" name="email" onChange={ (e) => setEmail(e.target.value)} placeholder="mail" />
            <TextField type="password" name="mypassw0rd" onChange={ (e) => setPassword(e.target.value)} placeholder="password" />
            <TextField type="text" name="name" onChange={ (e) => setName(e.target.value)} placeholder="name" />
            <TextField type="text" name="lastname" onChange={ (e) => setlastname(e.target.value)} placeholder="lastname"/>
            <Button variant="contained" color="primary" type="submit" value="Soumettre">Soumettre</Button>
        </form>
    </div>
  );
}

export default SignUp;