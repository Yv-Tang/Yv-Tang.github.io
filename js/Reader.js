var blogTitle = 'Reader';
var objID = '空';

window.onload = function () {
    // 获取blogTitle和objID
    const urlParams = new URLSearchParams(window.location.search);
    blogTitle = urlParams.get('blogTitle'); // 获取 'blogTitle' 参数
    objID = urlParams.get('objID'); // 获取 'objID' 参数

    // 显示参数
    document.getElementById('display').textContent = '传递的参数是: ' + blogTitle + ', ' + objID;

    // 修改标题
    document.title = blogTitle; // 将标题设置为 blogTitle
}