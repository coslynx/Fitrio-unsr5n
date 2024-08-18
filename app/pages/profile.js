"use client";

import { useUser } from "@/hooks/useUser";
import { useGoal } from "@/hooks/useGoal";
import { useActivity } from "@/hooks/useActivity";
import { useState, useEffect } from "react";
import { ProgressChart } from "@/components/ProgressChart";
import { format } from 'date-fns';

export default function ProfilePage() {
  const { user } = useUser();
  const { goals } = useGoal();
  const { activities } = useActivity();
  const [overallProgress, setOverallProgress] = useState(0);
  const [totalActivities, setTotalActivities] = useState(0);

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
    setTotalActivities(activities.length);
  }, [activities, goals]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">User Information</h2>
        <div className="flex items-center mb-2">
          <img
            src={user?.imageUrl || "/icons/profile.svg"}
            alt="Profile Picture"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-lg font-medium">{user?.firstName}</p>
            <p className="text-gray-500">{user?.email}</p>
          </div>
        </div>
        {/* Add profile update functionality here */}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">Overall Progress</h2>
        <div className="flex items-center mb-4">
          <p className="text-gray-500">Progress</p>
          <p className="font-medium">{overallProgress}%</p>
        </div>
        <ProgressChart progress={parseFloat(overallProgress)} />
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-bold mb-2">Recent Activity</h2>
        <ul className="space-y-2">
          {activities
            .slice(0, 5)
            .map((activity) => (
              <li
                key={activity.id}
                className="bg-gray-100 rounded-md p-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{activity.name}</p>
                    <p className="text-gray-500 text-sm">
                      {format(new Date(activity.createdAt), 'MMMM do, yyyy')}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">
                      {activity.duration} mins
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        {/* Add functionality to view all activities */}
      </div>

      {/* Add account settings section */}
    </div>
  );
}