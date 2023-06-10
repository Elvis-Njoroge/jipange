import React, {useState} from 'react';

const Login = () => {

  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUpClick = () => {
        setShowSignUpForm(!showSignUpForm);
    };

  return (

    <div className="login-container">
      <h2>{showSignUpForm ? 'Sign Up' : 'Login'}</h2>
      <form>
        <div className="form-group">
            <input type="text" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        {showSignUpForm && (
          <>
        <div className="form-group">
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>          
        </>
        )}
        <div className="form-group">
          <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
        </div>
        {showSignUpForm && (
          <>         
        <div className="form-group">
            <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
        </div>
        </>
        )}
        <button type="submit"> {showSignUpForm ? 'Sign Up' : 'Login'}</button>
      </form>
      <button className="signup-button" onClick={handleSignUpClick}>{showSignUpForm ? 'Login' : 'Sign Up'}</button>
    </div>
  );
};

export default Login;