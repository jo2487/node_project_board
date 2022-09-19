const db = require("../../database.js");

function check() {
  let ID = document.getElementById("exampleInputEmail1").value;
  let password = document.getElementById("exampleInputPassword1").value;
  let script = document.getElementById("script").value;
  // alert(ID.length)
  if (ID.length != 0 && password.length != 0 && script.length != 0) {
    alert("등록 완료"); // 모두 잘 쳐졌을 때 post로 데이터 보내야함 임시방편으로 코드 작성
  } else {
    if (ID.length == 0) {
      alert("ID를 입력해주세요!");
    } else if (password.length == 0) {
      alert("Password를 입력해주세요!");
    } else if (script.length == 0) {
      alert("내용을 입력해주세요!");
    }
  }
}
function update() {
  let script = document.getElementById("script").value;
  alert("수정 완료"); // 이전 script와 수정된 script 값이 다르면 수정 완료
}

function confirm_cancle() {
  let result = confirm("취소하시겠습니까?");
  if (result == true) {
    location.href = "/";
  } else {
    alert("다시 작성해주세요!");
  }
}

db.query("SELECT * FROM board_table", (error, rows, fields) => {
  if (error) throw error;
  console.log("User info is", rows);
  console.log(rows[0].user_id);
});
