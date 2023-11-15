import React from 'react';
import '../styles/PriceTable.css';
import { MdOutlineDownloadDone, MdClose } from 'react-icons/md';

const Pricetable = ({ data, clickHandler }) => {
  return (
    <div className='main-container'>

        <div className='pricetable-container'>
          <div className='header-container'>
            <div className='plan-type'>
              <div className='bold'>{data.planType.bold}</div>
              <div>{data.planType.description}</div>
            </div>
            <div className='block-2'>
              <div className='offer-container'>
                <s>{data.pricing.originalPrice}</s>
                <span className='offer'>{data.pricing.discount}</span>
              </div>
              <div className='price-container'>
                
                <div className='price'>{data.pricing.discountedPrice}</div>
                <div>{data.pricing.pricePerMonth}</div>
              </div>
            </div>
            <div className='btn-container'>
              <div>
                <button className='choose-btn' onClick={clickHandler}>{data.buttonLabel}</button>
              </div>
            </div>
          </div>

          <div className='addons-container'>
            {data.addons.map((addon, addonIndex) => (
              <div className='addons' key={addonIndex}>
                <span>
                  {addon.support === 'supported' ? (
                    <MdOutlineDownloadDone color='green' />
                  ) : (
                    <MdClose color='red' />
                  )}
                </span>
                {addon.text}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Pricetable;
