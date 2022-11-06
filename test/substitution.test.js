// Write your tests here!
const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution", () => {
  it("should return false when alphabet is not 26 characters", () => {
    const input = "thinkful";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmp";
    const actual = substitution(input, alphabet, (encode = true));
    const expected = false;

    expect(actual).to.be.false;
  });

  it("correctly translates the given phrase, based on the alphabet given", () => {
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet, (encode = true));
    const expected = "y&ii$r&";

    expect(actual).to.eql(expected);
  });

  it("returns false if there are duplicate characters in the alphabet given", () => {
    const input = "thinkful";
    const alphabet = "abcabcabcabcabcabcabcabcyz";
    const actual = substitution(input, alphabet, (encode = true));
    const expected = false;

    expect(actual).to.be.false;
  });

  it("should maintain spaces in the message after encoding", () => {
    const input = "hello there";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet, (encode = true));
    const expected = "d&ccv jd&b&";

    expect(actual).to.eql(expected);
  });

  it("should maintain spaces in the message after decoding", () => {
    const input = "d&ccv jd&b&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet, (encode = false));
    const expected = "hello there";

    expect(actual).to.eql(expected);
  });

  it("should ignore capital letters", () => {
    const input = "THINKFUL";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const actual = substitution(input, alphabet, (encode = true));
    const expected = "jdxgfznc";

    expect(actual).to.eql(expected);
  });
});
