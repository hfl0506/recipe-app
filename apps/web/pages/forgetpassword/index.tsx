import { ChangeEvent, FormEvent, useState } from 'react';

function Index() {
  const [resetData, setResetData] = useState({
    code: '',
    password: '',
    password2: '',
  });

  const { code, password, password2 } = resetData;

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setResetData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
    } catch (error) {}
  };
  const getVerifyCode = async () => {};
  return (
    <div className="w-full max-w-xs mx-auto">
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-xl rounded px-8 pb-8 mb-4 mt-20 border"
      >
        <div className="mt-10 mb-4">
          <label
            htmlFor="verifyCode"
            className="block text-gray-700 text-sm font-bold mt-2 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          >
            Get reset code:
          </label>
          <button
            onClick={getVerifyCode}
            className="bg-indigo-500 hover:bg-indigo-700 font-bold py-2 px-2 w-40 focus:outline-none focus:shadow-outline text-white rounded"
          >
            Get Code
          </button>
        </div>
        <div className="mt-10 mb-4">
          <label
            htmlFor="code"
            className="block text-gray-700 text-sm font-bold mt-2 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          >
            Verify Code
          </label>
          <input
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
          "
          />
        </div>
        <div className="mt-10 mb-4">
          <label
            htmlFor="verifyCode"
            className="block text-gray-700 text-sm font-bold mt-2 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          >
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={password}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
          "
          />
        </div>
        <div className="mt-10 mb-4">
          <label
            htmlFor="verifyCode"
            className="block text-gray-700 text-sm font-bold mt-2 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={password2}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
          text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
          "
          />
        </div>
        <div className="mt-10 mb-4">
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded font-bold focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Index;
