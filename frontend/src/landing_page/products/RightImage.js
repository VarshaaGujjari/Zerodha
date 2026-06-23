import React from 'react'

function RightImage({
    imageURL,
    productName,
    productDescription,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container p-5 '>
            <div className='row  pb-3 pr-5 pl-5 mb-3 mr-5 ml-5 align-items-center'>
                 <div className='col-4'>
                    <h3>{productName}</h3>
                    <p className="" style={{ lineHeight: '2' }}>{productDescription}</p>
                    
                    <div className='mb-3 '>
                    
                    <a href={learnMore} className="text-decoration-none ">Learn More <i class="fa-solid fa-arrow-right"></i></a> 
                    
                    </div>
                    
                </div>
                <div className='col-8 '>
                    <img src={imageURL} alt={productName} style={{ width: '90%', padding: '10px' }} />
                </div>
            </div>
        </div>
     );
}

export default RightImage;