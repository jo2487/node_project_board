const fetch = require("node-fetch");

const config = {
  method: "get",
};
fetch("http://localhost:8080/api/list", config)
  .then((res) => res.json())
  .then((data) => {
    // var str = document.getElementById("demo1");
    // str.innerHTML = data[0].user_id;
    // document.getElementById("demo1").innerHTML = data[0].user_id;
    console.log(data);
  })
  .catch((error) => console.log("fetch 에러 !"));
