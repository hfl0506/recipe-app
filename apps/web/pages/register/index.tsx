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
    <div className="w-full max-w-sm mx-auto">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-xl rounded px-8 pb-8 mb-4 mt-20"
      >
        <div className="mt-10 mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mt-2 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="name"
            value={email}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
            "
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
            "
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
            "
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
            "
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
            "
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {' '}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default index;
