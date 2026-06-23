import React from 'react'

function LeftImage({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}

) {
    return (  
        <div className='container p-5 '>
            <div className='row  pb-3 pr-5 pl-5 mb-3 mr-5 ml-5 align-items-center'>
                <div className='col-8 '>
                    <img src={imageURL} alt={productName} style={{ width: '80%', padding: '10px' }} />
                </div>
                 <div className='col-4'>
                    <h3>{productName}</h3>
                    <p className="" style={{ lineHeight: '2' }}>{productDescription}</p>
                    
                    <div className='mb-3 '>
                    <a href={tryDemo} className="text-decoration-none ">Try Demo <i class="fa-solid fa-arrow-right"></i></a>
                    <a href={learnMore} className="text-decoration-none " style={{ marginLeft: '20px' }}>Learn More <i class="fa-solid fa-arrow-right"></i></a> 
                    
                    </div>
                    <div>
                    <a href={googlePlay}>
                        <img src='media/images/googlePlayBadge.svg'></img>
                    </a>
                    <a href={appStore}>
                        <img src='media/images/appStoreBadge.svg' style={{ marginLeft: '20px' }}></img>
                    </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default LeftImage;