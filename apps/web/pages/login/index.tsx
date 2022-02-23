import { ChangeEvent, FormEvent, useState } from 'react';

function index() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const { email, password } = login;

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setLogin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={onLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default index;
