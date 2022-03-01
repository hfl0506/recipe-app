import { ChangeEvent, FormEvent, useState } from 'react';

function UploadForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    imageUrl: '',
  });
  const { title, description, imageUrl } = formData;

  const onChange = async (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
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
    <div className="h-screen bg-white w-full flex flex-col items-center">
      <form
        onSubmit={onSubmit}
        className="shadow-xl rounded px-8 pb-8 mb-4 mt-20 border"
      >
        <div className="mt-8 mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mt-2 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
            "
          />
        </div>
        <div className="mt-8 mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 leading-tight font-bold mt-2 mb-2 focus:outline-none focus:shadow-outline"
          >
            Description
          </label>
          <textarea
            rows={8}
            id="description"
            name="description"
            value={description}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline
            "
          />
        </div>
        <div className="mt-8 mb-4">
          <label
            htmlFor="image"
            className="block text-gray-700 leading-tight font-bold mt-2 mb-2 focus:outline-none focus:shadow-outline"
          >
            Image
          </label>
          <input
            type="file"
            name="imageUrl"
            id="imageUrl"
            value={imageUrl}
            onChange={onChange}
            className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 mb-3 leading-tight focus:outline foucs:shadow-outline
            "
          />
        </div>
        <div className="mt-8 mb-4">
          <button
            type="submit"
            className="w-full rounded bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
}

export default UploadForm;
