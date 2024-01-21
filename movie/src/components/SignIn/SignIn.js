import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { google  ,facebook, fa3 } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from "react-router-dom";
import  axios from 'axios'
import { useState } from "react";
function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassWord] = useState('')
  const [data, setData] = useState()
  const navigate = useNavigate();
  const login = () => {
      axios.post('https://movie-back-end-yhp8.onrender.com/user', {
      
          email: email,
          password: password
        
      })
      .then(res => {
          if (res.status === 200) {
            localStorage.setItem('user', JSON.stringify(res.data))
              navigate("/")
          }
          else {
            alert(res.data)
          }
        
      })
  }
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
          <div className="text-red-400 text-xl font-bold mt-4">
            movie Trailer
          </div>
          <div className="px-11 mt-28">
            <h1 className="text-white font-bold text-2xl mb-5">Welcome back</h1>
            <p className="text-white mb-5">Enter your detail</p>
            <input
              className="py-2 w-full rounded-md px-2 mb-2 outline-none"
              placeholder="Enter your email"
              type="email"
              onChange={(value) => setEmail(value.target.value)}
            />
            <input
              className="py-2 w-full rounded-md px-2 mb-2 outline-none"
              placeholder="Enter your password"
              type="password"
              onChange={(value) => setPassWord(value.target.value)}
            />
            <button className="text-white w-full bg-orange-800 py-3 rounded-md font-bold" onClick={login}>
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
          <p className="text-white">You don't have account?  <Link to='/register' className="text-blue-700"> CLick here!</Link></p>

          </div>
        </div>
      </div>
    );
}

export default SignIn;