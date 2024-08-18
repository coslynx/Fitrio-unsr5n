"use client";

import axios from "axios";
import { Goal, Activity } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const getGoals = async (userId: string): Promise<Goal[]> => {
  try {
    const response = await axios.get(`${API_URL}/goals`, {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching goals:", error);
    throw error;
  }
};

export const createGoal = async (goal: Goal): Promise<Goal> => {
  try {
    const response = await axios.post(`${API_URL}/goals`, goal);
    return response.data;
  } catch (error) {
    console.error("Error creating goal:", error);
    throw error;
  }
};

export const updateGoal = async (
  goalId: number,
  updatedGoal: Goal
): Promise<Goal> => {
  try {
    const response = await axios.put(`${API_URL}/goals/${goalId}`, updatedGoal);
    return response.data;
  } catch (error) {
    console.error("Error updating goal:", error);
    throw error;
  }
};

export const deleteGoal = async (goalId: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/goals/${goalId}`);
  } catch (error) {
    console.error("Error deleting goal:", error);
    throw error;
  }
};

export const getActivities = async (userId: string): Promise<Activity[]> => {
  try {
    const response = await axios.get(`${API_URL}/activities`, {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

export const createActivity = async (
  activity: Activity
): Promise<Activity> => {
  try {
    const response = await axios.post(`${API_URL}/activities`, activity);
    return response.data;
  } catch (error) {
    console.error("Error creating activity:", error);
    throw error;
  }
};

export const updateActivity = async (
  activityId: number,
  updatedActivity: Activity
): Promise<Activity> => {
  try {
    const response = await axios.put(
      `${API_URL}/activities/${activityId}`,
      updatedActivity
    );
    return response.data;
  } catch (error) {
    console.error("Error updating activity:", error);
    throw error;
  }
};

export const deleteActivity = async (activityId: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/activities/${activityId}`);
  } catch (error) {
    console.error("Error deleting activity:", error);
    throw error;
  }
};