import { Button, Container, Row, Col} from 'react-bootstrap'

function QuoteBox() {
    return (
        <Container id="quote-box">
            <Row>
                <h3 id="text">Quote</h3>
            </Row>
            <Row>
                <p id="author">Author</p>
            </Row>
            <Row>
                <Col><a class="twitter-share-button" href="https://twitter.com/intent/tweet">Tweet</a></Col>
                <Col id="btn-col"><Button id="new-quote">New quote</Button></Col>
            </Row>
        </Container>
    )
}

export default QuoteBox