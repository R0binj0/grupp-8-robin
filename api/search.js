export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json0')
    res.end(JSON.stringify({ results: []}))
}