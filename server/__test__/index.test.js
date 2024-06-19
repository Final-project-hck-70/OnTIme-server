const request = require("supertest");
const { Attendance } = require("../models/index");
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

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});

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


describe("POST /add-user", () => {
  test("should create a new user", async () => {
    const response = await request(app)
      .post("/add-user")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Bob Johnson",
        role: "Employee",
        email: "bob.johnson@mail.com",
        password: "Employee",
        phoneNumber: 1234567891,
        avaUrl: "https://www.wisconline.co.uk/images/webp/A37-min.webp",
        position: "Employee",
        CompanyId: 1,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name", "Bob Johnson");
    expect(response.body).toHaveProperty("email", "bob.johnson@mail.com");
  });
});

describe("GET /users/profile/me", () => {
  test("Success fetching logged-in user data", async () => {
    const response = await request(app)
      .get("/users/profile/me")
      .set("Authorization", `Bearer ${token}`);

    const { body, status } = response;
    expect(status).toBe(200);
    expect(body).toBeInstanceOf(Object);
    expect(body).toHaveProperty("id", 1);
    expect(body).toHaveProperty("name", "Alice Johnson");
    expect(body).toHaveProperty("email", "alice.johnson@mail.com");
    expect(body).toHaveProperty("Company");
    expect(body.Company).toHaveProperty("name", "Hacktiv8 Inc.");
  });
});

describe("GET /users", () => {
  test("should get all users", async () => {
    const response = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("GET /users/:id", () => {
  test("should get user by id", async () => {
    const response = await request(app)
      .get("/users/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
  });
});

describe("POST /attendances", () => {
  test("should create a new attendance record", async () => {
    const response = await request(app)
      .post("/attendances")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("UserId");
    expect(response.body).toHaveProperty("clockIn");
    expect(response.body).toHaveProperty("attendanceStatus");
  });
});

describe("PATCH /attendances/:id", () => {
  test("should update the clock out time of the attendance record", async () => {
    const response = await request(app)
      .patch("/attendances/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("UserId");
    expect(response.body).toHaveProperty("clockOut");
  });
});

describe("GET /attendances", () => {
  test("should get all attendance records", async () => {
    const response = await request(app)
      .get("/attendances")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("PATCH /attendances/update/:id", () => {
  test("should update the attendance status of the attendance record", async () => {
    const response = await request(app)
      .patch(`/attendances/update/1`)
      .set("Authorization", `Bearer ${token}`)
      .send({ status: "absent" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("attendanceStatus", "absent");
  });
});

describe("POST /leaves", () => {
  test("should create a new leave", async () => {
    const response = await request(app)
      .post("/leaves")
      .set("Authorization", `Bearer ${token}`)
      .send({
        from: "2022-01-01",
        to: "2022-01-02",
        reason: "Vacation",
        DelegateUserId: 1,
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("from", "2022-01-01T00:00:00.000Z");
    expect(response.body).toHaveProperty("to", "2022-01-02T00:00:00.000Z");
    expect(response.body).toHaveProperty("reason", "Vacation");
    expect(response.body).toHaveProperty("UserId");
    expect(response.body).toHaveProperty("DelegateUserId", 1);
    expect(response.body).toHaveProperty("leaveStatus", "Pending");
  });
});

describe("GET /leaves", () => {
  test("should get all leaves", async () => {
    const response = await request(app)
      .get("/leaves")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("GET /leaves/user/:userId", () => {
  test("should get user leaves", async () => {
    const response = await request(app)
      .get("/leaves/user/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("PATCH /leaves/:id", () => {
  test("should update the leave status", async () => {
    const response = await request(app)
      .patch("/leaves/1")
      .set("Authorization", `Bearer ${token}`)
      .send({ leaveStatus: "Approved" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("leaveStatus", "Approved");
  });
});

describe("POST /overtimes", () => {
  test("should create a new overtime record", async () => {
    const response = await request(app)
      .post("/overtimes")
      .set("Authorization", `Bearer ${token}`)
      .send({
        overtimeDate: "2022-01-01",
        overtimeDuration: 60,
        overtimeReason: "Extra work",
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty(
      "overtimeDate",
      "2022-01-01T00:00:00.000Z"
    );
    expect(response.body).toHaveProperty("overtimeDuration", 60);
    expect(response.body).toHaveProperty("overtimeReason", "Extra work");
    expect(response.body).toHaveProperty("overtimeStatus", "Pending");
  });
});

describe("GET /overtimes", () => {
  test("should get all overtime records", async () => {
    const response = await request(app)
      .get("/overtimes")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("GET /overtimes/user/:userId", () => {
  test("should get user overtime records", async () => {
    const response = await request(app)
      .get("/overtimes/user/1")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});

describe("PATCH /overtimes/:id", () => {
  test("should update the overtime status", async () => {
    const response = await request(app)
      .patch("/overtimes/1")
      .set("Authorization", `Bearer ${token}`)
      .send({ overtimeStatus: "Approved" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", 1);
    expect(response.body).toHaveProperty("overtimeStatus", "Approved");
  });
});

afterAll(async () => {
  await sequelize.queryInterface.bulkDelete("Users", null, {
    truncate: true,
    cascade: true,
    restartIdentity: true,
  });
});
