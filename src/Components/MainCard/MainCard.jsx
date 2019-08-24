import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import notarySelfi from './notarySelfi.jpg'
import helperSelfi from './helperSelfi.png'
import logo from './logo.png'
import Media from 'react-bootstrap/Media'
import Table from 'react-bootstrap/Table'
import VerticalLinearStepper from '../Appointment/VerticalLinearStepper'




class MainCard extends React.Component {
    render() {
        return(
            //style={{color: "green", backgroundColor: "green"}}>
            <Card border="success"> 
                <Card.Header align="left">
                    <img
                        width={200}
                        height={200}
                        className="mr-3"
                        src={logo}
                        alt="logo"
                    />
                </Card.Header>
                <Card.Body>
                <Container>
                    <Row>
                        <Col>
                            <h3>Для Вас работают</h3>
                            <Media id="notary">
                                <img
                                    width={105}
                                    height={133}
                                    className="mr-3"
                                    src={notarySelfi}
                                    alt="notarySelfi"
                                />
                                <Media.Body>
                                    <h5>Семина Ольга Алексеевна</h5>
                                    <h6>Нотариус</h6>
                                    <p>
                                        Лицензия на право нотариальной деятельности № 001915 от 21 мая 1993 г.
                                    </p>
                                    <p>                                    
                                        Приказ о назначении на должность № 100-лс от 18 мая 1993 г.
                                    </p>
                                </Media.Body>
                            </Media>
                            <Media id="helper">
                                <img
                                    width={105}
                                    height={133}
                                    className="mr-3"
                                    src={helperSelfi}
                                    alt="helperSelfi"
                                />
                                <Media.Body>
                                    <h5>
                                        Семина Наталья Геннадьевна
                                    </h5>
                                    <h6>
                                        Помощник нотариуса
                                    </h6>
                                    <p>
                                        с 1 января 2016 г. по настоящее время
                                    </p>
                                </Media.Body>
                            </Media>
                            
                        </Col>
                        <Col md={{ span: 4, offset: 1 }}>
                            <Card.Text align="center">
                                <Card.Title>Телефон</Card.Title>
                                <a style={{color: "black"}} href="tel:8(8313)25-35-41">(8313)25-35-41</a>
                                <Card.Title>Режим приёма граждан:</Card.Title>
                                <Table striped bordless hover size="sm">
                                    <tbody>
                                        <tr>
                                            <td>Понедельник</td>
                                            <td>9:00 - 12:00, 13:00 - 16:00</td>
                                        </tr>
                                        <tr>
                                            <td>Вторник</td>
                                            <td>9:00 - 12:00, 13:00 - 16:00</td>
                                        </tr>
                                        <tr>
                                            <td>Среда</td>
                                            <td>9:00 - 12:00, 13:00 - 16:00</td>
                                        </tr>
                                        <tr>
                                            <td>Четверг</td>
                                            <td>9:00 - 12:00, 13:00 - 16:00</td>
                                        </tr>
                                        <tr>
                                            <td>Пятница</td>
                                            <td>9:00 - 12:00, 13:00 - 15:00</td>
                                        </tr>
                                        <tr>
                                            <td>Суббота</td>
                                            <td>Неприёмный день</td>
                                        </tr>
                                        <tr>
                                            <td>Воскресенье</td>
                                            <td>Неприёмный день</td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <Card.Title>Адрес</Card.Title>
                                <p align="center"><a style={{color: "black"}} href="https://goo.gl/maps/rkWE6jhzDBXGsXQ36">606025, г. Дзержинск, бул. Мира, д. 29</a></p>
                                <div>
                                    <iframe width="300" height="200" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d506.8825015945373!2d43.44345306767654!3d56.23604152619563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414e3af32ff22697%3A0x56c0393ff2f15c42!2sNotarius!5e0!3m2!1sen!2sit!4v1566394933218!5m2!1sen!2sit" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                                </div>                                    
                            </Card.Text>
                        </Col>
                    </Row>
                    <Row align="center">
                        <Col><h3>Запись на прием</h3></Col>
                    </Row>
                    <Row>
                        <VerticalLinearStepper />
                    </Row>
                </Container>
                {/* <AccordionTabs /> */}
                </Card.Body>
            </Card>
        )
    }
}
export default MainCard;
