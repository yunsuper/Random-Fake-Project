const express = require("express");
const router = express.Router();
router.use(express.json());

const { faker } = require("@faker-js/faker/locale/ko");

function createRandomUser() {
    // faker.string.numeric() 사용해 원하는 자릿수 숫자만 생성
    const middleDigits = faker.string.numeric(4);
    const lastDigits = faker.string.numeric(4)

    // 템플릿 리터럴을 사용 '010' 고정 
    const koreanPhoneNumber = `010-${middleDigits}-${lastDigits}`;

    const koreanLastName = faker.person.lastName(); 
    const koreanFirstName = faker.person.firstName(); 
    const koreanFullName = koreanLastName + koreanFirstName;

    return {
        email: faker.internet.email(),
        password: faker.internet.password(),
        fullname: koreanFullName,
        phone: koreanPhoneNumber,
    };
}

router.get("/", (req, res) => {
    const newUser = createRandomUser();
    return res.status(200).json(newUser);
});

router.get("/list", (req, res) => {
    let { num } = req.query
    num = parseInt(num);
    
    if(!num || num < 1) num = 1; //에러 안나도록 (기본값:1명 설정)  
    const newUsers = [];

    for (let i = 0; i < num; i++) {
        newUsers.push(createRandomUser());
    }
    return res.status(200).json(newUsers);
});

module.exports = router;