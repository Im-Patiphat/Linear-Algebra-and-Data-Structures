let queue = [];

document.getElementById("enqueueBtn").addEventListener("click", () => {
  const customerName = document.getElementById("customerName").value;

  if (customerName) {
    if (queue.length < 10) {
      queue.push(customerName);
      document.getElementById("customerName").value = ""; // Clear the input
      updateQueueDisplay();
    } else {
      alert("The queue is full. No more customers can join.");
    }
  }
});

document.getElementById("dequeueBtn").addEventListener("click", () => {
  dequeueCustomer();
});

function dequeueCustomer() {
  if (queue.length > 0) {
    const removedCustomer = queue.shift();
    updateQueueDisplay();

    // ส่งแจ้งเตือนลูกค้าที่ถูกลบออกจากคิวผ่านไลน์
    sendLineNotification(`ลูกค้าถัดไป: ${removedCustomer} ได้ถูกเรียกแล้ว`);
  } else {
    // ถ้าไม่มีลูกค้าในคิว
    sendLineNotification("ไม่มีลูกค้าเหลือในคิว.");
  }
}


// ฟังก์ชันสำหรับส่งข้อความผ่าน Line Messaging API
function sendLineNotification(message) {
  const lineAccessToken = "kbXsnEAqw3a2Naj5S0H52TOfoQrhNao7LS3GIopKRIW"; // ใส่ Access Token ที่ได้จาก Line Developer Console
  const lineEndpoint = "https://api.line.me/v2/bot/message/multicast";

  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${lineAccessToken}`,
  });

  const body = JSON.stringify({
    to: ["0917987860th"], // ระบุ ID ของผู้ใช้ Line ที่คุณต้องการส่งแจ้งเตือน
    messages: [
      {
        type: "text",
        text: message,
      },
    ],
  });

  fetch(lineEndpoint, {
    method: "POST",
    headers: headers,
    body: body,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}


function updateQueueDisplay() {
  const queueList = document.getElementById("queueList");
  const queueStatus = document.getElementById("queueStatus");
  const queueCount = document.getElementById("queueCount");

  queueList.innerHTML = "<h3>Queue</h3>";
  queue.forEach((customer, index) => {
    const customerId = `customer${index + 1}`;
    queueList.innerHTML += `<p id="${customerId}" ondblclick ="removeCustomer(${index})">${
      index + 1
    }. ${customer}</p>`;
  });

  queueCount.textContent = queue.length; 
}

function removeCustomer(index) {
  queue.splice(index, 1);
  updateQueueDisplay();
}
