import React from 'react'

function Hero() {
    return ( 
        <div className='container p-2' >
            <div className='row p-5 m-5 align-items-center text-center justify-content-center'>
            
                <h3 className='fs-4'>We pioneered the discount broking model in India. <br/>
                Now, we are breaking ground with our technology.</h3>
            
            </div>
        

        
            <div className='row p-5 m-5 align-items-top border-top' >
                <div className = 'col ml-5 mr-5 pb-3  pr-5 ' >
                    <p className='text-muted p-4 text-align-justify' style={{ lineHeight: '1.8' }}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
                    <p className='text-muted p-4 text-align-justify' style={{ lineHeight: '1.8' }}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>
                    <p className='text-muted p-4 text-align-justify' style={{ lineHeight: '1.8' }}>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
                </div>
                <div className = 'col  ml-5 mr-5 pb-3 pl-5' >
                    <p className='text-muted p-4 text-align-justify' style={{ lineHeight: '1.8' }}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                    <p className='text-muted p-4 text-align-justify' style={{ lineHeight: '1.8' }}>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    <p className='text-muted p-4 text-align-justify' style={{ lineHeight: '1.8' }}>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
                </div>
            </div>
        
        </div>
     );
}

export default Hero;