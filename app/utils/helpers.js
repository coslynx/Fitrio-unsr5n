"use client";

import { format } from "date-fns";

export const calculateGoalProgress = (goal, activities) => {
  const goalActivities = activities.filter(
    (activity) => activity.goalId === goal.id
  );
  const totalProgress = goalActivities.reduce(
    (acc, activity) => acc + activity.progress,
    0
  );
  return ((totalProgress / goal.target) * 100).toFixed(0);
};

export const formatDate = (dateString) => {
  return format(new Date(dateString), "MMMM do, yyyy");
};

export const formatDuration = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getGoalTypeLabel = (goalType) => {
  switch (goalType) {
    case "Weight Loss":
      return "Weight Loss";
    case "Muscle Gain":
      return "Muscle Gain";
    case "Distance Running":
      return "Running";
    default:
      return goalType;
  }
};