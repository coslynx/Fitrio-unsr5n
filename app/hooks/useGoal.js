"use client";

import { useState, useEffect } from "react";
import { useGoalStore } from "@/store/useGoalStore";
import { useUser } from "./useUser";

export const useGoal = () => {
  const { goals, addGoal, updateGoal, deleteGoal } = useGoalStore();
  const { user } = useUser();

  const [selectedGoal, setSelectedGoal] = useState<
    {
      id: number;
      name: string;
      description: string;
      type: string;
      target: number;
      startDate: string;
      endDate: string;
    } | null
  >(null);

  const handleEditGoal = (goal: any) => {
    setSelectedGoal(goal);
  };

  const handleCancelEdit = () => {
    setSelectedGoal(null);
  };

  const handleDeleteGoal = async (goalId: number) => {
    try {
      await deleteGoal(goalId);
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  return {
    goals,
    addGoal,
    updateGoal,
    deleteGoal,
    selectedGoal,
    handleEditGoal,
    handleCancelEdit,
    handleDeleteGoal,
  };
};