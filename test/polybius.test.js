// Write your tests here!
const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius", () => {
  it("should return false when decoding if odd number of characters is entered", () => {
    const input = "443242335212541";
    const actual = polybius(input, (encode = false));
    const expected = false;

    expect(actual).to.be.false;
  });

  it("should encode each letter of the input by transforming it to a two digit number", () => {
    const input = "thinkful";
    const actual = polybius(input, (encode = true));
    const expected = "4432423352125413";
    expect(actual).to.eql(expected);
  });

  it("should return 42 for both i and j", () => {
    const input = "i/j";
    const actual = polybius("i", (encode = true));
    const expected = "42";
    expect(actual).to.eql(expected);
    const actual1 = polybius("j", (encode = true));
    expect(actual1).to.eql(expected);
  });

  it("should ignore capital letters", () => {
    const input = "THINKFUL";
    const actual = polybius(input, (encode = true));
    const expected = "4432423352125413";

    expect(actual).to.eql(expected);
  });

  it("should maintain spaces in the message after encoding", () => {
    const input = "hello there";
    const actual = polybius(input, (encode = true));
    const expected = "3251131343 4432512451";

    expect(actual).to.eql(expected);
  });

  it("should maintain spaces in the message after decoding", () => {
    const input = "3251131343 4432512451";
    const actual = polybius(input, (encode = false));
    const expected = "hello there";

    expect(actual).to.eql(expected);
  });
});
