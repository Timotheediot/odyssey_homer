import React, { useState } from 'react'

const SignUp = () => {

const [email, setEmail] = useState("mon@email.fr")

  return (
    <div>
      <h1>{email}</h1><input type="email" name="email" onChange={ (e) => setEmail(e.target.value)} />
    </div>
  );
}

export default SignUp;