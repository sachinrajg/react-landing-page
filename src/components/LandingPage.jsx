import React from 'react';
import '../css/style.css'
import NavBar from './NavBar';
import CarouselComponent from './CarouselComponents';
//import { Card } from 'react-bootstrap';


const LandingPage=()=>{
    return(
        <div>
        <NavBar/>
        <CarouselComponent/>
        <hr>
        </hr>
        <h1 id='best-seller'>Our Best Sellers</h1><hr></hr>
        <div className="row">
            <div className="col best-seller-card">
                <div className="card text-start">
                    <img className="card-img-top card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWSxq97PkND00yKtSBNKhFhKcUFopuiq6FaQ&s" alt="Classic Coffee" />
                    <div className="card-body">
                        <h4 className="card-title">Classic Coffee</h4>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, perferendis.</p>
                    </div>
                </div>
                
            </div>

            <div className="col best-seller-card">
                <div className="card text-start">
                    <img className="card-img-top card-img" src="data:image/jpeg;base64,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" alt="Whole Bean Coffee" />
                    <div className="card-body">
                        <h4 className="card-title">Whole Bean Coffee</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nobis!</p>
                    </div>
                </div>
                
            </div>

            <div className="col best-seller-card" > 
                <div className="card text-start ">
                    <img className="card-img-top card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ISB8w8T8tu4FdN3FW94eTvFdhmbblkjrgA&s" alt="Pure Coffee" />
                    <div className="card-body">
                        <h4 className="card-title">Pure Coffe</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore!</p>
                    </div>
                </div>
                
            </div>
        </div>
        <br>
        </br><br></br>

        
        <div className="row">
            <hr></hr>
        <h1 id='best-seller'>MERCHANDISE</h1><hr></hr>
            <div className="col best-seller-card">
                <div className="card text-start">
                    <img className="card-img-top card-img" src="https://sleepyowl.co/cdn/shop/products/pitcher_desk_1080x.jpg?v=1619848585" alt="Classic Coffee" />
                    <div className="card-body">
                        <h4 className="card-title">Pitcher</h4>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, repellat.</p>
                    </div>
                </div>
                
            </div>

            <div className="col best-seller-card">
                <div className="card text-start">
                    <img className="card-img-top card-img" src="https://sleepyowl.co/cdn/shop/files/Merch_trio_5db6beb5-6933-42ba-baaa-37496f6c8a9b_1080x.jpg?v=1718867690" alt="Whole Bean Coffee" />
                    <div className="card-body">
                        <h4 className="card-title">Ultimate Coffee Gear Kit</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, esse.</p>
                    </div>
                </div>
                
            </div>

            <div className="col best-seller-card" > 
                <div className="card text-start ">
                    <img className="card-img-top card-img" src="https://sleepyowl.co/cdn/shop/products/Greenceramic_65846659-c10e-4e41-9e9f-1d5658701c5a_1080x.jpg?v=1646480565" alt="Pure Coffee" />
                    <div className="card-body">
                        <h4 className="card-title">Green Ceramin Mug</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, labore!</p>
                    </div>
                </div>
                
            </div>
        </div>
        <br></br><br></br>
        </div>

        

    );
};

export default LandingPage;