import React, { useState } from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    centerPadding: '0px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed:500,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1,
                dots:true
            }
        },
        {
            breakpoint:991,
            settings:{
                slidesToShow:1,
                centerPadding: "160px",
                padding:"20px",
                slidesToScroll:1,
                centerMode:true,
                autoplay:true,
                dots:true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }
    ]
};


const Price = () => {
    const [active, setActive] = useState(true);
    const toggleClick = () => {
        setActive(!active)
    }
    return (
        <section className="saas1 pricing" id="plan">
            <Container>
                <Col md="12"  className="text-center">
                    <div className="title">
                        <img alt="title-logo" className="img-fluid" src="/assets/images/saas1/title-logo.png" />
                        <div className="main-title">
                            <h2 className="text-white">
                                <span className="theme-color">Цены</span>  для заказа
                        </h2>
                        </div>
                        <hr />
                        <div className="sub-title">
                            <p className="p-padding text-white">Эти цены примерные цены поскольку ваш сайт может уникалным</p>
                        </div>
                    </div>
                </Col>
                <Col lg="12" md="12" sm="12" xs="12"  className="text-center p-0">
                    <div className="pricing ">
                        <div className="pricing__switcher switcher">
                            <div className="switcher__buttons" onClick={toggleClick}>
                                <div className={`switcher__button monthly ${active ? 'switcher__button--enabled' : ''}`}>В месяц</div>
                                <div className={`switcher__button yearly ${active ? '' : 'switcher__button--enabled'}`}>В год <span>20% <sup>скидка</sup></span></div>
                                <div className="switcher__border"></div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Container>
            <Container>
                <div className="wrapper-full" id="monthly">
                    <Row>
                        <Col lg="12" md="12" sm="12" xs="12" className="text-center">
                            <Slider className="owl-carousel owl-theme pricing-slider plan-box" {...settings}>
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">Бесплатно</h3>
                                        <img alt="pan-line" src="/assets/images/saas1/plan-box.png" />

                                        <ul>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Концультация</span>

                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Иследование</span>

                                            </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>   Анализ продукта</span>

                                            </li>


                                        </ul>
                                        <a className="btn btn-default btn-white">Контакты</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="price-box active">
                                        <h3 className="price-heading">Сайт-Визитка.</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">от<span>4900</span>/в месяц</h4>
                                        <ul>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>  3-5 страниц. </span>
                                              
                                </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>Возможность вставки картинок</span> 
                                </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>Возможность вставки видео. </span>
                                             
                                </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Фотогалерея</span>
                                </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Статистика посещаемости сайта</span>
                                </li>
                                            
                                          
                                        </ul>
                                        <a className="btn btn-default btn-white">Sign up</a>
                                    </div>
                                </div>
                                
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">Одностраничный Landing-Page</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">от<span>7000</span>/в месяц</h4>
                                        <ul>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>Одна страница</span>
                                              
                                </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>Несколько вертикальных секций.</span>
                                               
                                </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>Бегающее навигационное меню.</span>
                                              
                                </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Интерактивная карта местоположения. </span>
                                </li>
                                          
                                        </ul>
                                        <a className="btn btn-default btn-white">Sign up</a>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="price-box">
                                        <h3 className="price-heading">Сайт-каталог</h3>
                                        <img alt="plan-line" src="/assets/images/saas1/plan-box.png" />
                                        <h4 className="no-weight">от<span>10000</span>/в месяц</h4>
                                        <ul>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>5-10 основных страниц. </span>

                                            </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>Возможность вставки картинок</span>

                                            </li>
                                            <li><img alt="plan-icon"
                                                src="/assets/images/saas1/plan-round.png" /><span>Возможность вставки видео.</span>

                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>Интерактивная карта местоположения</span>
                                            </li>
                                            <li><img alt="plan-icon" src="/assets/images/saas1/plan-round.png" /><span>  Удобная панель</span>
                                            </li>
                                          
                                        </ul>
                                        <a className="btn btn-default btn-white">Контакты</a>
                                    </div>
                                </div>
                            </Slider>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}


export default Price;