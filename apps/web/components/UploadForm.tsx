import { ChangeEvent, FormEvent, useState } from 'react';

function UploadForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });
  const { title, description, imageUrl } = formData;

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
    <section>
      <form>
        <div>
          <label htmlFor="">title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="">description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="">image</label>
          <input
            type="file"
            name="imageUrl"
            id="imageUrl"
            value={imageUrl}
            onChange={onChange}
          />
        </div>
        <div>
          <button type="submit">upload</button>
        </div>
      </form>
    </section>
  );
}

export default UploadForm;
