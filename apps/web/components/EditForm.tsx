import { ChangeEvent, FormEvent, useState } from 'react';

function EditForm() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    password2: '',
  });
  const { name, password, password2 } = formData;

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      //TODO pass formData = redux call
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div>
      <form onSubmit={onUpdate}>
        <div>
          <label>username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={name}
            onChange={onChange}
          />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div>
          <label>confirm password</label>
          <input
            type="password"
            name="password2"
            id="password2"
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

export default EditForm;
