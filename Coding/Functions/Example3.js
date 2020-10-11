// Bad
const menuConfig = {
    title: null,
    body: "Bar",
    buttonText: null,
    cancellable: true
};

function createMenu(config) {
    config.title = config.title || "Foo";
    config.body = config.body || "Bar";
    config.buttonText = config.buttonText || "Baz";
    config.cancellable =
        config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);

// Good
const menuConfig = {
    title: null,
    body: "Bar",
    buttonText: null,
    cancellable: true
};

function createMenu(config) {
    const newConfig = {
        ...config,
        title: config.title || "Foo",
        body: config.body || "Bar",
        buttonText: config.buttonText || "Baz",
        cancellable: config.cancellable !== undefined ? config.cancellable : true;
    }
    return newConfig
}

createMenu(menuConfig);