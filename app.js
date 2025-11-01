const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

const { faker } = require("@faker-js/faker/locale/ko");
// 한국이름 생성

app.listen(process.env.PORT);


const fakeUser = require("./routes/fakeUser");
app.use("/fake/users", fakeUser);
        
