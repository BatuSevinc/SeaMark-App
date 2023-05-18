import './info.css'
import InfoLeft from './infoLeft/InfoLeft'
import InfoRight from './infoRight/InfoRight'
const Info = () => {
  return (
    <div className='container-fluid bg-light'>
      <div className="d-md-flex m-5">
      <InfoLeft/>
      <InfoRight/>
      </div>
      <div className='container-fluid bg-gray border-bottom'>
      <div className='container pt-5'>
      <p className='infoSubtitle pt-5'>SEAMARK CONSULTANCY</p>
      <h1 className='infoTitle fw-bold fs-3'>İşlerin nasıl yapılacağını biliyoruz.</h1>
      <p className='infoDesc pt-3'>SEAMARK ekipleri, zorluğun çerçevesini çizmenize yardımcı olur, çözüme giden bir yol çizer ve ardından gerekeni yapana kadar sizinle birlikte kalır. SEAMARK, ne kadar spesifik olursa olsun, herhangi bir müşteri ihtiyacını karşılamak için tam olarak doğru kişileri masaya koyabilir. Bu insanlar, doğru şeylerin doğru zamanda gerçekleşmesini sağladığı kanıtlanmış araçlar ve yöntemler, varlıklar ve hızlandırıcılardan oluşan bir hinterlandı kullanırlar. Teknolojiyi nasıl kullanacağımızı biliyoruz.</p>
      <p className='infoDesc pb-5'>Biz senin için buradayız</p>
      </div>
      </div>
    </div>
  )
}

export default Info
