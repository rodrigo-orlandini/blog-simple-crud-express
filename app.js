var users = require("./users");

const bodyParser = require("body-parser");

const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.status(200);
    res.send(users);
});

app.post("/", (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.status(400);
        res.send("Lefting user information.");
    } else {
        users.push({
            username: req.body.username,
            password: req.body.password
        });
        
        res.status(201);
        res.send("User added");
    }
});

app.put("/:username", (req, res) => {
    if(!req.body.username) {
        res.status(400);
        res.send("Lefting user information.");
    } else {
        const filteredUser = users.filter((user) => user.username === req.params.username);

        if(filteredUser.length > 0) {
            let updatedUser = {
                ...filteredUser[0],
                username: req.body.username
            }

            users = users.filter((user) => user.username !== req.params.username);
            users.push(updatedUser);

            res.status(200);
            res.send("User updated!");
        } else {
            res.status(404);
            res.send("User not found");
        }
    }
});

app.delete("/:username", (req, res) => {
    const filteredUser = users.filter((user) => user.username === req.params.username);
    
    if(filteredUser.length > 0) {
        users = users.filter((user) => user.username !== req.params.username);
        
        res.status(200);
        res.send("User deleted!");
    } else {
        res.status(404);
        res.send("User not found");
    }
});

app.listen(8081, () => {
    console.log("Server is running on 8081" );
})