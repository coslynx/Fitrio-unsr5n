"use client";

import { z } from "zod";

export const goalSchema = z.object({
  name: z.string().nonempty("Goal name is required"),
  description: z.string().optional(),
  type: z
    .enum(["Weight Loss", "Muscle Gain", "Distance Running", "Custom"], {
      errorMap: () => ({ message: "Please select a valid goal type" }),
    })
    .nonempty("Goal type is required"),
  target: z.number().positive("Target must be a positive number"),
  startDate: z.date().nonempty("Start date is required"),
  endDate: z
    .date()
    .min(z.date().parse(new Date().toISOString()), "End date must be after start date"),
});

export const activitySchema = z.object({
  name: z.string().nonempty("Activity name is required"),
  description: z.string().optional(),
  goalId: z.number().positive("Goal ID is required"),
  duration: z.number().positive("Duration must be a positive number"),
  progress: z.number().min(0).max(100).optional(),
});

export const validateGoal = (goalData: any) => {
  return goalSchema.safeParse(goalData);
};

export const validateActivity = (activityData: any) => {
  return activitySchema.safeParse(activityData);
};