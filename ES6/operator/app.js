// Proxy

const userObj = {
  username: "name",
  age: 23,
  password: 0000,
};

const userFilter = {
  get: (target, prop, receiver) => {
    return prop === "password" ? `${"*".repeat(5)}` : target[prop];
  },
  set: () => {
    console.log("Somebody wrote something");
  },
  delete: (target, prop) => {
    if (prop === "password") {
      return;
    } else {
      delete target[prop];
    }
  },
};

const filter = new Proxy(userObj, userFilter);
