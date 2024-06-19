// tests/index.error.js

const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models");
const { hashPass } = require("../helpers/bcrypt");
const { createToken } = require("../helpers/jwt");
require("dotenv").config();

let token;

beforeAll(async () => {
  const data = [
    {
      name: "Alice Johnson",
      role: "Admin",
      email: "alice.johnson@mail.com",
      password: hashPass("Admin"),
      phoneNumber: 1234567890,
      avaUrl: "https://www.wisconline.co.uk/images/webp/A37-min.webp",
      position: "Head Department",
      CompanyId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  await sequelize.queryInterface.bulkInsert("Users", data, {});
  token = createToken({ id: 1 });
});

describe("Error Handling Tests", () => {
  test("Login with incorrect password", async () => {
    const response = await request(app)
      .post("/login")
      .send({ email: "alice.johnson@mail.com", password: "WrongPassword" });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", "Email/Password Invalid");
  });

  test("Create user without email", async () => {
    const response = await request(app)
      .post("/add-user")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Bob Johnson",
        role: "Employee",
        email: "", // No email provided
        password: "Employee",
        phoneNumber: 1234567891,
        avaUrl: "https://www.wisconline.co.uk/images/webp/A37-min.webp",
        position: "Employee",
        CompanyId: 1,
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message", "Email required");
  });

  test("Access protected route with invalid token", async () => {
    const response = await request(app)
      .get("/users/profile/me")
      .set("Authorization", "Bearer InvalidToken");

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", "Invalid Token");
  });

  test("Access admin route as non-admin", async () => {
    const nonAdminToken = createToken({ id: 2, role: "Employee" }); // Assuming user with id 2 is not an admin

    const response = await request(app)
      .post("/add-user") // Replace with an actual admin route
      .set("Authorization", `Bearer ${nonAdminToken}`);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message", "Invalid Token");
  });
});

test("Simulate Internal Server Error", async () => {
  // Mocking the User model to throw an error to simulate Internal Server Error
  jest.spyOn(require("../models").User, "findByPk").mockImplementation(() => {
    throw new Error("Database Connection Error");
  });

  const response = await request(app)
    .get("/users/profile/me")
    .set("Authorization", `Bearer ${token}`);

  expect(response.status).toBe(500);
  expect(response.body).toHaveProperty("message", "Internal Server Error");

  // Restore the original implementation after the test
  require("../models").User.findByPk.mockRestore();
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});
