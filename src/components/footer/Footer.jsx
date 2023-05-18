import "./footer.css";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <footer className="container footer mt-5 pb-3">
      <div className="footerTop d-md-flex  justify-content-md-between">
        <div className=' d-md-flex gap-3'>
        <Nav.Item>
          <Nav.Link
            href="/kutuphane"
            className="text-black footerNavbarLink bg-gray p-2 px-3 rounded"
          >
            KÜTÜPHANE
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/hakkimizda"
            className="text-black footerNavbarLink bg-gray p-2 px-3 rounded"
            >
            HAKKIMIZDA
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/iletisim"
            className="text-black footerNavbarLink bg-gray p-2 px-3 rounded"
            >
            İLETİŞİM
          </Nav.Link>
        </Nav.Item>
        <FontAwesomeIcon icon={faHeart} className="border rounded-circle bg-gray p-2 mt-1 pointer"/>
        </div>
        <div>
            <h3 className="text-end">SEA<b>MARK</b></h3>
            <p className="text-end fw-lighter fst-italic">© 2023 SEAMARK CONSULTANCY</p>
        </div>
      </div>
      <div className="footerParagh">
        "Burada yer alan bilgiler genel niteliktedir ve belirli bir kişi veya
        kuruluşun koşullarını ele almayı amaçlamamaktadır. Doğru ve zamanında
        bilgi sağlamaya çalışmamıza rağmen, bu bilgilerin alındığı tarih
        itibarıyla doğru olduğunun veya gelecekte de doğru olmaya devam
        edeceğinin garantisi yoktur. Belirli bir durumun kapsamlı bir
        incelemesinden sonra hiç kimse uygun profesyonel tavsiye olmadan bu tür
        bilgilere göre hareket etmemelidir."
      </div>
    </footer>
  );
};

export default Footer;
