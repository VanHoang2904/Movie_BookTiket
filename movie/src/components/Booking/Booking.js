import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
function Booking() {
  const {id, title, name, address, showtime} = useParams();
  const [current, setCurrent] = useState([])
  const [total, setTotal] = useState(0)
  const [user, setUser] = useState()
  const [click, setClick] = useState(false)
  const [movie, setMovie] = useState()
  const navigate = useNavigate()
 
  const chair = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
    console.log(user)
    
  }, [])
  const order = (idMovie, name, address, chair ) => {
    if (user) {
      console.log(user)
      const headers = {
        'Content-Type': 'application/json', // Đặt kiểu dữ liệu gửi đi (ví dụ: application/json)
        'token': `Bearer ${user.accessToken}`, // Đặt header Authorization với giá trị token
      };
      axios
        .patch("https://movie-back-end-yhp8.onrender.com/user/order", 
        
       {
          
          id: user._id,
          idMovie,
          name,
          address,
          chair,
        },
        {
          headers
        }
       )
        .then((res) => {
          console.log(res)
          if (res.data.status === 403) {
            console.log("Đăng nhập lại")
            alert("Vui lòng đăng nhập lại");
            localStorage.clear();
            setUser()
            navigate("/login")
          }
          else if (res.status === 301) {
            navigate("/login")
          }
          else alert("Đặt vé thành công")
        })
        .catch(error => console.log(error))  
        
    } else {
      navigate("/login");
    }
  }
  const getMovie =async (id) => {
    axios
      .get(`https://movie-back-end-yhp8.onrender.com/movie/${id}`)
      .then((res) => setMovie(res.data));
  }
  return (
    <div className="pt-16 px-4">
      <div className="flex mt-3">
        <h1
          onClick={() => {
            setClick(false);
          }}
          className={`pb-3 text-black mr-8 cursor-pointer ${
            click === false &&
            "border-2  border-solid border-b-blue-500 border-t-transparent border-l-transparent border-r-transparent  text-blue-500"
          }`}
        >
          01. Chọn ghế & đặt vé
        </h1>
        <h1
          onClick={() => {
            setClick(true);
          }}
          className={`pb-3 text-black mr-8 cursor-pointer  ${
            click &&
            "border-solid border-b-blue-500 border-2  border-t-transparent border-l-transparent border-r-transparent text-blue-500"
          }`}
        >
          02. Kết quả đặt vé
        </h1>
      </div>
      {click === false ? (
        <div className="flex justify-start">
          <div className="mx-8 w-2/3">
            <div className="shadow-2xl relative w-full border-20 border-solid border-t-transparent border-r-transparent border-b-red-600 border-l-transparent">
              <div className="absolute left-1/2 -translate-x-1/2 text-white">
                Màn hình
              </div>
            </div>
            <div className="text-white w-full mt-4 flex flex-wrap">
              {chair.map((item, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      if (current.includes(index)) {
                        setCurrent(
                          current.filter((element) => element !== index)
                        );
                        setTotal(total - 45000);
                      } else {
                        setCurrent([...current, index]);
                        setTotal(total + 45000);
                      }
                    }}
                    className={`w-8 h-8 ${
                      current.includes(index) ? "bg-black" : "bg-red-500"
                    } cursor-pointer rounded-lg mx-3 my-3`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-between mt-4">
              <div className="flex flex-col items-center">
                <div>Ghế đã đặt</div>
                <div className="w-8 h-8 bg-gray-500  rounded-lg mx-3 my-3"></div>
              </div>
              <div className="flex flex-col items-center">
                <div>Ghế thường</div>
                <div className="w-8 h-8 bg-red-500 rounded-lg mx-3 my-3"></div>
              </div>
              <div className="flex flex-col items-center">
                <div>Ghế Vip</div>
                <div className="w-8 h-8 bg-yellow-500 rounded-lg mx-3 my-3"></div>
              </div>
              <div className="flex flex-col items-center">
                <div>Ghế đang chọn</div>
                <div className="w-8 h-8 bg-black rounded-lg mx-3 my-3"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 ml-3 items-start">
            <div className="text-red-500 font-bold text-xl border-t-transparent border-l-transparent border-r-transparent pb-3 w-full px-3 border-2 border-solid">
              {total} VND
            </div>
            <div className="text-start py-4 border-t-transparent border-l-transparent border-r-transparent w-full border-2 border-solid">
              <div className="font-bold uppercase mb-2">{title}</div>
              <div className="mb-2">Tên rạp: {name}</div>
              <div className="mb-2">Địa chỉ: {address}</div>
              <div className="mb-2">Ngày chiếu: {showtime}</div>
            </div>
            <div className="py-4 border-t-transparent border-l-transparent border-r-transparent w-full text-start border-2 border-solid">
              Ghế: <br />
              <div className="flex">
                {current.map((item) => {
                  return (
                    <p key={item} className="mr-2">
                      {item + 1}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="py-4 border-t-transparent border-l-transparent border-r-transparent w-full text-start border-2 border-solid">
              Email: <br /> {user && user.email}
            </div>
            <div className="py-4 border-t-transparent border-l-transparent border-r-transparent w-full text-start border-2 border-solid">
              Phone: <br />
            </div>

            <button
              onClick={() => {
                order(id, name, address, current);
              }}
              className="bg-orange-500 text-bold text-xl uppercase text-white py-4 px-10 w-full"
            >
              Đặt Vé
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <h1 className="text-2xl ">Lịch sử đặt vé xem phim</h1>
          <div className="flex flex-wrap">
            {
              user &&
               user.orderDetail.map( (tikcet) => {
              
                return (
                  <div className="px-2 w-1/3 py-2">
                    <div className="border-2 border-solid border-black w-full flex items-center py-3 px-2">
                      <div className="w-20 h-20 overflow-hidden">
                        <img
                          className="rounded-full object-cover w-full h-full"
                          src="https://kenh14cdn.com/2018/8/14/3892646619320862101920633452533710274953216n-1534255397475538002738.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col items-start ml-2">
                        <div className="font-bold">Mã vé: {tikcet.idOrder}</div>
                        <div className="font-bold">{
    getMovie(tikcet.idMovie) && movie?.title}</div>
                        <div className="font-bold">{tikcet.name.length > 20 ? tikcet.name.split(0, 20) : tikcet.name}</div>
                        <div>Ngày đặt</div>
                        <div>Thời lượng: 120p</div>
                        <div className='text-start flex'>
                          Ghế: {tikcet.chair.map((chair) => {
                            return <p className='mr-2'>{chair}</p>;
                          })}
                         
                        </div>
                        <div>
                          Tình trạng:{" "}
                          {tikcet.situation ? "Đã xác nhận" : "Chưa xác nhận"}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Booking;
