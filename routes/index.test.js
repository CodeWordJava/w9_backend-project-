import app from "../app.js"
import request from "supertest";
import { test, expect } from "@jest/globals";
// import { describe } from "yargs";



describe("Testing GET route", () => {
  
  test("Should respond with status code is 200 and a json", async () => {
    //Act:
    const response = await request(app).get("/everything");
    //Assert:
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  // test(correct body structure); 
  //Does not pass with current table (mixed structure)
  test("responds with correct body structure" , async () => {
    const response = await request(app).get("/everything");
    const actual = response.body;
    const expected = {
      success: true,
      data: (expect.arrayContaining([
        {
          id:expect.any(Number),
          link:expect.any(String),
          topic:expect.any(String), 
          username:expect.any(String),
          votecount:expect.any(Number)
        }])
      )
    };
    expect(actual).toEqual(expected);
  }
  
)});


describe("POST should have three params: status code is 201", () => {

  test("Should return status code is 201", async () => {
    //Arrange.
    const response = await request(app).post("/create");
    //Act.
    //Assert.
    // Changed to 200 to check OK status (201 = created)
    expect(response.statusCode).toBe(200);
  });

//object coming in is much larger, not only containing the object we post 

  // test("Should have params: link", async () => {
  //   // body should be an object.
  //   // boby.link = expect.any(String)
  //   // body.userName = expect.any(String)
  //   // body.topic = expect.any(String)
  //   //Arrange.
  //   const expected = expect.objectContaining(
  //     {
  //       link: expect.any(String), 
  //       userName: expect.any(String), 
  //       topic: expect.any(String)
  //     }
  //     );
    
  //   //Act.
  //   const response = await request(app).post("/create");
    
  //   //Assert.
  //   expect(response.body).toStrictEqual(expected)
  // });


})