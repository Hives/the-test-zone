## The Test Zone

My JavaScript testing framework.

### Installation

1. Clone repo
2. Open `SpecRunner.html` to see tests running

### How it works

In `SpecRunner.html` you will need to include `lib/the-test-zone.js`, your test spec and your app files. The Test Zone will then run the tests and display the results. Check out `spec/the-test-zone-spec.js` for examples.

Implemented:
- `describe` blocks
- `it` blocks - these are the actual tests
- `expect(actual)` returns an object which responds to:
    - `.toBe(expected)` - compares `actual` with `expected` using `===`
    - `.toContain(expected)` - compares `actual` with `expected` using `.includes()`

Not implemented:
- `beforeEach` blocks
