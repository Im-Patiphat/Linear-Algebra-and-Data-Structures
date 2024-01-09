const SE6545 = [
    ["Boy", "Perth", "eak", "", "San", "Tan", "Tin", ""],
    ["Oat", "Guy", "Best", "K", "", "Ohm", "Vick", ""],
    ["Four", "P", "Aum", "Earth", "Oke", "", "", ""],
    ["Ter", "Bonus", "Pim", "Min", "", "Jead", "Mind", "Ball"]
  ];
  
  // เริ่มต้นสร้าง HTML สำหรับตาราง
  document.write("<table border='1'>");
  
  // ใช้ลูปสร้างแถว
  for (let row = 0; row < SE6545.length; row++) {
    document.write("<tr>");
  
    // ใช้ลูปสร้างเซลล์ในแต่ละแถว
    for (let col = 0; col < SE6545[row].length; col++) {
      // ให้สีข้อความเป็นดำ
      let textColor = 'black';

      // สีแดง
      if ((row === 2) && (col === 2)) {
        textColor = 'red';
      }
      if ((row === 3 ) &&  (col === 0 || col === 5 || col === 7)  ) {
        textColor = 'red';
      }

      //สีฟ้า
      if ((row === 0  ) && (col === 6) ) {
        textColor = 'blue';
      }
      if ((row === 1 ) && (col === 5) ) {
        textColor = 'blue';
      }
      if ((row === 2) && (col === 0 || col === 1 || col === 3 || col === 4) ) {
        textColor = 'blue';
      }
      if ((row === 3 ) &&  (col === 1 || col === 2 || col === 3)  ) {
        textColor = 'blue';
      }

      // เขียน HTML สำหรับเซลล์
      document.write("<td style='color:" + textColor + "'>" + SE6545[row][col] + "</td>");
    }
    
    // ปิดแถว
    document.write("</tr>");
  }
  
  
  // ปิดตาราง
  document.write("</table>");
  