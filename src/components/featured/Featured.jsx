import Button from 'react-bootstrap/Button';
import './featured.css'
const Featured = () => {
  return (
    <div className='container-fluid featured d-flex justify-content-center text-white'>
    <div className='featuredBlack'>
    </div>
    <div className='featuredContent text-center'>
      <h6 className="subtitle">SEAMARK CONSULTANCY</h6>
      <h1 className="title py-2 fww-2 pb-5">Seamark Danışmanlık Hizmetleri <br />Hakkında</h1>
      <div>
      <Button variant="light buttonLeft">İLETİŞİM</Button>{' '}
      <Button variant="outline-light buttonRight">NASIL ÇALIŞIYORUZ</Button>{' '}
      </div>
    </div>
    </div>
  )
}

export default Featured
