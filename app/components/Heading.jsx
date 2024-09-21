import React from "react";
import { ThemeSwitcher } from "@/app/utils/ThemeSwitcher";
import Signup from './Auth/Signup';
import Login from './Auth/Login';

const Heading = ({ open, setOpen }) => {
  return (
    <div className="w-full flex items-center justify-end p-6 fixed right-0 z-[9999999]">
      <ThemeSwitcher />
      <Signup />
    </div>
  );
};

export default Heading;
