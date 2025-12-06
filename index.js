import express from "express";
const app = express();
app.use(express.json());
const port = 8000;

let passwod = "1222"

app.use((req, res, next) => {
    if (req.body.pass != passwod) {
        res.send("Password does not match");
    }
    next();
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send({ success: true });

})

app.listen(port, () => {
    console.log(`server is stated at ${port}`);

})


