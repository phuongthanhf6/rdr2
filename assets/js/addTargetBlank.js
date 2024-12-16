// Lấy tất cả các thẻ <a> trong phần tử có class="content"
const links = document.querySelectorAll(".content a");

// Duyệt qua các liên kết và thêm thuộc tính target="_blank"
links.forEach((link) => {
    link.setAttribute("target", "_blank");
});
