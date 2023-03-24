import React, { useState } from 'react';
import axios from 'axios';

interface MyFormData {
  username: string;
  password: string;
}

interface MyResponseData {
  args: Record<string, unknown>;
  data: string;
  files: Record<string, unknown>;
  form: Record<string, unknown>;
  headers: {
    Accept: string;
    'Accept-Encoding': string;
    'Accept-Language': string;
    Authorization: string;
    'Content-Length': string;
    'Content-Type': string;
    Host: string;
    Origin: string;
    Referer: string;
    'User-Agent': string;
    'X-Amzn-Trace-Id': string;
  };
  json: {
    password: string;
    username: string;
  };
  origin: string;
  url: string;
}

interface MyProps {
  token: string;
}

const PostComponent: React.FC<MyProps> = ({ token }) => {
  const [formData, setFormData] = useState<MyFormData>({ username: '', password: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post<MyResponseData>('http://httpbin.org/post', formData, {
        headers: {
          Authorization: `${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostComponent;
