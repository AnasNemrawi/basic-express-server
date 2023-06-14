"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

describe("Test Server", () => {
    test("Person route with any thing in the name query", async () => {
        const response = await request.get("/person?name=mo");
        expect(response.status).toEqual(200);
    });
    test("Person route with nothing is the name query", async () => {
        const response = await request.get("/person?name=");
        expect(response.status).toEqual(500);
    });
    test("page not found", async () => {
        const response = await request.get("/test");
        expect(response.status).toEqual(404);
    });
});