import React from 'react'
import "../styles/payment.css";

function payment() {
  return (
    <section className='sec1'>
        <div className='grd1'>


        <div className="coupans">
          <h3>Unstop Pro Membership</h3>
          <h4 className='h44'>INR 2023</h4>
          </div> <br />
          <h1 className='h11'>Payment methods</h1>
          <br />
          <div className="pay">

          <div id='cp' className="coupan">
              <h2>UPI</h2> 
              <input type="radio" id="html" name="fav_language" value="HTML"/>
          </div>
          <div id='cp' className="coupan">
              <h2>Wallet</h2>
              <input type="radio" id="html" name="fav_language" value="HTML"/>
          </div>
          <div id='cp' className="coupan">
              <h2>Net Banking</h2>
              <input type="radio" id="html" name="fav_language" value="HTML"/>
          </div>
          <div id='cp' className="coupan">
              <h2>Indian Credit/Debit Card</h2>
              <input type="radio" id="html" name="fav_language" value="HTML"/>
          </div>
          <div id='cp' className="coupan">
              <h2>International Credit/Debit Card</h2>
              <input type="radio" id="html" name="fav_language" value="HTML"/>
          </div>






          </div>



        </div>


        <div className='grd2'>
            <div className="coupan">
                 <input type="text" id="fname" name="fname" placeholder="Apply coupon"/>
        <button className="buttonsss"> Apply </button>
            </div>
       
          <h1 className='h11'>Amount summary</h1>
          <div className="coupan">
              <h5>Unstop Pro Price</h5>
          <h4>2,023.00 INR</h4>
          </div> <br />
          <div className="coupan">
              <h5>GST (18 % of service charge)</h5>
          <h4>+ 364.14 INR</h4>
          </div>
          <br />
          <div className="coupan">
              <h3>Payable Amount</h3>
          <h4>2,387.14 INR</h4>
          </div>
          <button className="btn-apply"> Confirm and pay </button>
          <br /> <br />
          <span class="sp fa fa-cc-visa"></span> <span class="sp fa fa-cc-paypal"></span> <span class="sp fa fa-credit-card"></span> <span class="sp fa fa-cc-amex"></span>
        </div>

    </section>
  )
}

export default payment