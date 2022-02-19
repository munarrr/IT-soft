import React from 'react';
import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import { Container, Row, Col } from 'reactstrap'
const Faq = () => {
    const DummyContent1 = () => (
        <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordionoc">
            <div className="card-body">
                Лендинг пейдж - это посадочная страница или сайт, где вы можете указать преимущества Вашего продукта или услуги, по принципу одна страница один продукт
            </div>
        </div>
    );
    const DummyContent2 = () => (
        <div className="collapse show" id="collapseicon1" aria-labelledby="collapseicon1" data-parent="#accordionoc">
            <div className="card-body">
                В зависимости от сложности и выбора варианта. Например сайт визитка занимает 7 дней. Создание Интернет магазина - 30 дней. Средний срок 19 дней
            </div>
        </div>
    );
    const DummyContent3 = () => (
        <div className="collapse show" id="collapseicon2" data-parent="#accordionoc">
            <div className="card-body">
                1 шаг. С Вами вместе разрабатываем маркетинговую стратегию

                2 шаг. Создаем техническое задание и делаем прототип будущего сайта

                3 шаг. После согласования, мы разрабатываем Уникальный дизайн сайта
            </div>
        </div>
    );
    const DummyContent4 = () => (
        <div className="collapse show" id="collapseicon3" data-parent="#accordionoc">
            <div className="card-body">
                A/B тест - после разработки сайта, проводим тестирование, насколько сайт привлекает клиентов и узнаем количество откликов от них. В случае неудовлетворения, мы меняем тексты и прочие маркетинговые фишки
            </div>
        </div>
    );
    return (
        <section className="saas1 faq" id="faq">
            <Container>
                <Row>
                    <Col md="8">
                        <div className="faq-block">
                            <div>
                                <h3 className="frequent-text">ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ</h3>
                                <h6>ХОТИТЕ СКИДКУ ИЛИ ПЕРСОНАЛЬНЫЙ РАСЧЕТ ВАШЕГО САЙТА?
                                    Ответьте на 10 легких вопросов и получите "персональную" цену</h6>
                                <Accordion atomic={true}>
                                    <AccordionItem className="card-header bg-primary" title="Что такое Лендинг пейдж и Автоворонка?">
                                        <DummyContent1 className="active" />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="   Сколько времени занимает создание сайта?
                                    ">
                                        <DummyContent2 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title="Как происходит процесс создание сайта?">
                                        <DummyContent3 />
                                    </AccordionItem>
                                    <AccordionItem className="card-header bg-primary" title=" Что такое SEO, копирайтинг и А/В тест?">
                                        <DummyContent4 />
                                    </AccordionItem>
                                </Accordion>
                                <h6 className="link">Есть дополнительные вопросы?</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="faq-img-block">
                            <img alt="faq-person" className="img-fluid" src="/assets/images/saas1/faq-img.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Faq;