import React from 'react'

function Pricing() {
    return ( 
    
    <div className='container mt-2 p-4'>

        <div className='row align-items-center p-4'>

            <div className='col-4  p-4'>
                <h2 className='mb-3 fs-2'>Unbeatable pricing</h2>
                <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <div >
                    <a href='' className='text-decoration-none'>See Pricing<i class="fa-solid fa-arrow-right"></i></a> 
                </div>
            </div>
            <div className='col-2'></div>
            <div className='col-6 p-4'>
                <div className='row text-center'>
                    <div className='col border p-4'>
                        <h1 className='mb-1 '>₹0</h1>
                        <p>Free equity delivery and <br></br> direct mutual funds</p>
                    </div>
                    <div className='col border p-4'>
                        <h1 className='mb-1'>₹20</h1>
                        <p>Intraday & F&O</p>
                    </div>

                </div>
            </div>

        </div>

    </div>  );
}

export default Pricing;