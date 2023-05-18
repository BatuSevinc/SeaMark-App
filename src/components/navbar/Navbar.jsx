import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import './navbar.css'
import { useState } from 'react';
const Navbar = () => {
const [openNavbar,setOpenNavbar] = useState(false)

  console.log(openNavbar)
  return (
    <Nav className="justify-content-around bg-light pt-3 sticky-md-top " >
    <div className='navbarAll d-none d-lg-block'>
    <button onClick={()=>setOpenNavbar(!openNavbar)}>
    <span className='navbarLine'></span>
    <span className='navbarLine2'></span>
    </button>
    {openNavbar && 
    <div className='container d-flex flex-column navbarClickMenu ps-5'>
      <h1 className=' pt-5'>SEAMARK <br /> CONSULTANCY</h1>
      <small>HIZLI BAĞLANTILAR</small>
      <button className='fw-semibold my-2'>Kütüphane</button>
      <button className='fw-semibold my-2'>Hakkımızda</button>
      <small>İLETİŞİM</small>
      <button className='fw-semibold my-2'>info@semarkconsultancy.com</button>
      <button className='fw-semibold my-2 mb-5'>0(555)555555555</button>
      </div>}
      </div>
        <Nav.Item>
            <Nav.Link  className='text-black fw-semibold navbarLogo'><h5>SEA<span className='fw-bold'>MARK</span></h5></Nav.Link>
        </Nav.Item>
        <Nav className='navbars'>
    <Nav.Item>
      <Nav.Link href="/kutuphane" className='text-black fw-semibold navbarLink'>KÜTÜPHANE</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/hakkimizda" className='text-black fw-semibold navbarLink'>HAKKIMIZDA</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/iletisim" className='text-black fw-semibold navbarLink'>İLETİŞİM</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    </Nav.Item>
    </Nav>
    <Nav.Item>
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button" className='navbarDropdown border border-black py-2 my-2' variant="light">
         <span className='p-2'>Ç Ö Z Ü M L E R İ M İ Z</span>  
        </Dropdown.Toggle>

        <Dropdown.Menu variant="light" className='dropdownMenu Container pb-4'>
        <div className='container'>
        <p className='text-with-line'>neler yapıyoruz ?</p>
        <span className='line-with-text'></span>
        </div>
        <div className="container dropdownInfo d-md-flex flex-wrap gap-3 justify-content-center">
            <section className='border border-light-subtle p-5 section1 fw-semibold'> <span className='fw-bold fs-4'>Yönetim</span> <br /> Danışmanlığı</section>
            <section className='border border-light-subtle p-5 section2 fw-semibold'> <span className='fw-bold fs-5'>Bütçe & <br /> Raporlama</span> <br /> Danışmanlığı</section>
            <section className='border border-light-subtle p-5 section3 fw-semibold'> <span className='fw-bold fs-5'>Finans</span> <br /> Danışmanlığı</section>
            <section className='border border-light-subtle p-3 pt-5 section4 fw-semibold'> <span className='fw-bold fs-5'>Mevzuat & Uyum</span> <br /> Danışmanlığı</section>
        </div>
        </Dropdown.Menu>
      </Dropdown>

        </Nav.Item>
  </Nav>
  );
};

export default Navbar;
