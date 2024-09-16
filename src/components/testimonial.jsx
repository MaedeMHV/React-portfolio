import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "./data/projectList";

export default function Testimonial() {
   
  
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true, 
        // centerPadding: "50px", 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

  return (
    <section id="testimonial" className="xl:ml-72 xl:w-[77%] h-[500px] pt-16 overflow-hidden">
           <div className="flex flex-col items-center">
      {/* Centered Title */}
      <h2 className="titleOne">Testimonial</h2>

      {/* Centered Underline */}
      <div className="underline"></div>
    </div>
          
    <div className="mt-20">
      <Slider {...settings}>
        {testimonials.map((testimonial, idx) => (
          <div key={idx} >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="absolute rounded-full border-4 border-white -top-14 left-1/2 transform -translate-x-1/2 w-24 h-24 object-cover"
              />
            <h3 className="text-lg  mt-5 text-center  font-semibold">{testimonial.name}</h3>
            <p className="text-sm mt-2 text-center">{testimonial.review}</p>
          </div>
        ))}
      </Slider>
    </div>
    </section>
  );
}
