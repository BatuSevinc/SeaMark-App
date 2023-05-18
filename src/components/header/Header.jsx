import Card from "react-bootstrap/Card";
import "./header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCashRegister, faCoins, faFileZipper, faListCheck, } from '@fortawesome/free-solid-svg-icons'
import Featured from "../featured/Featured";
import Info from '../info/Info'
const Header = () => {
  return (
    <div className="bg-gray headerContainer d-flex justify-content-center flex-column">
      <div className="d-flex flex-column flex-lg-row  align-items-lg-center container header py-5 my-5">
        <div className="flex-grow-1 ms-3">
          <p className="subtitle d-none d-lg-block">SEAMARK CONSULTANCY</p>
          <h1 className="title py-4 mt-5">Seamark Danışmanlık</h1>
          <p className="desc py-4">
            <b>SEAMARK</b> olarak güçlü bilgi birikimi ve derin endüstri
            uzmanlığına sahip profesyonellerden kurulu kadromuz ile özel, kamu
            ve sosyal sektörlerdeki kuruluşların kendileri için en önemli olan
            değişimi yaratmalarına yardımcı oluyoruz.
          </p>
        </div>
        <div className="flex-grow-1 headerImg">
          <img
            src="https://assets.website-files.com/6389eb61152f7ad2b7cab733/63d3cfa87a860264056aaf12_seamark-maidan-ofis.webp"
            alt=""
          />
        </div>
      </div>
      <section className="container sectionContainer pt-5">
        <p className="subtitle">NELER YAPIYORUZ ?</p>
        <span className="line-with-text d-none d-lg-block"></span>
        <div className="bg-light d-flex flex-wrap flex-lg-nowrap justify-content-center border rounded ">
          <Card border="light" style={{ width: "18rem" }}>
            <Card.Body className="border">
            <div className="m-4">
          <FontAwesomeIcon icon={faListCheck} className="border rounded-circle bg-gray p-3 fs-3"/>
            </div>
              <Card.Title>Yönetim <br /> Danışmanlığı</Card.Title>
              <Card.Text>
                Yönetim danışmanlığı, bir şirketin yönetim yapısını, işleyişini
                ve performansını iyileştirmeyi hedefleyen bir hizmettir.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light" style={{ width: "18rem" }}>
            <Card.Body className="border">
            <div className="m-4">
          <FontAwesomeIcon icon={faCoins} className="border rounded-circle bg-gray p-3 fs-3"/>
            </div>
              <Card.Title>Finansal <br /> Danışmanlık</Card.Title>
              <Card.Text>
                Finansal danışmanlık, bir şirketin finansal yapısını,
                performansını ve gelecekteki finansal hedeflerini
                gerçekleştirmeyi amaçlayan bir hizmettir.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light" style={{ width: "18rem" }}>
            <Card.Body className="border">
            <div className="m-4">
          <FontAwesomeIcon icon={faFileZipper} className="border rounded-circle bg-gray p-3 fs-3"/>
            </div>
              <Card.Title>Bütçe & Raporlama Danışmanlığı</Card.Title>
              <Card.Text>
                Bütçe ve Raporlama Danışmanlığı, bir organizasyonun finansal
                performansının izlenmesi ve analiz edilmesi için yapılan
                çalışmaları kapsar.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card border="light" style={{ width: "18rem" }}>
            <Card.Body className="border">
            <div className="m-4">
          <FontAwesomeIcon icon={faCashRegister} className="border rounded-circle bg-gray p-3 fs-3"/>
            </div>
              <Card.Title>Mevzuat ve Uyum Danışmanlığı</Card.Title>
              <Card.Text>
                Mevzuat ve Uyum Danışmanlığı, bir organizasyonun mevzuat ve
                yasalara uymasını sağlamak için yapılan çalışmalardır.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </section>
      <Featured/>
      <Info/>
    </div>
  );
};

export default Header;
