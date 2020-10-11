// Bad
const addItemToCart = (cart, item) => {
    cart.push({ item, date: Date.now() });
};

// Good
const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};