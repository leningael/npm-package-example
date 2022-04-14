const messages = [
    "Lenin",
    "Ana",
    "Pablo",
    "Carlos",
    "Irvin",
    "Diana",
    "Jonathan",
    "Dalia",
    "Jeroan",
    "Mario"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = { randomMsg };