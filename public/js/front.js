const rowCnt = 4;
const columnCnt = 1;

for (let i = 0; i < rowCnt; i++) {
  document.write("<tr>");
  for (let j = 0; j < columnCnt; j++) {
    document.write(`<td id="registration_order${i}"></td>`);
    document.write("<th  style='text-align:center;'>");
    document.write(`<a id="script${i}" href='./member_confirmation.html'></a>`);
    document.write("</th>");
    document.write(`<td id="user_id${i}"></td>`);
    document.write(`<td id="registration_date${i}"></td>`);
  }

  document.write("</tr>");
}
