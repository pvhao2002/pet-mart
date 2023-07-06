import axiosClient from "./axiosClient";

const feedbackApi = {
  getFeedbacks: () => {
    return axiosClient.get("/feedback/list");
  },
  createFeedback: (data, navigate) => {
    axiosClient
      .post("/feedback/create", data)
      .then((res) => {
        console.log(res);
        alert("Feedback created successfully");
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            alert("Please login to create feedback");
            navigate("/login");
          }
        } else {
          console.log("Network error:", err);
        }
      });
  },
};

export default feedbackApi;
