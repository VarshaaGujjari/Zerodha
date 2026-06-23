import React from 'react'

function Universe() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center p-5' >
                <h3 className='mb-3 text-muted'>The Zerodha Universe</h3>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            {/* </div> */}
            {/* <div className='row m-3 p-3'> */}
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/zerodhafundhouse.png' alt='The Zerodha Universe ' style={{ width: '70%' }} />
                <p className='text-muted text-small mt-2' style = {{fontSize:'13px'}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals. </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg' alt='The Zerodha Universe' style={{ width: '70%' }} />
                    <p className='text-muted text-small mt-2' style = {{fontSize:'13px'}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-4 p-3 mt-5  '>
                    <img src='media/images/tijori.svg' alt='The Zerodha Universe' style={{ width: '70%' }} />
                    <p className='text-muted text-small mt-2' style = {{fontSize:'13px'}}>Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
            {/* </div> */}

            {/* <div className='row m-3 p-3'> */}
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' alt='The Zerodha Universe '  style={{ width: '70%' }} />
                    <p className='text-muted text-small mt-2' style = {{fontSize:'13px'}}>Systematic trading platform that allows you to create and backtest strategies without coding. </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png' alt='The Zerodha Universe'  style={{ width: '70%' }}/>
                    <p className='text-muted text-small mt-2' style = {{fontSize:'13px'}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>
                <div className='col-4 p-3 mt-5 '>
                    <img src='media/images/dittoLogo.png' alt='The Zerodha Universe' style={{ width: '70%' }} />
                    <p className='text-muted text-small mt-2' style = {{fontSize:'13px'}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>
                <button
          className="p-2 btn btn-primary fs-5 mt-3"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
            </div>
        </div>
     );
}

export default Universe;



