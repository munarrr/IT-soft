import React from 'react';
import Slider from "react-slick";
import {Container,Row,Col} from 'reactstrap'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        },
        {
            breakpoint: 1024,
            settings: { slidesToShow: 1 }
        }
    ]
};

const Build = () => (
    <section className="saas1 build-bg">
        <div className="build-right-slider">
            <Slider className="owl-carousel owl-theme sync2" id="sync2" {...settings}>
                <div className="item">
                    <img alt="work-slider" className="img-fluid work-slide" src="/assets/images/saas1/work.png" />
                </div>
                <div className="item">
                    <img alt="work-slider" className="img-fluid work-slide" src="/assets/images/saas1/work.png" />
                </div>
                <div className="item">
                    <img alt="work-slider" className="img-fluid work-slide" src="/assets/images/saas1/work.png" />
                </div>
            </Slider>
        </div>
        <Container>
            <Row>
                <Col lg="6">
                    <Slider className="sync1 owl-carousel owl-theme overflow-hidden" id="sync1" {...settings}>
                        <div className="item">
                            <div className="build-box">
                                <h3 className="build-head text-white"><span className="theme-color">Разработка </span> сайтов в Бишкеке</h3>
                                <p>Наша команда состоит из настоящих профессионалов своего дела. Дизайнеры создают супер-макеты, верстальщики превращают рисунки в код, программисты помогают сделать сайт живым, уникальным и на 100% рабочим, а менеджеры и копирайтеры наносят завершающие и важные штрихи в адаптации сайта в интернете</p>
                                <ul>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />профессиональная вебразработка сайтов ПОД КЛЮЧ
                                </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />индивидуальный подход к каждому клиенту, построение концепции проекта с учетом воронки продаж
                                </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />уникальный дизайн для каждого сайта, полноценное наполнение контентом и загрузка удобной CMS
                                </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" /> создаем Сайты для Бизнеса, Landing Page, Интернет-Магазины и другие проекты всего от 17 000 сомов
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="item">
                            <div className="build-box">
                                <h3 className="build-head text-white"><span className="theme-color">Разработка </span> сайтов в Бишкеке</h3>
                                <p>Наша команда состоит из настоящих профессионалов своего дела. Дизайнеры создают супер-макеты, верстальщики превращают рисунки в код, программисты помогают сделать сайт живым, уникальным и на 100% рабочим, а менеджеры и копирайтеры наносят завершающие и важные штрихи в адаптации сайта в интернете</p>
                                <ul>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />профессиональная вебразработка сайтов ПОД КЛЮЧ
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />индивидуальный подход к каждому клиенту, построение концепции проекта с учетом воронки продаж
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />уникальный дизайн для каждого сайта, полноценное наполнение контентом и загрузка удобной CMS
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" /> создаем Сайты для Бизнеса, Landing Page, Интернет-Магазины и другие проекты всего от 17 000 сомов
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="item">
                            <div className="build-box">
                                <h3 className="build-head text-white"><span className="theme-color">Разработка </span> сайтов в Бишкеке</h3>
                                <p>Наша команда состоит из настоящих профессионалов своего дела. Дизайнеры создают супер-макеты, верстальщики превращают рисунки в код, программисты помогают сделать сайт живым, уникальным и на 100% рабочим, а менеджеры и копирайтеры наносят завершающие и важные штрихи в адаптации сайта в интернете</p>
                                <ul>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />профессиональная вебразработка сайтов ПОД КЛЮЧ
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />индивидуальный подход к каждому клиенту, построение концепции проекта с учетом воронки продаж
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" />уникальный дизайн для каждого сайта, полноценное наполнение контентом и загрузка удобной CMS
                                    </li>
                                    <li><img alt="icon" src="/assets/images/saas1/build-.png" /> создаем Сайты для Бизнеса, Landing Page, Интернет-Магазины и другие проекты всего от 17 000 сомов
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>

    </section>
)

export default Build;