import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Slider() {
    

    return ( 
        <Carousel className="overflow-hidden bg-black mb-10">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image1"
              className="h-full w-full object-contain"
            />
            <div className="absolute h-full w-2/5 top-1/3 z-8 left-20">
              <h1 className="text-white font-bold text-start text-2xl">
                fadjfadjsklfjakdjf
              </h1>
              <div className="w-full mt-5">
                <div className="text-white max-w-full break-words text-left">
                  fajdkfjakdjfkdjfkjdkjfkdjsfkjadksjfakdjsfkajdskfjadksjfadjfjdjfakdjfkajdkfljkasdjfakjsdfkjadsfkjdkjffajdkfjakdjfkdjfkjdkjfkdjsfkjadksjfakdjsfkajdskfjadksjfadjfjdjfakdjfkajdkfljkasdjfakjsdfkjadsfkjdkjffajdkfjakdjfkdjfkjdkjfkdjsfkjadksjfakdjsfkajdskfjadksjfadjfjdjfakdjfkajdkfljkasdjfakjsdfkjadsfkjdkjf


                </div>
              </div>
              <div className='flex mt-5 justify-evenly'>
                <Link to='/movie' className='text-white border-solid border-white border-2 py-3 w-36 rounded-3xl hover:bg-red-500 hover:border-red-500 shadow-xl hover:shadow-red-300'>Xem Trailer</Link>
                <Link to ='/mylist' className='text-white border-solid border-white border-2 py-3 w-36 rounded-3xl hover:bg-red-500 hover:border-red-500 shadow-xl hover:shadow-red-300'>Đặt vé</Link>
              </div>
             
            </div>
            <div className='absolute w-3/12 right-24 top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden'>
                <img className = "w-full h-full object-cover" src='https://png.pngtree.com/background/20230612/original/pngtree-movie-action-a-shot-with-stunning-explosion-dynamic-light-picture-image_3176880.jpg'  alt='poster'/>
              </div>
          </div>
          <img
            src="https://cdn.smartslider3.com/wp-content/uploads/2021/06/movie.jpg"
            alt="image2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image3"
            className="h-full w-full object-cover"
          />
        </Carousel>
     );
}

export default Slider;