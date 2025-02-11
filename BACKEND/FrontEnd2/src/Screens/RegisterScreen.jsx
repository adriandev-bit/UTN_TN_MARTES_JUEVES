import React from 'react';

export const RegisterScreen = () => {
  return (
    <div>
      <div>Registrate en nuestra app</div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Joe Doe" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="joedoe@gmail.com" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Example_password123" id="password" name="password" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterScreen;



// rafce