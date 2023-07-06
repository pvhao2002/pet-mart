import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bookingAPI from "../api/booking.api";

const ContentBooking = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const bookingList = await bookingAPI.getAllBooking();
        console.log(bookingList);
        setBookings(bookingList);
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
      <div className="w-full p-6 flex flex-col gap-6 justify-center items-center">
        <h1 className="text-3xl font-bold">Danh sách đặt lịch</h1>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-center">
            <thead className="border-b bg-gray-800">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-white px-6 py-4"
                >
                  Dịch vụ
                </th>
                <th
                  scope="col"
                  className="text-sm font-lg text-white px-6 py-4"
                >
                  Họ tên
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
                  Địa chỉ
                </th>
                <th
                  scope="col"
                  className="text-sm font-lg text-white px-6 py-4"
                >
                  Ngày đặt
                </th>
                <th
                  scope="col"
                  className="text-sm font-lg text-white px-6 py-4"
                >
                  Ghi chú
                </th>
              </tr>
            </thead>
            <tbody className="border-black border-b-2">
              {bookings.length > 0 ? (
                bookings.map((booking, index) => (
                  <tr className="bg-white border-b-2 border-black">
                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {booking.serviceName}
                    </td>
                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {booking.fullname}
                    </td>
                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {booking.phone}
                    </td>
                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {booking.phone}
                    </td>
                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {booking.address}
                    </td>
                    <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                      {booking.dateBooking}
                    </td>
                    <td
                      className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap max-w-xs"
                      title={booking.note}
                    >
                      <div className="truncate">{booking.note}</div>
                    </td>
                  </tr>
                ))
              ) : (
                <p>No booking found.</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContentBooking;
