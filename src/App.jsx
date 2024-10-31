
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const wishes = [
    {
      text: "Haan byyy mittar!!",
      img: "https://i.pinimg.com/originals/a8/2b/66/a82b6647451a1119ce269e1b7beb586a.jpg", // Replace with your image URL
    },
   
    {
      text: "kya hal han!",
      img: "https://t3.ftcdn.net/jpg/09/58/26/42/360_F_958264245_hxL0uU1KoTaefpOJ1L3c0HghmbOGeYpW.jpg", // Replace with your image URL
    },
    {
      text: "happy Diwali!",
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
