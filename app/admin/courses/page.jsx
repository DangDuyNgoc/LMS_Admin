"use client";
import React from "react";
import AdminSidebar from "./../../components/Admin/sidebar/AdminSidebar";
import { AdminProtected } from "@/app/hooks/adminProtected";
import { Header } from "@/components/header/header";
import { DashboardHero } from "@/app/components/Admin/DashboardHero";

const page = () => {
  return (
    <div>
      <AdminProtected>
        <Header
          title="ELearning - Admin"
          description="ELearning is a platform for students to learn and get help from teachers"
          keywords="Programming, ReactJS"
        />
        <div className="flex h-screen">
          <div className="15000px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
        </div>
        <div className="w-[85%]">
          <DashboardHero />
        </div>
      </AdminProtected>
    </div>
  );
};

export default page;
