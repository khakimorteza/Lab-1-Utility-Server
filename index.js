const express = require("express");
const app = express();

app.get("/math/:operator", (req, res) => {
  let obj = {};
  let operator = req.params.operator;
  let a = req.query.a;
  let b = req.query.b;
  obj.input = req.query;
  switch (operator) {
    case "add":
      obj.sumString = `${a} + ${b}`;
      obj.sum = parseInt(a) + parseInt(b);
      break;
    case "subtract":
      obj.subString = `${a} - ${b}`;
      obj.sum = parseInt(a) - parseInt(b);
      break;
    case "multiply":
      obj.subString = `${a} * ${b}`;
      obj.product = parseInt(a) * parseInt(b);
      // console.log(obj.product);
      break;
    case "divide":
      obj.divideString = `${a} / ${b}`;
      obj.divide = parseInt(a) / parseInt(b);
      break;
    default:
  }
  res.json(obj);
});

app.listen(3003, () => {
  console.log("you are listening to port 3003");
});
