export default {
  url: "/example/list",
  method: "GET",
  status: 200,
  headers: {
    "Content-type": "text/plain;chartset=utf-8",
  },
  body: {
    success: true,
    errorCode: 200,
    errorMessage: "成功",
    obj: [
      {name: "苹果", value: "apple"},
      {name: "橘子", value: "orange"},
    ],
  },
}