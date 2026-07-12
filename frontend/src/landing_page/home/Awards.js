import React from 'react'

function Awards() {
    return ( 
        
        <div className='container mt-5 mb-4'>
            <div className='row align-items-center'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'></img>
                </div>
                <div className='col-6 p-5'>
                    <h1>Largest Stock Broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>
                    <div className='row mb-5 mt-3'>
                        <div className='col'>
                            <ul>
                                <li> <p>Futures and Options </p></li>
                                <li> <p>Commodity and derivatives </p></li>
                                <li> <p>Currency derivatives </p></li>
                            </ul>
                        </div>
                        <div className='col'>
                            <ul>
                                <li> <p>Stock and IPOs </p></li>
                                <li> <p>Direct Mutual Funds </p></li>
                                <li> <p>Bonds and Govt. Securities</p></li>
                            </ul>
                        </div>
                    </div>

                    <div className='row'>
                        <img src='media/images/presslogos.png' ></img>
                    </div>
                </div>
            </div>
        </div>
        
     );
}

export default Awards;