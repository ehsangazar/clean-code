// Bad
function makeAjaxCall(url) {
  // request and return promise
}

function makeHttpCall(url) {
  // request and return promise
}

class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === "ajaxAdapter") {
      return makeAjaxCall(url).then((response) => {
        // transform response and return
      });
    } else if (this.adapter.name === "nodeAdapter") {
      return makeHttpCall(url).then((response) => {
        // transform response and return
      });
    }
  }
}

const nodeAdapter = new NodeAdapter()
const httpRequest = new HttpRequester(nodeAdapter);
httpRequest.fetch()


// Good - OCP - Open Close Principle
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = "ajaxAdapter";
  }

  request(url) {
    return makeAjaxCall(url).then((response) => {
      // transform response and return
    });
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = "nodeAdapter";
  }

  request(url) {
      return makeHttpCall(url).then((response) => {
        // transform response and return
      });
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    this.adapter.request(url)
  }
}

const nodeAdapter = new NodeAdapter();
const httpRequest = new HttpRequester(nodeAdapter);
httpRequest.fetch();