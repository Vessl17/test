document.getElementById("closeBtn").onclick = function() {  
    var notification = document.getElementById("notification");  
    notification.style.transform = "translateX(100%)"; // 向右移动原图形大小的100%  
    let x = 2;  
    console.error(x); // 输出: 2 
    setTimeout(function() {  
        notification.style.display = "none"; // 300毫秒后隐藏元素  
    }, 300); // 与CSS中transition时间匹配  
}