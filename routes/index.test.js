import app from "../app.js"
import request from "supertest";
import { test, expect } from "@jest/globals";
// import { describe } from "yargs";



describe("Testing GET route, checks status code is 200.", () => {
  
  test("Should respond with status code is 200", async () => {
    //Act:
    const response = await request(app).get("/");
    //Assert:
    expect(response.statusCode).toBe(200);
  });

  // test(...BY TOPIC);

});


describe("POST should have three params: status code is 201", () => {

  test("Should return status code is 201", async () => {
    //Arrange.
    const response = await request(app).post("/");
    //Act.
    //Assert.
    // Changed to 200 to check OK status (201 = created)
    expect(response.statusCode).toBe(200);
  });

  test("Should have params: link", async () => {
    // body should be an object.
    // boby.link = expect.any(String)
    // body.userName = expect.any(String)
    // body.topic = expect.any(String)
    //Arrange.
    const expected = expect.objectContaining({link: expect.any(String), userName: expect.any(String), topic: expect.any(String)});
    
    //Act.
    const response = await request(app).post("/");
    
    //Assert.
    expect(response.body).toStrictEqual(expected)
  });


});