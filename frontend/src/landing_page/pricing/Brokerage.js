import React from 'react'

function Brokerage() {
    return ( 
        <div className="container p-5 ">
            
            <div className="row text-center  p-3 m-3 ">
                <div className="col-8">
                    <h3 className="text-primary m-3 p-3">Brokerage Calculator</h3>
                    <ul className="text-muted mt-3 text-start m-2" style = {{fontSize: '14px'}}>
                        <li className="m-3">Call & Trade and RMS auto-squareoff:Additional charges of ₹50 + GST per order.</li>
                        <li className="m-3">Digital contract notes will be sent via e-mail.</li>
                        <li className="m-3">Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
                        <li className="m-3">For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li className="m-3">For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li className="m-3">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
                    </ul>
                    
                </div>
                <div className="col-4">
                    <h3 className="text-primary m-3 p-3" >List of Charges</h3>
                </div>
                
            </div>
        </div>
     );
}

export default Brokerage;