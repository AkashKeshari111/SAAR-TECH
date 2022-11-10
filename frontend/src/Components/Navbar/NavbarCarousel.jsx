import Carousel from 'react-bootstrap/Carousel';

function NavbarCarousel() {

  const carouselData =[
    {img:"https://uidesign.gbtcdn.com/GB/image/8823/electronics_1190x420_en.jpg"},
    {img:"https://uidesign.gbtcdn.com/GB/image/8823/en_1190x420.jpg?imbypass=true"},
    {img:"https://uidesign.gbtcdn.com/GB/image/8823/printer_1190x420_en.jpg"},
    {img:"https://uidesign.gbtcdn.com/GB/image/8823/home_1190x420_en.jpg"},
    {img:"https://uidesign.gbtcdn.com/GB/image/8823/ortur_master3_1190X420_en.jpg"},
    {img:"https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg"}

  ]

  return (
    <Carousel>
      {carouselData.map((e)=>(
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={e.img}
          alt="First slide"
        />
      </Carousel.Item>
      ))}
      
    </Carousel>
  );
}

export default NavbarCarousel;