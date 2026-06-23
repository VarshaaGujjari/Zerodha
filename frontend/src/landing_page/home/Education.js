import React from 'react'

function Education() {
    return ( 
        <div className='container mb-3 p-4'>
            <div className='row mt-2 align-items-center  p-4'>

                <div className='col-6  p-4'>
                    <img src='media/images/education.svg' alt='Varsity' style={{width:'80%'}}></img>
                </div>
                <div className='col - 4  p-4'>
                    <h2 className='mb-3'>Free and open market education</h2>
                    <p className='mt-3 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <div className='mt-0'>
                        <a href='' className='text-decoration-none'>Varsity<i class="fa-solid fa-arrow-right"></i></a> 
                    </div>
                    
                    <p className='mt-3 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <div >
                        <a href='' className='text-decoration-none'>TradingQ&A<i class="fa-solid fa-arrow-right"></i></a> 
                    </div>
                </div>

            </div>

        </div>
     );
}

export default Education;