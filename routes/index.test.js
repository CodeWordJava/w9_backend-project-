import app from "../app.js"
import request from "supertest";
import { test, expect } from "@jest/globals";





describe("Testing GET route, checks status code is 200.", () => {
  
  test("Should respond with status code is 200", async () => {
    //Act:
    const response = await request(app).get("/");
    //Assert:
    expect(response.statusCode).toBe(200)
  });
});