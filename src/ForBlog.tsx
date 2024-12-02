import React, { useState, useEffect } from 'react';
import { PlusCircle } from 'lucide-react';
import { ImagePlus, Camera } from 'lucide-react';
import { BlogPost as BlogPostType } from './types/blog';
import { BlogPost } from './blog/BlogPost';
import { UploadModal } from './blog/UploadModal';
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
import axios from 'axios';
import BASE_URL from './utils/api';

function ForBlog() {
  const [posts, setPosts] = useState<BlogPostType[]>([]);
  const [showUploadModal, setShowUploadModal] = useState(false);

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setPosts(response.data); // Assume the API returns an array of posts with `_id`
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const handleUpload = async (title: string, description: string, imageUrl: string) => {
    const newPost = {
      title,
      description,
      imageUrl,
      timestamp: Date.now(),
    };

    try {
      const response = await axios.post(BASE_URL, newPost); // Save to backend
      setPosts([response.data, ...posts]); // Add new post to state
      toast.success('Post uploaded successfully');
    } catch (error) {
      toast.error('Failed to upload post');
    }
  };

  const handleDelete = async (_id: string) => {
    try {
      await axios.delete(`${BASE_URL}/${_id}`); // Delete from backend
      setPosts(posts.filter(post => post._id !== _id)); // Remove from state
      toast.success('Post deleted successfully');
    } catch (error) {
      console.error("This is error", error);
      toast.error('Failed to delete post');
    }
  };

  return (
    <div className="min-w-full min-h-screen dark:bg-gray-900">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Photogram</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">Share your beautiful moments</p>
            </div>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 md:gap-2 sm:gap-0"
          >
            <PlusCircle size={20} className="sm:block hidden" />
            <span className="sm:block hidden">Create Post</span>
            <PlusCircle size={20} className="sm:hidden block" />
          </button>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-800 mb-4">
              <ImagePlus className="w-8 h-8 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No posts yet</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Start by sharing your first moment with the world!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <BlogPost
                key={post._id} // Use `_id` as the key
                post={post}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {showUploadModal && (
          <UploadModal
            onClose={() => setShowUploadModal(false)}
            onUpload={handleUpload}
          />
        )}
      </div>
    </div>
  );
}

export default ForBlog;
