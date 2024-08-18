"use client";

import { useState, useEffect } from "react";
import { useGoal } from "@/hooks/useGoal";
import { useUser } from "@/hooks/useUser";
import { GoalForm } from "@/components/GoalSetting/GoalForm";
import { GoalCard } from "@/components/Dashboard/GoalCard";
import { GoalTypes } from "@/utils/constants";
import { useActivity } from "@/hooks/useActivity";
import { ProgressChart } from "@/components/ProgressChart";
import { format } from "date-fns";

export default function GoalsPage() {
  const { user } = useUser();
  const { goals, createGoal, updateGoal, deleteGoal } = useGoal();
  const { activities } = useActivity();

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

  const handleEditGoal = (goal) => {
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

  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    const totalGoalProgress = goals.reduce((acc, goal) => {
      const goalActivities = activities.filter(
        (activity) => activity.goalId === goal.id
      );
      const goalProgress =
        (goalActivities.reduce(
          (acc, activity) => acc + activity.progress,
          0
        ) /
          goal.target) *
        100;
      return acc + goalProgress;
    }, 0);

    setOverallProgress(
      (totalGoalProgress / goals.length).toFixed(0) || 0
    );
  }, [activities, goals]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Goals</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">Overall Progress</h2>
        <div className="flex items-center mb-4">
          <p className="text-gray-500">Progress</p>
          <p className="font-medium">{overallProgress}%</p>
        </div>
        <ProgressChart progress={parseFloat(overallProgress)} />
      </div>

      {selectedGoal ? (
        <GoalForm
          goalId={selectedGoal.id}
          initialValues={selectedGoal}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">Create a New Goal</h2>
          <GoalForm onCancel={handleCancelEdit} />
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">Your Active Goals</h2>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {goals.map((goal) => (
            <li key={goal.id}>
              <GoalCard goal={goal} onEdit={handleEditGoal} />
              <div className="flex justify-between mt-2">
                <button
                  onClick={() => handleDeleteGoal(goal.id)}
                  className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}