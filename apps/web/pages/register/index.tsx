import { ChangeEvent, FormEvent, useState } from 'react';

function index() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    password2: '',
  });
  const { email, firstName, lastName, password, password2 } = formData;
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="name"
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="email">Confirm Password:</label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default index;
