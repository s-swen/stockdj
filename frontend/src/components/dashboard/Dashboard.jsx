import React, { useEffect } from "react";
import axiosInstance from "../../axiosInstance";

const Dashboard = () => {
  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axiosInstance.get("/protected_view/");
      } catch (error) {
        console.error("Something went wrong:", error);
      }
    };
    fetchProtectedData();
  }, []);
  return <div className="text-light container">Dashboard</div>;
};

export default Dashboard;
