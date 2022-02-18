import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Subscribe = () => (
    <section className="saas1 subscribe" id="contact">
        <Container>
            <Row>
                <Col lg="7">
                    <div className="media">
                        <img alt="profile" src="/assets/images/saas1/subscribe-icon.png" />
                        <div className="media-body">
                            <h3 className="mt-0 text-white">Закончим за 4 дня</h3>
                            <h6 className="text-white">Отправьте нам ваши почти и мы решаем вашу проблему 
                        </h6>
                        </div>
                    </div>
                </Col>
                <Col lg="5">
                    <div className="subscribe-input">
                        <form>
                            <input id="useremail" placeholder="Ваше имя" required type="email" />
                            <input id="submit" type="submit" value="Отправить" />
                        </form>
                        <div className="text text-center d-flex">
                            <h6 className="text-white">Маленький бонус</h6><h6 className="text-white">Концультация бесплатно</h6>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Subscribe;