import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Car() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.krungsricard.com/KrungsriCreditCard/media/html/Japan-Food_Desktop14-1200x1200.jpg" 
      className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Okonomiyaki</h5>
        <p>พิซซ่าญี่ปุ่นอีกเมนูเด็ดที่สายกินไม่ควรพลาด</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.krungsricard.com/KrungsriCreditCard/media/html/Japan-Food_Desktop13-1200x1200.jpg" 
      className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Oden</h5>
        <p>ใครอยากลองสรีตฟูดก็ต้องไม่พลาดที่จะไปยืนกินโอเด้ง</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.krungsricard.com/KrungsriCreditCard/media/html/Japan-Food_Desktop12-1200x1200.jpg" 
      className="d-block w-100"/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Ochazuke</h5>
        <p>อาหารพื้นบ้านญี่ปุ่นที่มีลักษณะคล้ายข้าวแช่ของไทย</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}