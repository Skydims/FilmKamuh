import { Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white d-flex text-center justify-content-center align-items-center'>
                <Row>
                    <Col>
                        <div className='tittle'>FILM BERKUALITAS</div>
                        <div className='tittle'>TANPA KE BIOSKOP</div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro