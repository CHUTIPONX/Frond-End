import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cards() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://www.krungsricard.com/KrungsriCreditCard/media/html/Japan-Food_Desktop1-1200x1200.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Sushi</h5>
              <p className="card-text">
              ถ้านึกถึงอาหารญี่ปุ่นยอดนิยม ก็ต้องเมนูซูชิที่ทุกคนรู้จักกันเป็นอย่างดีนี่แหละ ซึ่งก็มีอยู่หลายประเภท โดยจะนำข้าวปรุงรสปั้นเป็นก้อนหรือนำไปห่อสาหร่าย มาโปะด้วยเนื้อสัตว์และผักต่าง ๆ
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://www.krungsricard.com/KrungsriCreditCard/media/html/Japan-Food_Desktop3-1200x1200.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Sashimi</h5>
              <p className="card-text">
              ด้วยภูมิศาสตร์ประเทศญี่ปุ่นนั้นมีทะเลอยู่ล้อมรอบ ทำให้มีจุดเด่นอยู่ที่อาหารทะเลอย่างเมนูซาชิมิ ที่นำเนื้อปลาสดใหม่ มาแร่เป็นชิ้นบางพอดีคำ เข้าปากคำไหนก็ฟิน หวานอร่อย ไม่คาวเลยแม้แต่นิดเดียว
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="card">
            <img
              src="https://www.krungsricard.com/KrungsriCreditCard/media/html/Japan-Food_Desktop4-1200x1200.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Tonkatsu</h5>
              <p className="card-text">
              คนเลิฟของทอด ของกินเล่นญี่ปุ่นต้องถูกใจสิ่งนี้ กับเมนูทงคัตสึที่นำหมูหมักไปหั่นเป็นแผ่น แล้วนำไปชุบแป้งและเกล็ดขนมปัง ทอดจนกรอบนอกนุ่มใน สีสันสวยงาม ราดซอสสูตรเด็ดฉ่ำ ๆ ยิ่งทานกับข้าวสวยร้อน ๆ 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}