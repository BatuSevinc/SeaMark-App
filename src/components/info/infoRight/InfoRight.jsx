import './infoRight.css'
import React from 'react'
import {Data} from '../../../helpers/Data'
import DataItem from '../../dataItem/DataItem'
const InfoRight = () => {
  return (
    <div className='mt-5' style={{width:'100%'}}>
      <div className='infoRight d-flex'>
            <p className='infoRightParagh d-none d-md-block'>NASIL ÇALIŞIYORUZ</p>
            <span className="infoRightLine d-none d-lg-block"></span>
      </div>
      <div>
        {
          Data.map((dataItem,i)=>{
            return(
              <DataItem
              key={i}
              title={dataItem.title}
              desc={dataItem.desc}
              number={dataItem.number}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default InfoRight
