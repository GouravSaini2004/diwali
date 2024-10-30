// import { useState } from "react"


// function App() {

//   const [color ,setColor]= useState("olive")
  
//   return (
//     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//         <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-2xl ">
//           <button 
//           onClick={() =>(setColor("red"))}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "red"}}>
//             red
//           </button>
//           <button 
//           onClick={() =>(setColor("green"))}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "green"}}>
//             green
//           </button>
//           <button 
//           onClick={() =>(setColor("blue"))}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "blue"}}>
//             blue
//           </button>
//           <button 
//           onClick={() =>(setColor("yellow"))}
//           className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor: "yellow"}}>
//             yellow
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

// App.js
// App.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const wishes = [
    {
      text: "Wishing you a Diwali full of joy and prosperity!",
      img: "https://i.pinimg.com/originals/a8/2b/66/a82b6647451a1119ce269e1b7beb586a.jpg", // Replace with your image URL
    },
    {
      text: "May this Diwali light up your life with happiness and success.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJEZ4rKjDVwnlUdmnYy0nguwYYrt26gfkBJg&s", // Replace with your image URL
    },
    {
      text: "Happy Diwali! May your life be as colorful as the lights of Diwali.",
      img: "https://t3.ftcdn.net/jpg/09/58/26/42/360_F_958264245_hxL0uU1KoTaefpOJ1L3c0HghmbOGeYpW.jpg", // Replace with your image URL
    },
    {
      text: "Wishing you and your family a very happy and prosperous Diwali!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwG_k-5BF5JFMywnzQNonK1xbflofSw1uwMw&s", // Replace with your image URL
    },
    {
      text: "",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp222J37w12TiJ_WyEQRTdPa7Fywlcpf86zw&s", // Replace with your image URL
    },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    
      <Slider {...settings} className="h-screen w-screen mt-1">
        {wishes.map((wish, index) => (
          <div key={index} className="h-full w-full">
            <div
              className="relative w-full h-screen rounded-lg shadow-lg overflow-hidden"
              style={{ backgroundImage: `url(${wish.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h2 className="text-xl font-semibold text-white text-center p-4">{wish.text}</h2>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    
  );
}

export default App;
