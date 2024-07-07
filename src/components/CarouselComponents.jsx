import { Carousel } from "react-bootstrap";
import React from "react";
import  "../css/style.css";


const CarouselComponent=()=>{

    return(
        <Carousel>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                id="img-1"
                src="https://img.freepik.com/premium-vector/realistic-coffee-shop-template_23-2149285019.jpg?w=1060"
                alt="First Slide" />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facilis suscipit non voluptatibus optio neque vitae, natus voluptatem tenetur facere, obcaecati unde iure quas blanditiis doloribus voluptate fuga fugiat corrupti.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                id="img-1"
                src="https://img.freepik.com/free-vector/realistic-coffee-shop-template_23-2149285024.jpg?w=1380&t=st=1720244350~exp=1720244950~hmac=df7f1e343116280dec0baa06a51b8da138f2d923396641e00e590381c8d6cd54"
                alt="Second Slide" />
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facilis suscipit non voluptatibus optio neque vitae, natus voluptatem tenetur facere, obcaecati unde iure quas blanditiis doloribus voluptate fuga fugiat corrupti.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                id="img-1"
                src=" https://img.freepik.com/free-vector/realistic-coffee-shop-template_23-2149285025.jpg?t=st=1720244764~exp=1720248364~hmac=5831711dbbc15aa3b8e82fd07b0073224722e5f4c978da7454c86282bb308ede&w=1380"
                alt="First Slide" />
                <Carousel.Caption>
                    <h3>Third Slide</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit facilis suscipit non voluptatibus optio neque vitae, natus voluptatem tenetur facere, obcaecati unde iure quas blanditiis doloribus voluptate fuga fugiat corrupti.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

};

export default CarouselComponent;