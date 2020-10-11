// Bad
if (fsm.state === "fetching" && isEmpty(listNode)) {
  // ...
}

// Good

function shouldShowSpinner(fsm, listNode) {
  return fsm.state === "fetching" && isEmpty(listNode);
}

if (shouldShowSpinner()){
    
}