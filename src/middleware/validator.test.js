const { mockRequest, mockResponse } = require("jest-mock-req-res");
const validator = require("./validator");

describe("Validator Middleware", () => {
    test("should call next() if name is present in the query string", () => {
        const req = mockRequest({
            query: { name: "mohannad" },
        });
        const res = mockResponse();
        const next = jest.fn();

        validator(req, res, next);

        expect(next).toHaveBeenCalled();
    });
    test("should call next() with error message if name in the query is not correct", () => {
        const req = mockRequest({
            query: { name: "333" },
        });
        const res = mockResponse();
        const next = jest.fn();

        validator(req, res, next);

        expect(next).toHaveBeenCalledWith("please provide a correct name");
    });
    test("should call next() with error message if name is not present in the query string", () => {
        const req = mockRequest({
            query: {},
        });
        const res = mockResponse();
        const next = jest.fn();

        validator(req, res, next);

        expect(next).toHaveBeenCalledWith("please provide a correct name");
    });
});