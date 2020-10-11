const store = {}

// No Coupling - Bad
function aNoCoupling() { store.foo = 'x' }
function bNoCoupling() { store.bar = 'y' }
aNoCoupling()
bNoCoupling


// Tight Coupling - Bad
function aTightCoupling() { 
  store.counter = (store.counter || 0) + 1 
}
function bTightCoupling() { 
  store.counter = (store.counter || 0) + 10 
}
aTightCoupling()
bTightCoupling()


// Loose Coupling - Good
function aLooseCoupling(store) { 
  return Object.assign({}, store, { foo: 'x' }) 
}
function bLooseCoupling(store) { 
  return Object.assign({}, store, { bar: 'y' }) 
}

const store0 = {}
const store1 = aLooseCoupling(store0)
const store2 = bLooseCoupling(store1)