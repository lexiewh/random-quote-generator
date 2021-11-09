import Button from 'react-bootstrap/Button'

function QuoteBox() {
    return (
        <div id="quote-box">
            <h3 id="text">Quote</h3>
            <p id="author">Author</p>
            <Button id="new-quote">New Quote</Button>
            <a href="twitter.com/intent/tweet">Tweet</a>
        </div>
    )
}

export default QuoteBox