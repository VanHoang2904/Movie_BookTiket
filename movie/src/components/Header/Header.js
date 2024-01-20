import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell, faUser } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [isScroll, setIsScroll] = useState(false) 
    const [checkUrl, setCheckUrl] = useState(false)
    const [user, setUser] = useState()
    window.addEventListener('scroll', () => {
       if (window.scrollY > 16) setIsScroll(true)
       else setIsScroll(false)
    })

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')))
  }, [])
  const signOut = () => {
      setUser();
      localStorage.removeItem('user')
  }
    return (
      <div>
        <div
          className={`w-full h-14 bg-${
            isScroll || window.location.href.includes('/booking') ? "black" : "transparent"
          } flex items-center pl-3 fixed z-10`}
        >
          <div className="flex items-center flex-1">
            <Link to = "/" className="text-xl text-white mr-5 font-bold">
              bookTicket
            </Link>
            <Link to="/" className="text-white mr-5 font-bold">
              Trang chủ
            </Link>
            <a href='#phim' className="text-white mr-5 font-bold">Phim</a>
            <a href="#cinema" className="text-white mr-5 font-bold">
              Cụm rạp
            </a>
            <Link to = '/mylist' className="text-white mr-5 font-bold">Tin tức</Link>
          </div>
          <div className="flex flex-1 justify-end pr-3 items-center">
            {/* <FontAwesomeIcon
              className="ml-5"
              icon={faMagnifyingGlass}
              size="xl"
              color="white"
            /> */}
            <FontAwesomeIcon
              className="ml-5"
              icon={faBell}
              size="xl"
              color="white"
            />
            {user ? 
            <div className='flex justify-center items-center text-white'>
              <h1 className='mr-3 ml-3'>{user.name}</h1>
              <button className='border-2 border-solid border-red-500 px-3 py-2 rounded-xl hover:bg-white hover:text-black' onClick={() => {signOut()}}>Đăng xuất</button>
            </div>
            : <Link to="/login">
              <FontAwesomeIcon
                className="ml-5"
                icon={faUser}
                size="xl"
                color="white"
              />
            </Link>}
          </div>
        </div>
      </div>
    );
  }