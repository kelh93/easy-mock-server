export default {
  url: "/save",
  method: "POST",
  status: 200,
  headers: {
    "Content-type": "text/plain;chartset=utf-8",
  },
  body: {
    success: true,
    errorCode: 200,
    errorMessage: "成功",
    obj: [
      {name: "bob", age:  18},
      {name: "annie", age:  20},
    ],
  },
};