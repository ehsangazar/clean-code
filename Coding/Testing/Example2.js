// Bad
const button = new button();
describe("Button", () => {
  it("handles hover state", () => {
    button.hover()
    assert.equal(button.className, 'hovered');
  });
  it("handles click state", () => {
    button.click();
    assert.equal(button.className, "clicked");
  });
  it("handles loading state", () => {
    button.busy()
    assert.equal(button.className, "busy");
  });
});

// Good
describe("Button", () => {
  it("handles hover state", () => {
    const button = new button();
    button.hover();
    assert.equal(button.className, "hovered");
  });
  it("handles click state", () => {
    const button = new button();
    button.click();
    assert.equal(button.className, "clicked");
  });
  it("handles loading state", () => {
    const button = new button();
    button.busy();
    assert.equal(button.className, "busy");
  });
});