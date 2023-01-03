import Carousel from 'react-bootstrap/Carousel';
import styles from "./Navbar.module.css"

function NavbarCarousel() {

  const carouselData =[
    {img:"https://www.gearbest.com/u_file/2212/12/photo/105254957714338494-195a.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_0,w_1920"},
    {img:"https://images-static.nykaa.com/uploads/d7032990-dc4a-48bb-b208-b568494ef069.jpg?tr=w-1200,cm-pad_resize"},
    {img:"https://images-static.nykaa.com/uploads/ef946f43-19e4-4228-bfbc-6a59a857c20f.jpg?tr=w-1200,cm-pad_resize"},
    {img:"https://images-static.nykaa.com/uploads/67162741-372d-4095-b7fd-ec3034549714.jpg?tr=w-1200,cm-pad_resize"},

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