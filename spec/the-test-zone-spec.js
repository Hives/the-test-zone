(function() {

  describe("Some basic matchers", function() {
    describe("Just another describe block", function() {
      describe("toBe", function() {
        it("expect(true).toBe(true)", function() {
          expect(true).toBe(true);
        })

        it("expect('hello').toBe('hello')", function() {
          expect('hello').toBe('hello');
        })

        it("test with a true and a false expectation - expect(18).toBe(19) and expect(true).toBe(true)", function() {
          expect(18).toBe(19);
          expect(true).toBe(true);
        })

        it("expect(19).toBe(19)", function() {
          expect(19).toBe(19);
        })
      })
    })

    describe("toContain", function() {
      it("expect([0,'one',2,undefined]).toContain(2)", function() {
        expect([0, 'one', 2, undefined]).toContain(2);
      })

      it("expect('hello').toContain('e')", function() {
        expect('hello').toContain('e');
      })
    })
  })

  describe("Testing a beforeEach block", function() {
    var a = 10
    var b = []

    beforeEach(function() {
      a = 20
      b = ["hello"]
    })

    it("a should be 20", function() {
      expect(a).toBe(20)
    })

    it("b should contain 'hello'", function() {
      expect(b).toContain('hello')
    })
  })

})()
