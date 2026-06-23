import React from 'react'

function Stats() {
    return ( 
    <div className='container p-4 '>

        <div className='row p-4 align-items-center'>
            

        
            <div className='col-6 p-4'>
                <h2 className='mb-5 fs-2'>Trust with confidence</h2>

                <h3 className='fs-4'>Customer-first always</h3>
                <p className='text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>

                <h3 className='fs-4'>No spam or gimmicks</h3>
                <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                <h3 className='fs-4'>The Zerodha universe</h3>
                <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h3 className='fs-4'>Do better with money</h3>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
                <div className='col-6 text-center p-4'>
                        <img src='media/images/ecosystem.png'style={{width:'40rem'}} ></img>
                        <div >
                            <a href='' className='mx-5 text-decoration-none'>Explore our products <i class="fa-solid fa-arrow-right"></i></a> 
                            <a href='' className='text-decoration-none'>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                </div>
        
        </div>

    </div>  
    );
}

export default Stats;