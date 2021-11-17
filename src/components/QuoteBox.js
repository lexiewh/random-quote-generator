import { useEffect, useState, useCallback } from "react"
import { Button, Container, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux"
import { getQuotes } from '../redux/actions'

function mapStateToProps(state) {
    return {
        quotes: state.remoteQuotes.slice(0, 40)
    }
}

function QuoteBox(props) {
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getRandomQuoteAndAuthor = useCallback((max) => {
        const randomInt = Math.floor(Math.random() * max);
        const content = props.quotes[randomInt].content;
        const author = props.quotes[randomInt].author;
        return { content, author };
    }, [props.quotes])

    useEffect(() => {
        setIsLoading(true)
        props.getQuotes()
        if (props.quotes.length > 0 && quote.length === 0) {
            const { content, author } = getRandomQuoteAndAuthor(props.quotes.length)
            setQuote(content)
            setAuthor(author)
        }
        setIsLoading(false)
    }, [props, getRandomQuoteAndAuthor, quote])

    const handleClick = () => {
        const { content, author } = getRandomQuoteAndAuthor(props.quotes.length)
        setQuote(content)
        setAuthor(author)
    }

    return (
        <Container id="quote-box">
            {isLoading ? <h3>Loading...</h3> :
                <div>
                    <Row>
                        <h3 id="text">{quote}</h3>
                    </Row>
                    <Row>
                        <p id="author">- {author}</p>
                    </Row>
                    <Row>
                        <Col><a className="twitter-share-button" href="https://twitter.com/intent/tweet">Tweet</a></Col>
                        <Col id="btn-col"><Button id="new-quote" onClick={handleClick}>New quote</Button></Col>
                    </Row>
                </div>}
        </Container>
    )
}

export default connect(mapStateToProps, { getQuotes })(QuoteBox)