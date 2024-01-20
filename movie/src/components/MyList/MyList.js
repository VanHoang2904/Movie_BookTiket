import Movie from "../Movie/Movie";

function MyList() {
    return ( 
        <div className="w-full bg-black">
          <div className="relative">
          <img
            src="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            alt="footer"
            className="w-full h-40 object-cover"
          />
          <div className="w-full h-full absolute top-0 bg-black bg-opacity-60"></div>
          </div>
          <div className="bg-black pt-10 pb-10">
            <div className="flex justify-between items-center">
            <h1 className="text-white text-left ml-5 text-2xl ">My List</h1>
            <div className="flex">
            <input className="rounded-lg border-none outline-none px-4 bg-blue-gray-900 text-white" placeholder="Tìm kiếm" />
            <button className="bg-orange-700 text-white ml-4 px-5 rounded-lg py-1 mr-6 font-bold hover:shadow-4">Tìm kiếm</button>
            </div>
            </div>
            <Movie/>
          </div>
        </div>
     );
}

export default MyList;