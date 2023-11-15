import React  from 'react';
import '../styles/PricingTable.css';
// import 'font-awesome/css/font-awesome.min.css';
import Pricetable from '../components/PriceTable';
import priceTableData from '../PricingData';
// import { useState } from 'react';
// import Form from './Form';


const PricingTable = ({clickHandler}) => {

  
  return (
    <div>
        
      {/* <div className="main" id='id-laptop-main'>
            <Pricetable clickHandler={clickHandler}/>
            <Pricetable clickHandler={clickHandler}/>
            <Pricetable clickHandler={clickHandler}/>
            <Pricetable clickHandler={clickHandler}/>
      </div>  */}

      <div className="main" id='id-laptop-main'>
      {
        priceTableData.map((data, index) => (
        <Pricetable key={index} data={data} clickHandler={clickHandler} />
      ))
      }
      </div>
      
    </div>

    

    
  )
}

export default PricingTable