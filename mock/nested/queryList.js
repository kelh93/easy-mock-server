export default {
  url: "/list",
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
      {name: "111", value: "0101"},
      {name: "222", value: "2020"},
    ],
  },
}