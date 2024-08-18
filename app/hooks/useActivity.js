"use client";

import { useState, useEffect } from "react";
import { useActivityStore } from "@/store/useActivityStore";
import { useUserStore } from "@/store/useUserStore";
import { useGoal } from "./useGoal";
import { useUser } from "./useUser";

export const useActivity = () => {
  const { activities, addActivity, updateActivity, deleteActivity } =
    useActivityStore();
  const { user } = useUserStore();
  const { goals } = useGoal();

  const [selectedActivity, setSelectedActivity] = useState<
    {
      id: number;
      name: string;
      description: string;
      goalId: number;
      userId: string;
      duration: number;
      progress: number;
      createdAt: string;
      updatedAt: string;
    } | null
  >(null);

  const handleEditActivity = (activity: any) => {
    setSelectedActivity(activity);
  };

  const handleCancelEdit = () => {
    setSelectedActivity(null);
  };

  const handleDeleteActivity = async (activityId: number) => {
    try {
      await deleteActivity(activityId);
    } catch (error) {
      console.error("Error deleting activity:", error);
    }
  };

  return {
    activities,
    addActivity,
    updateActivity,
    deleteActivity,
    selectedActivity,
    handleEditActivity,
    handleCancelEdit,
    handleDeleteActivity,
  };
};