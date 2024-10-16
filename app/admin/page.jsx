"use client";
import React from "react";
import Header from "../utils/Header";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import AdminProtected from "@/app/hooks/adminProtected";
import DashboardHero from "@/app/components/Admin/DashboardHero";

const page = () => {
  return (
    <div>
      <AdminProtected>
        <Header
          title="ELearning - Admin"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming, ReactJS"
        />
        <div className="flex h-[200vh]">
          <div className="15000px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
        </div>
        <div className="w-[100%]">
          <DashboardHero />
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
