import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types/blog';
import axios from 'axios';
import toast from 'react-hot-toast';
import BASE_URL from '../utils/api';

interface Props {
  post: BlogPostType;
  onDelete: ( _id: string) => void; // Callback to update parent state
}

export const BlogPost: React.FC<Props> = ({ post, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [password, setPassword] = useState('');
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (password !== '7644') {
      toast.error('Invalid password');
      return;
    }

    try {
      setDeleting(true);
      // Make a DELETE request to your backend API
      await axios.delete(`${BASE_URL}/${post._id}`, {
        data: { password }, // Send password for server-side validation
      });

      onDelete(post._id); // Update parent state with the correct _id
      toast.success('Post deleted successfully');
      setShowDeleteModal(false);
    } catch (error) {
      toast.error('Failed to delete the post. Try again.');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="text-red-500 hover:text-red-700 transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>
        <p className="text-gray-600">{post.description}</p>
        <p className="text-sm text-gray-400 mt-2">
          {new Date(post.timestamp).toLocaleDateString()}
        </p>
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Delete Post
            </h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-300 mb-4"
              placeholder="Enter PIN to delete"
            />
            <div className="flex justify-between gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg"
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded-lg"
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
