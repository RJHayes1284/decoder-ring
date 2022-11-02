// Write your tests here!
const {polybius} = require("../src/polybius")
const {expect} = require("chai")

describe("polybius",() => {
    it("should return false when decoding if odd number of characters is entered", () => {
        const input = "443242335212541"
        const actual = polybius(input, encode = false)
        const expected = false

        expect(actual).to.be.false
    })
  
    it("should encode each letter of the input by transforming it to a two digit number", () => {
        const input = "thinkful"
        const actual = polybius(input, encode = true)
        const expected = "4432423352125413"
        expect(actual).to.eql(expected)
    })
  
    it("should return 42 for both i and j", () =>{
        const input = "i/j"
        console.log({input})
        const actual = polybius("i", encode = true)
        const expected = "42"
        expect(actual).to.eql(expected)
       const actual1 = polybius("j", encode = true)
       expect(actual1).to.eql(expected)
    })
    
})
