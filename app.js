var users = require("./users");

const bodyParser = require("body-parser");

const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", (req, res) => {
    res.send(users);
});

app.post("/", (req, res) => {
    if(!req.body.username || !req.body.password) {
        res.send("User information not found");
    } else {
        users.push({
            username: req.body.username,
            password: req.body.password
        });
        
        res.send("User added");
    }
});

app.put("/:username", (req, res) => {
    if(!req.body.username) {
        res.send("User information not found");
    } else {
        const filteredUser = users.filter((user) => user.username === req.params.username);

        if(filteredUser.length > 0) {
            let updatedUser = {
                ...filteredUser[0],
                username: req.body.username
            }

            users = users.filter((user) => user.username !== req.params.username);
            users.push(updatedUser);

            res.send("User updated!");
        } else {
            res.send("User not found");
        }
    }
});

app.delete("/:username", (req, res) => {
    const filteredUser = users.filter((user) => user.username === req.params.username);
    
    if(filteredUser.length > 0) {
        users = users.filter((user) => user.username !== req.params.username);
        res.send("User deleted!");
    } else {
        res.send("User not found");
    }
});

app.listen(8081, () => {
    console.log("Server is running on 8081" );
})