import React, { useEffect, useState } from "react";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import { styles } from '@/app/styles/style';

const EditFaq = () => {
  const [questions, setQuestions] = useState([]);
  const { data, refetch } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (data) {
      setQuestions(data.layout.faq);
    }
  }, [data]);

  const toggleQuestion = () => {};

  const handleQuestionChange = () => {

  }

  return (
    <>
      <div className="w-[90%] 800px:w-[80%] m-auto mt-[120px]">
        <div className="mt-12">
          <dl className="space-y-8">
            {questions.map((item) => (
              <div
                key={item.id}
                className={`${
                  item._id !== questions[0]._id && "border-t"
                } border-gray-200 pt-6`}
              >
                <dl className="text-lg">
                  <button
                    className="flex items-start dark:text-white text-black justify-between w-full text-left focus:outline-none"
                    onClick={() => toggleQuestion(item._id)}
                  >
                    <input
                      className={`${styles.input} border-none`}
                      value={item.questions}
                      onChange={(e) => handleQuestionChange(item._id, e.target.value)}
                    />
                  </button>
                </dl>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default EditFaq;
