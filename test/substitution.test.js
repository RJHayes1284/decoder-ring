// Write your tests here!
const {substitution} = require("../src/substitution")
const {expect} = require("chai")

describe("substitution",() => {
    it("should return false when alphabet is not 26 characters", () => {
      const input = "thinkful"  
      const alphabet = "$wae&zrdxtfcygvuhbijnokmp"
        const actual = substitution(input, alphabet, encode = true)
        const expected = false

        expect(actual).to.be.false
    })
})
         