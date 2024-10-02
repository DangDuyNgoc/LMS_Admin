"use client";
import React, { useState, useEffect } from "react";
import CourseInformation from "./CourseInformation";
import CourseOptions from "./CourseOptions";
import CoursePreview from './CoursePreview';
import CourseContent from './CourseContent';

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
      videoSection: "Untitled Section",
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

  const handleSubmit = async () => {

  }

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

  const handleCourseCreate = async () => {
    const data = courseData;

  }

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
          <CourseContent
            courseContentData={courseContentData}
            setCourseContentData={setCourseContentData}
            active={active}
            setActive={setActive}
            handleSubmit={handleSubmit}
          />
        )}

        {active === 2 && (
          <CoursePreview
            active={active}
            setActive={setActive}
            courseData={courseData}
            handleCourseCreate={handleCourseCreate}
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
