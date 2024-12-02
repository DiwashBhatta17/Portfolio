import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import { ImagePlus, Camera } from 'lucide-react';
import { uploadImage } from '../utils/imgbb';
import toast from 'react-hot-toast';

interface Props {
  onClose: () => void;
  onUpload: (title: string, description: string, imageUrl: string) => void;
}

export const UploadModal: React.FC<Props> = ({ onClose, onUpload }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreview(fileReader.result as string);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setPreview(fileReader.result as string);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title || !description) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      setUploading(true);
      const imageUrl = await uploadImage(file);
      onUpload(title, description, imageUrl);
      onClose();
      toast.success('Post uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full sm:w-[450px] md:w-[500px] max-w-xl shadow-lg transform transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
          Create New Post
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the title of your post"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-20"
              placeholder="Tell us more about this moment..."
              required
            />
          </div>

          {/* Upload Image Section */}
          <div
            className="mb-4 p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-center"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
              Upload Image
            </label>
            <div className="mb-4">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-32 h-32 object-cover rounded-lg mx-auto mb-4"
                />
              ) : (
                <div className="mb-4 flex justify-center items-center">
                  <ImagePlus className="text-gray-500 dark:text-gray-400 w-12 h-12" />
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="w-full text-sm text-gray-700 dark:text-gray-200 cursor-pointer border border-gray-300 dark:border-gray-600 rounded-lg py-2 px-3 mt-2 file:border-0 file:bg-blue-100 file:text-blue-500 file:cursor-pointer hover:file:bg-blue-200 transition-colors"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors w-full sm:w-auto"
              disabled={uploading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors w-full sm:w-auto flex items-center justify-center gap-2"
              disabled={uploading}
            >
              {uploading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-t-2 border-white rounded-full" />
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4" />
                  <span>Upload</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
