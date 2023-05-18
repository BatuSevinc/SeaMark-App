import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import "./infoLeft.css";
const InfoLeft = () => {
  return (
    <div className="container rounded infoLeft mt-5">
      <Card className="container d-flex bg-gray sticky-md-top infoLeftCard" style={{ width: "100%" }}>
        <Card.Img
          className="mx-auto mt-4 rounded"
          style={{ width: "90%" }}
          variant="top"
          src="https://assets.website-files.com/6389eb61152f7ad2b7cab733/63d3cfa87a860264056aaf12_seamark-maidan-ofis.webp"
        />
        <Card.Body>
          <Card.Subtitle className="infoLeftSubtitle p-4">
            YÜZ YÜZE GÖRÜŞME ORGANİZASYONU
          </Card.Subtitle>
          <Card.Title className="fw-bold fs-3 ps-4">
            Neden SEAMARK ile <br /> çalışmalısınız?
          </Card.Title>
          <Card.Text className="ps-4 pt-2 pb-5 fs-5">
            Seamark kamu ve özel sektörde faaliyet gösteren firmalara, ulusal ve
            uluslararası alanlarda yasal mevzuata uygun olarak kurulumları,
            kendilerini geliştirerek büyümeleri ve verim odaklı süreç
            iyileştirmeleri aşamalarında doğru kararları alabilmeleri için
            danışmanlık hizmeti verir.
          </Card.Text>
          <Button variant="primary" className="ms-4 mb-3 p-3 px-4 infoLeftButton"><small>BİZİMLE TANIŞIN</small> </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoLeft;
