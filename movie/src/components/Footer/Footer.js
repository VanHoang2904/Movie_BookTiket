function Footer() {
    return (
      <div className="">
        <div className="relative h-80">
          <img
            src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            alt="footer"
            className="w-full h-full object-cover"
          />
          <div className="w-full h-full absolute bg-black bg-opacity-45 top-0"></div>
          <div className="absolute top-1/2 flex -translate-y-1/2 left-1/2 -translate-x-1/2">
            <ul className="text-white text-left text-xl">
              <li className="mb-2 cursor-pointer hover:text-red-500">Home</li>
              <li className="mb-2 cursor-pointer hover:text-red-500">Contact Us</li>
              <li className="mb-2 cursor-pointer hover:text-red-500">Term of services</li>
              <li className="mb-2 cursor-pointer hover:text-red-500">About us</li>
            </ul>
            <ul className="text-white text-left text-xl mr-32 ml-32">
              <li className="mb-2 cursor-pointer hover:text-red-500">Home</li>
              <li className="mb-2 cursor-pointer hover:text-red-500">Contact Us</li>
              <li className="mb-2 cursor-pointer hover:text-red-500">Term of services</li>
              <li className="mb-2 cursor-pointer hover:text-red-500">About us</li>
            </ul>
            <ul className="text-white text-left text-xl">
              <li className="mb-2 cursor-pointer hover:text-red-500">Home</li>
              <li className="mb-2 cursor-pointer hover:text-red-500">Contact Us</li>
              <li className="mb-2 cursor-pointer hover:text-red-500">Term of services</li>
              <li className="mb-2 cursor-pointer hover:text-red-500">About us</li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Footer;