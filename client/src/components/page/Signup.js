import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Footer from "../footer";
import Header from "../header";
import { useState } from "react";
import { paste } from "@testing-library/user-event/dist/paste";
import userAPI from "../api/userAPI";

function Signup() {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // [phone, setPhone]
  const [password, setPass] = useState("");
  const [repeatPassword, setRepeatPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      email: email,
      phone: phone,
      password: password,
      repeatPassword: repeatPassword,
    };
    try {
      await userAPI.register(user, navigate);
    } catch (error) {}
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center mt-[60px] mb-[260px] text-[18px] max-sm:text-[16px] max-sm:w-screen max-sm:pl-[20px] pr-[30px]">
        <div className="font-bold text-[200%] mb-[40px]">ĐĂNG KÝ</div>
        <form action="" method="POST" id="form-1" className="">
          <div className="mb-3">
            Các trường được đánh dấu{" "}
            <span className="text-[#e80000] text-[100%] font-extrabold">*</span>{" "}
            là bắt buộc
          </div>
          <div className="mb-[25px]">
            <label htmlFor="user" className="text-[100%] font-semibold">
              Tên đăng nhập
              <span className="text-[#e80000] font-extrabold">*</span>
            </label>
            <br />
            <input
              id="user"
              placeholder="User123"
              value={username}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require"
              required
            ></input>
            <div className="form-message"></div>
          </div>
          <div className="mb-[25px]">
            <label htmlFor="email" className="text-[100%] font-semibold">
              Email
            </label>
            <br />
            <input
              placeholder="User@domain.com"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              onError={(e) => {
                "Tài khoản đã tồn tại";
              }} // handle error
              className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999]"
            ></input>
            <div className="form-message"></div>
          </div>
          <div className="mb-[25px]">
            <label htmlFor="tel" className="text-[100%] font-semibold">
              Số điện thoại
              <span className="text-[#e80000] font-extrabold">*</span>
            </label>
            <br />
            <input
              id="tel"
              placeholder="#### ### ###"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              type="tel"
              // onBlur={handleBlur}
              className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require"
            ></input>
            <div className="form-message"></div>
          </div>
          <div className="mb-[25px]">
            <label htmlFor="password" className="text-[100%] font-semibold">
              Mật khẩu<span className="text-[#e80000] font-extrabold">*</span>
            </label>
            <br />
            <input
              id="password"
              placeholder="******"
              type="password"
              value={password}
              onChange={(e) => setPass(e.target.value)}
              required
              className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require"
            ></input>
            <div className="form-message"></div>
          </div>
          <div className="mb-[25px]">
            <label
              htmlFor="confirm-password"
              className="text-[100%] font-semibold"
            >
              Nhập lại mật khẩu
              <span className="text-[#e80000] font-extrabold">*</span>
            </label>
            <br />
            <input
              id="confirm-password"
              placeholder="******"
              required
              value={repeatPassword}
              onChange={(e) => setRepeatPass(e.target.value)}
              type="password"
              className="border max-sm:w-[100%] py-3 w-[500px] pl-3 outline-none focus:outline-[#999999] require"
            ></input>
            <div className="form-message"></div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              Bạn đã có tài khoản?
              <Link
                to="/Login"
                className="hover:font-medium text-[#e80000] mr-[10px]"
              >
                Đăng nhập
              </Link>
            </div>
            <div
              id="submit"
              className="flex rounded border w-32 h-14 text-white bg-black hover:bg-blue-600 hover:cursor-pointer ease-in duration-150 transition-colors"
              onClick={handleSubmit}
            >
              <input type="submit" value="Đăng ký" className=" m-auto" />
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
export default Signup;
