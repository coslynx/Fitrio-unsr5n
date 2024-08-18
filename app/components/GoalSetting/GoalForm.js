"use client";

import { useState } from "react";
import { useGoal } from "@/hooks/useGoal";
import { useUser } from "@/hooks/useUser";
import { GoalTypes } from "@/utils/constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const goalSchema = z.object({
  name: z.string().nonempty("Goal name is required"),
  description: z.string().optional(),
  type: z
    .enum(GoalTypes, {
      errorMap: () => ({ message: "Please select a valid goal type" }),
    })
    .nonempty("Goal type is required"),
  target: z.number().positive("Target must be a positive number"),
  startDate: z.date().nonempty("Start date is required"),
  endDate: z.date().min(z.date().parse(new Date().toISOString()), "End date must be after start date"),
});

export default function GoalForm({ goalId, initialValues }) {
  const { user } = useUser();
  const { createGoal, updateGoal } = useGoal();
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(goalSchema),
    defaultValues: initialValues,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      if (goalId) {
        await updateGoal(goalId, data);
      } else {
        await createGoal({ ...data, userId: user?.id });
      }
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
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Goal Name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description (Optional)
        </label>
        <textarea
          id="description"
          {...register("description")}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Goal Type
        </label>
        <select
          id="type"
          {...register("type")}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Select Goal Type</option>
          {GoalTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.type && (
          <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="target" className="block text-sm font-medium text-gray-700">
          Target
        </label>
        <input
          type="number"
          id="target"
          {...register("target")}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.target && (
          <p className="text-red-500 text-xs mt-1">{errors.target.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
          Start Date
        </label>
        <input
          type="date"
          id="startDate"
          {...register("startDate")}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.startDate && (
          <p className="text-red-500 text-xs mt-1">{errors.startDate.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
          End Date
        </label>
        <input
          type="date"
          id="endDate"
          {...register("endDate")}
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.endDate && (
          <p className="text-red-500 text-xs mt-1">{errors.endDate.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center px-4 py-2 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {goalId ? "Update Goal" : "Create Goal"}
      </button>
    </form>
  );
}