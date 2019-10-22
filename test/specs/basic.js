const expect = require("expect");

describe("SimpleCalculator web page", () => {
  it("should have the right title", () => {
    browser.url("http://localhost:4200");
    const title = browser.getTitle();
    expect(title).toBe("SimpleCalculator");
  });
});
