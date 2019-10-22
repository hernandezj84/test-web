const expect = require("expect");

describe("SimpleCalculator web page", () => {
  it("should have the right title", () => {
    browser.url("http://localhost:4200");
    const title = browser.getTitle();
    expect(title).toBe("SimpleCalculator");
  });
  test("sum two values 1+1 should be 2", () => {
    $("#operation")
      .setValue("1+1")
      .then(() => {
        $("#calcButton")
          .click()
          .then(() => {
            $("#result")
              .getValue()
              .then(value => {
                expect(value).toBe("2");
              });
          });
      });
  });
});
