"use client";

import { useState, useEffect } from "react";
import { useGoal } from "@/hooks/useGoal";
import { useActivity } from "@/hooks/useActivity";
import { useUser } from "@/hooks/useUser";
import { ProgressChart } from "@/components/ProgressChart";

export default function GoalCard({ goal }) {
  const { user } = useUser();
  const { activities } = useActivity();
  const [progress, setProgress] = useState(0);

  const goalActivities = activities.filter((activity) => activity.goalId === goal.id);

  useEffect(() => {
    const totalProgress = goalActivities.reduce(
      (acc, activity) => acc + activity.progress,
      0
    );
    setProgress((totalProgress / goal.target) * 100);
  }, [goalActivities, goal.target]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-bold mb-2">{goal.name}</h2>
      <p className="text-gray-600 mb-4">{goal.description}</p>
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-500">Progress</p>
        <p className="font-medium">{progress.toFixed(0)}%</p>
      </div>
      <ProgressChart progress={progress} />
    </div>
  );
}