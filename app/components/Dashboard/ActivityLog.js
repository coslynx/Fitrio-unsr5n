"use client";

import { useState } from "react";
import { useActivity } from "@/hooks/useActivity";

export default function ActivityLog() {
  const [showMore, setShowMore] = useState(false);
  const { activities } = useActivity();

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Activity Log</h2>
      <ul className="space-y-2">
        {activities
          .slice(0, showMore ? activities.length : 5)
          .map((activity) => (
            <li
              key={activity.id}
              className="bg-gray-100 rounded-md p-3 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{activity.name}</p>
                  <p className="text-gray-500 text-sm">
                    {new Date(activity.createdAt).toLocaleDateString()}
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
      {activities.length > 5 && (
        <button
          onClick={handleShowMore}
          className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}