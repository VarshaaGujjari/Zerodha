import React from 'react'

function Hero() {
    return ( 
        <section className="container-fluid " id="supportHero" >
            <div className=" p-3 mb-2" id="supportWrapper" >
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className="row p-3 mt-3 mb-5 align-items-top justify-content-center" >
                <div className="col-5 p-5 m-1" >
                    <h3 className="">Search for an answer or browse  help topics to create a ticket</h3>
                    <input className="form-control" placeholder="Ex: Why is my order getting cancelled? How........" id="supportSearch" rows="1" id="supportSearch"></input>
                        <a href="" className="mr-2" style={{  fontSize: '13px'}}>Track account opening </a>
                        <a href="" className="mx-2" style={{  fontSize: '13px'}}>Track segment activation </a>
                    <a href="" className="mx-2" style={{  fontSize: '13px'}}>Intraday margins</a>
                    <a href="" className="mx-2" style={{  fontSize: '13px'}}> Kite user manual</a>
                </div>
                {/* <div className="col-1 m-2">
                </div> */}
                <div className="col-5 p-5 m-1" >
                    <h3>Feautured</h3>
                    <ol type="1" className="">
                        <li className='m-3'> <a href="" >Current Takeover and Delisting - January 2024</a></li>
                        <li className='m-3'> <a href="" >Latest Intraday leverages - MIS & CO </a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;