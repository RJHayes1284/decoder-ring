// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar", () => {
  it("should return false if shift equal to 0, less than -25, or greater than 25", () => {
    const input = "message";
    const actual = caesar(input, 0);
    const expected = false;

    expect(actual).to.be.false;
  });

  it("should encode input according to shift when encode = true", () => {
    const input = "message";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "phvvdjh";
    expect(actual).to.eql(expected);
  });

  it("should decode by using the reverse of the shift when encode = false", () => {
    const input = "phvvdjh";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = "message";
    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters", () => {
    const input = "MESSAGE";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "phvvdjh";

    expect(actual).to.eql(expected);
  });

  it("handles shifts that go past the end of the alphabet", () => {
    const input = "zebra magazine";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "cheud pdjdclqh";

    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message after encoding", () => {
    const input = "hello there";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "khoor wkhuh";

    expect(actual).to.eql(expected);
  });

  it("should maintain spaces in the message after decoding", () => {
    const input = "khoor wkhuh";
    const shift = -3;
    const actual = caesar(input, shift);
    const expected = "hello there";

    expect(actual).to.eql(expected);
  });
});
