import Carousel from 'react-bootstrap/Carousel';
import styles from "./Navbar.module.css"

function NavbarCarousel() {

  const carouselData =[
    {img:"/carousel1.jpg"},
    {img:"/carousel2.avif"},
    {img:"/carousel3.webp"},
    // {img:"https://uidesign.gbtcdn.com/GB/image/8823/home_1190x420_en.jpg"},
    // {img:"https://uidesign.gbtcdn.com/GB/image/8823/ortur_master3_1190X420_en.jpg"},
    // {img:"https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg"}

  ]

  return (
    <Carousel  >
      {carouselData.map((e)=>(
        <Carousel.Item  >
        <img 
className={styles.carouselNavabr}
          // className="d-block w-100 h-100%"
      
          src={e.img}
          alt="First slide"
        />
      </Carousel.Item>
      ))}
      
    </Carousel>
  );
}

export default NavbarCarousel;