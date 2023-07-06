import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import feedbackApi from "../api/feedback.api";

const ContentFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const feedbackList = await feedbackApi.getFeedbacks(navigate);
        console.log(feedbackList.allFeedback);
        setFeedbacks(feedbackList.allFeedback);
      } catch (error) {
        console.error(error);
      }
    };
    getFeedbacks();
  }, []);
  const handleMouseEnter = (event) => {
    const tooltip = event.target.nextSibling;
    if (tooltip) {
      tooltip.classList.add("opacity-100");
    }
  };

  const handleMouseLeave = (event) => {
    const tooltip = event.target.nextSibling;
    if (tooltip) {
      tooltip.classList.remove("opacity-100");
    }
  };

  return (
    <>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-2">
        <h1 className="text-3xl font-bold">Danh sách góp ý</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-4 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        Họ và tên
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Số điện thoại
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Lời nhắn
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {Array.isArray(feedbacks) ? (
                      feedbacks.map((feedback, index) => (
                        <tr className="bg-white border-b-2 border-black">
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {feedback.fullname}
                          </td>

                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {feedback.phone}
                          </td>
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {feedback.email}
                          </td>
                          <td
                            className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap max-w-sm"
                            title={feedback.content}
                          >
                            <div className="truncate">{feedback.content}</div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <p>No feedback found.</p>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentFeedback;
