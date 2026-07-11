import React from 'react'

function OpenAccount() {
    return ( 
        <>
        <div className='container mt-3 p-4 mb-3'>

        
        <div className='row text-center'>

            <h3>Open a Zerodha account</h3>
            <p className='mt-3 mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>

            <button className='p-2 btn btn-primary fs-5' style
        = {{width:"20%", margin: "0 auto"}  }> <a href = "http://localhost:3000/signup" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "white" }}>Sign up for free</a> </button>

        </div>
        </div>

        </>
     );
}

export default OpenAccount;