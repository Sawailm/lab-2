import React from 'react';
import RightImage from './../DSC_5441-scaled.jpg'; // Assuming you have a right image

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img className="img-fluid" src={RightImage} alt="Right Image"/>
          </div>
          <div className='hero-left col-md-6'>
            <h2>Welcome to <span className='hero-logo'>HDFC Bank</span></h2>
            <p>You can open an FD for as less as ₹ 5,000, and use it as a back-up for your savings or current account with Sweep-in and Super Saver Facilities. HDFC Bank Fixed Deposits easy and convenient to open or liquidate whenever necessary.</p>
            <button className="hero-button cbtn btn-primary">Open Your Account Today</button>
          </div>
        </div>
        <BodyArea/>
      </div>
    </div>
  );
};




const BodyArea = () => {
    return (
       
            <div className='row'>

            

                <div className='body-content col-md-4'>

                    <h3>Checquing Account</h3>
                    <p>With a checking account, you can deposit and withdraw money easily through various channels, including ATMs, online banking, mobile apps, and bank branches. This accessibility ensures that your funds are always within reach whenever you need them</p>

                </div>

            <div className='body-content col-md-4'>

            <h3>Saving Account</h3>
            <p>Explore our diverse range of Savings Accounts tailored to meet your banking requirements at HDFC Bank. From the innovative DigiSave Youth Account to specialized options like Women's Savings Account and Senior Citizens Account, we ensure a personalized banking experience for every customer.</p>

            </div>

            <div className='body-content col-md-4'>

            <h3>Current Account</h3>
            <p>Experience seamless banking with HDFC Bank's Video KYC and InstaAccount features. Complete KYC from home via video, and open a Savings Account instantly with full digital banking capabilities, including NetBanking and MobileBanking. Enjoy cash withdrawals without a physical Debit Card.</p>

            </div>

          


            </div>

       
    );
}

export default Home;
