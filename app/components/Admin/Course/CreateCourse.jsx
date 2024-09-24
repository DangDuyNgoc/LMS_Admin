"use client";
import React, { useState, useEffect } from "react";
import CourseInformation from "./CourseInformation";
import CourseOptions from "./CourseOptions";

const CreateCourse = () => {
  const [active, setActive] = useState(0);
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: "",
    categories: "",
    tag: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });

  const [courseContentData, setCourseContentData] = useState([
    {
      videoUrl: "",
      title: "",
      description: "",
      videoSection: "",
      links: [
        {
          title: "",
          url: "",
        },
      ],
      suggestion: "",
    },
  ]);

  const [courseData, setCourseData] = useState({});

  useEffect(() => {
    const data = {
      name: courseInfo.name,
      description: courseInfo.description,
      price: courseInfo.price,
      categories: courseInfo.categories,
      tag: courseInfo.tag,
      level: courseInfo.level,
      demoUrl: courseInfo.demoUrl,
      thumbnail: courseInfo.thumbnail,
    };

    setCourseData(data);
  }, [courseInfo]);

  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
          <CourseInformation
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}

        {active === 1 && (
          <CourseData
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <CourseOptions active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default CreateCourse;
