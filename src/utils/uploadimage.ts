import axios from 'axios';

const API_KEY = 'ecc732e5efac9e2af41f2ed8af48e928';

async function uploadImage(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);

  // Directly passing formData as the second argument
  const response = await axios.post(`https://api.imgbb.com/1/upload?key=${API_KEY}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data.data.url; // The URL of the uploaded image
}

export default uploadImage;
