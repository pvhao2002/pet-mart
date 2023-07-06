import React from "react";
import HeaderAdmin from "../header/index.admin";
import ContentFeedback from "../content/feedback.admin";
import { useNavigate } from "react-router-dom";

function Feedback() {
  return (
    <div>
      <HeaderAdmin />
      <ContentFeedback />
    </div>
  );
}

export default Feedback;
