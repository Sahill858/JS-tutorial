// Singleton
// Object.create

// Object Literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Sahil",
  "full name": "Sahil Sahu",
  [mySym]: "mykey1",
  age: 23,
  location: "Raipur",
  email: "sahil@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "sahil@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "sahil@gemini.com";
// console.log(JsUser)

JsUser.greeting = function () {
  console.log("Hello Js User");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js User,${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
