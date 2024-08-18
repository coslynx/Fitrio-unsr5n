"use client";

import { useState } from "react";
import { usePost } from "@/hooks/usePost";
import { useUser } from "@/hooks/useUser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const postSchema = z.object({
  content: z.string().nonempty("Post content is required"),
  image: z.string().optional(),
  video: z.string().optional(),
});

export default function PostForm() {
  const { user } = useUser();
  const { createPost } = usePost();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(postSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await createPost({ ...data, userId: user?.id });
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700"
        >
          What's on your mind?
        </label>
        <textarea
          id="content"
          {...register("content")}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.content && (
          <p className="text-red-500 text-xs mt-1">
            {errors.content.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image (Optional)
        </label>
        <input
          type="text"
          id="image"
          {...register("image")}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="video"
          className="block text-sm font-medium text-gray-700"
        >
          Video (Optional)
        </label>
        <input
          type="text"
          id="video"
          {...register("video")}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center px-4 py-2 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Share
      </button>
    </form>
  );
}