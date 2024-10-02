import React from "react";
import CoursePlayer from "../../../utils/CoursePlayer";
import { styles } from "@/app/styles/style";

const CoursePreview = ({ courseData, handleSubmit, active, setActive }) => {
  const discountPercent =
    ((courseData?.estimatedPrice - courseData?.price) /
      courseData?.estimatedPrice) *
    100;
  const discount = discountPercent.toFixed(0);

  return (
    <div className="w-[90%] m-auto py-5 mb-5">
      <div className="w-full relative">
        <div className="w-full mt-10">
          <CoursePlayer
            videoUrl={courseData?.demoUrl}
            title={courseData?.title}
          />
        </div>

        <div className="flex items-center">
          <h1 className="pt-5 text-[25px]">
            {courseData?.price === 0 ? "Free" : courseData?.price + "$"}
          </h1>
          <h5 className="pl-3 text-[20px] mt-2 line-through opacity-80">
            {courseData?.estimatedPrice}$
          </h5>
          <h5 className="pl-5 pt-4 text-[22px]">{discount}% OFF</h5>
        </div>

        <div className="flex items-center">
          <div
            className={`${styles.button} !w-[180px] my-3 font-Poppins !bg-[crimson] cursor-not-allowed`}
          >
            Buy Now {courseData?.price}$
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Discount code....."
            className={`${styles.input} 1500px:!w-[50%] 1100px:w-[60%] ml-3 !mt-0`}
          />
          <div
            className={`${styles.button} !w-[120px] my-3 ml-4 font-Poppins cursor-pointer`}
          >
            Apply
          </div>
        </div>
        <p className="pb-1">• Source code included</p>
        <p className="pb-1">• Full lifetime access</p>
        <p className="pb-1">• Certificate of completion</p>
        <p className="pb-3 800px:pb-1">• Premium Support</p>
      </div>
      
      <div></div>
    </div>
  );
};

export default CoursePreview;
