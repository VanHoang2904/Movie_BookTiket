import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(false)
  const [password, setPassWord] = useState("");
  const [name, setName] = useState("");
  const [rePassWord, setRePassWord] = useState("");
  const [checkPass, setCheckPass] = useState(false);
  const register = () => {
    if (rePassWord === password) {
      setCheckPass(false);
      axios
        .post("https://movie-back-end-yhp8.onrender.com/user/register", {
          name,
          email,
          password,
        })
        .then(function (response) {
          if (response.status === 200) {
            alert("Đăng ký thành công");
          }
          else if (response.status === 201) {
            alert("Đăng ký thất bại");

            setCheckEmail(true)
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      setCheckPass(true);
      console.log(checkPass);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full">
        <img
          src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col bg-blue-gray-900">
        <div className=" mt-4">
          <h1 className="text-red-400 text-xl font-bold mb-1">movie Tralier</h1>
          <h1 className="text-white text-xl">Đăng ký</h1>
        </div>
        <div className="px-11 mt-16">
          <input
            className="py-2 w-full rounded-md px-2 mb-5 outline-none"
            placeholder="Enter your name"
            type="text"
            onChange={(value) => setName(value.target.value)}
          />
          {checkEmail ? <p className="text-red-500 mb-2 text-left text-sm">
              Email đã tồn tại
            </p>
          : 
            ""
          }
          <input
            className="py-2 w-full rounded-md px-2 mb-7 outline-none"
            placeholder="Enter your email"
            type="email"
            onChange={(value) => setEmail(value.target.value)}
          />
          <input
            className="py-2 w-full rounded-md px-2 mb-7 outline-none"
            placeholder="Enter your password"
            type="password"
            onChange={(value) => setPassWord(value.target.value)}
          />
          <input
            className="py-2 w-full rounded-md px-2 mb-5 outline-none"
            placeholder="Enter repeat your password"
            type="password"
            onChange={(value) => setRePassWord(value.target.value)}
          />
          {checkPass ? (
            <p className="text-red-500 mb-2 text-left text-sm">
              Xác nhận mật khẩu không chính xác
            </p>
          ) : (
            ""
          )}
          <button
            className="text-white w-full bg-orange-800 py-3 rounded-md font-bold"
            onClick={() => {
              register();
            }}
          >
            Continue
          </button>
          <div className="w-full border-solid border-2 border-black relative mt-10">
            <div className="absolute bg-blue-gray-900 -top-3 left-1/2 -translate-x-1/2 w-10 text-white">
              OR
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-10 px-11">
          <button className="text-black w-full bg-white mb-4 py-4 rounded-xl hover:bg-orange-800 hover:text-white font-bold">
            Continue With Google
          </button>

          <div className="flex">
            <button className="text-black w-full bg-white mb-4 py-4 rounded-xl hover:bg-orange-800 hover:text-white font-bold">
              Continue With Facebook
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-white">
            You have account?{" "}
            <Link to="/login" className="text-blue-700">
              {" "}
              CLick here!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
