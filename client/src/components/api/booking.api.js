import axiosClient from "./axiosClient";

const bookingAPI = {
  getAllBooking: () => {
    return axiosClient.get("/booking/list");
  },
  createBooking: (data, navigate) => {
    axiosClient
      .post("/booking/create", data)
      .then((res) => {
        alert("Booking successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

export default bookingAPI;
