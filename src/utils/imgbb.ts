import axios from 'axios';

const API_KEY = 'ecc732e5efac9e2af41f2ed8af48e928';
const DELETE_PASSWORD = '7644';

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await axios.post(`https://api.imgbb.com/1/upload?key=${API_KEY}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.data?.data?.url) {
      return response.data.data.url; // Return the image URL
    } else {
      throw new Error('Image upload failed');
    }
  } catch (error) {
    throw new Error('Failed to upload image');
  }
};

export const validateDeletePassword = (password: string): boolean => {
  return password === DELETE_PASSWORD;
};
