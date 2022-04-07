const welcome = (req, res) => {
    res.send("<h1>Hello, Ghana!<h1>");
}

const greet = (req, res) => {
    res.send("<h1>Hello ✌, Fellow Programmers<h1>");
}

module.exports = {
    welcome,
    greet,
};