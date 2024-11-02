const { Query, User } = AV;

AV.init({
    appId: "kSDqVFRjBHrwXqvwTXN8WM7b-gzGzoHsz",
    appKey: "mX6hrQ3f4nxt8mSp3B1pp3BO",
    serverURL: "https://ksdqvfrj.lc-cn-n1-shared.com",
});

var blogTitle;
var objID;

addEventListener('load', function () {

    // 获取blogTitle和objID
    // 实例http://127.0.0.1:5500/pages/Reader.html?blogTitle=%E8%BA%AB%E4%BB%BD%E9%AA%8C%E8%AF%81%E6%B5%8B%E8%AF%95&objID=6725f866cb437809e2d91b0c
    const urlParams = new URLSearchParams(window.location.search);
    // 如果结果为空显示error
    if (urlParams.get('blogTitle') == null || urlParams.get('objID') == null) {
        $('#title-box').innerHTML = 'Error400：未传入参数';
        return;
    }

    blogTitle = urlParams.get('blogTitle'); // 获取 'blogTitle' 参数
    objID = urlParams.get('objID'); // 获取 'objID' 参数

    // LeanCloud
    const query = new AV.Query("MarkDownPosts");
    query.get(objID)
        .then((post) => {
            // 修改界面标题
            document.title = blogTitle + '- Yv-Tang.github.io';
            // 显示文章标题
            $('#title').innerHTML = post.get('title');
            // 显示文章作者
            $('#author').innerHTML = post.get('author');
            // 显示文章内容
            $('#content').innerHTML = marked(post.get('content'));
            // 显示文章发布时间
            $('#date').innerHTML = post.get('updatedAt');

        }, (error) => {
            console.error('%o', error);
            $('#title-box').innerHTML = 'Error404：文章不存在';
        });
});
