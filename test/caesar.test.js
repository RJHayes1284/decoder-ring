// Write your tests here!
const {caesar} = require("../src/caesar")
const {expect} = require("chai")

describe("caesar",() => {
    it("should return false if shift equal to 0, less than -25, or greater than 25", () => {
        const input = "message"
        const actual = caesar(input, 0)
        const expected = false

        expect(actual).to.be.false
    })
    it("should encode input according to shift when encode = true", () => {
        const input = "message"
        const shift = 3
        const actual = caesar(input, shift)
        const expected = "phvvdjh"
        expect(actual).to.eql(expected)
    })
    it("should decode by using the reverse of the shift when encode = false", () =>{
        const input = "phvvdjh"
        const shift = -3
        const actual = caesar(input, shift)
        const expected = "message"
        expect(actual).to.eql(expected)
    })
    
})
