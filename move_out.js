document.getElementById("closeBtn").onclick = function() {  
    var notification = document.getElementById("notification");  
    notification.style.transform = "translateX(100%)"; // �����ƶ�ԭͼ�δ�С��100%  
    let x = 2;  
    console.error(x); // ���: 2 
    setTimeout(function() {  
        notification.style.display = "none"; // 300���������Ԫ��  
    }, 300); // ��CSS��transitionʱ��ƥ��  
}