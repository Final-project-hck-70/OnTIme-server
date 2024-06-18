const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models/index");
const { hashPass } = require("../helpers/bcrypt");
const { comparePassword } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
require("dotenv").config();
let token;

beforeAll(async () => {
  const data = [
    {
      name: "Alice Johnson",
      role: "Admin",
      email: "alice.johnson@mail.com",
      password: "Admin",
      phoneNumber: 1234567890,
      avaUrl: "https://www.wisconline.co.uk/images/webp/A37-min.webp",
      position: "Head Department",
      CompanyId: 1,
    },
  ].map((el) => {
    el.createdAt = new Date();
    el.updatedAt = new Date();
    el.password = hashPass(el.password);
    return el;
  });

  await sequelize.queryInterface.bulkInsert("Users", data, {});
  token = createToken({ id: 1 });
});

//   describe("POST /register", () => {
// test("Succes post /register", async () => {
//   const dataToInsert = {
//   name: "Alice Johnson",
//   email: "alice.johnson@mail.com",
//   password: "Admin",
//   phoneNumber: 1234567890,
//   avaUrl: "https://www.wisconline.co.uk/images/webp/A37-min.webp",
//   position: "Head Department",
//   CompanyId: 1,
//   };
//   const response = await request(app).post("/register").send(dataToInsert);
//   const { body, status } = response;

//   expect(status).toBe(201);
//   expect(body).toBeInstanceOf(Object);
//   expect(body).toHaveProperty("id", 2);
//   expect(body).toHaveProperty("email", "faizal@gmail.com");
// });

//     test("Error post /register full name is empty", async () => {
//       const dataToInsert = {
//         fullName: "",
//         email: "faizal@gmail.com",
//         password: "12345",
//         role: "User",
//       };
//       const response = await request(app).post("/register").send(dataToInsert);
//       const { body, status } = response;

//       expect(status).toBe(400);
//       expect(body).toBe("Full name is required!");
//     });

//     test("Error post /register full name not provided", async () => {
//       const dataToInsert = {
//         email: "faizal@gmail.com",
//         password: "12345",
//         role: "User",
//       };
//       const response = await request(app).post("/register").send(dataToInsert);
//       const { body, status } = response;

//       expect(status).toBe(400);
//       expect(body).toBe("Full name is required!");
//     });

//     test("Error post /register email is empty", async () => {
//       const dataToInsert = {
//         fullName: "faizal",
//         email: "",
//         password: "12345",
//         role: "User",
//       };
//       const response = await request(app).post("/register").send(dataToInsert);
//       const { body, status } = response;

//       expect(status).toBe(400);
//       expect(body).toBe("Email is required!");
//     });

//     test("Error post /register email not provided", async () => {
//       const dataToInsert = {
//         fullName: "faizal",
//         password: "12345",
//         role: "User",
//       };
//       const response = await request(app).post("/register").send(dataToInsert);
//       const { body, status } = response;

//       expect(status).toBe(400);
//       expect(body).toBe("Email is required!");
//     });

//     test("Error post /register incorrect email format ", async () => {
//       const dataToInsert = {
//         fullName: "faizal",
//         email: "qwerty",
//         password: "12345",
//         role: "User",
//       };
//       const response = await request(app).post("/register").send(dataToInsert);
//       const { body, status } = response;

//       expect(status).toBe(400);
//       expect(body).toBe("Invalid email format!");
//     });

//     test("Error post /register email must be unique ", async () => {
//       const dataToInsert = {
//         fullName: "faizal",
//         email: "faizal@gmail.com",
//         password: "12345",
//         role: "User",
//       };
//       const response = await request(app).post("/register").send(dataToInsert);
//       const { body, status } = response;

//       expect(status).toBe(400);
//       expect(body).toBe("email must be unique");
//     });

//     test("Error post /register password is empty", async () => {
//       const dataToInsert = {
//         fullName: "faizal",
//         email: "faizal@gmail.com",
//         password: "",
//         role: "User",
//       };
//       const response = await request(app).post("/register").send(dataToInsert);
//       const { body, status } = response;

//       expect(status).toBe(400);
//       expect(body).toBe("Password is required!");
//     });

//     test("Error post /register password not provided", async () => {
//       const dataToInsert = {
//         fullName: "faizal",
//         email: "faizal@gmail.com",
//         role: "User",
//       };
//       const response = await request(app).post("/register").send(dataToInsert);
//       const { body, status } = response;

//       expect(status).toBe(400);
//       expect(body).toBe("Password is required!");
//     });

//     test("Error post /register password is less than 5", async () => {
//       const dataToInsert = {
//         fullName: "faizal",
//         email: "faizal@gmail.com",
//         password: "1234",
//         role: "User",
//       };
//       const response = await request(app).post("/register").send(dataToInsert);
//       const { body, status } = response;

//       expect(status).toBe(400);
//       expect(body).toBe("Password minimum length is 5 characters!");
//     });
//   });

describe("POST /login", () => {
  test("sucess login", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: "alice.johnson@mail.com", password: "Admin" });

    // console.log(response);
    const { body, status } = response;
    //token = body["access_token"];
    // console.log(token);
    expect(status).toBe(200);

    expect(body).toBeInstanceOf(Object);
    expect(body).toHaveProperty("token", expect.any(String));
  });
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});
