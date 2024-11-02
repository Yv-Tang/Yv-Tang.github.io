const { Query, User } = AV;

AV.init({
    appId: "kSDqVFRjBHrwXqvwTXN8WM7b-gzGzoHsz",
    appKey: "mX6hrQ3f4nxt8mSp3B1pp3BO",
    serverURL: "https://ksdqvfrj.lc-cn-n1-shared.com",
});

window.onload = mdGetDown();
var headCtrler = {
    Github: function () {window.open('https://github.com/Yv-Tang')},                    // 跳转到Github主页
    Home: function () {window.open('https://yv-tang.github.io')},                       // 跳转到主页
    About: function () {window.open('https://yv-tang.github.io/pages/About.html')},     // 关于页
    Reward: function () {window.open('https://yv-tang.github.io/pages/Reward.html')},   // 赞赏页
    Post: function () {window.open('https://yv-tang.github.io/pages/Post.html')},       // 写作页
}

function mdGetDown() {
    const query = new AV.Query("MarkDownPosts");
    query.find()
        .then(results => {
            // 遍历查询结果，生成博客文章列表
            results.forEach(function (post) {
                var title = post.get('title');
                var date = post.get('createdAt');
                var id = post.get('objectId');
                $('.blogs').innerHTML = blogTitleSpawner(title, date, id)+$('.blogs').innerHTML;
            });
        })
        .catch(error => {
            console.error("Error while querying MarkDownPosts: " + error.message)
        });
}

function blogTitleSpawner(title, date, id) {
    return `
    <div id="leanMdBlog" onclick="window.open(\`/pages/Reader.html?blogTitle=${encodeURIComponent(title)}&objID=${encodeURIComponent(id)}\`)">
    <span class="headline">${title}</span><br>
    <span class="date" style="margin-left: 20px;">- ${date} </span>
    </div>`;
}

function blogReader(id) {
    // 通过id获取MarkDownPosts对象，获取markdown内容，渲染到页面上
    const query = new AV.Query("MarkDownPosts");
    query.get(id)
        .then(post => {
            var title = post.get('title');
            var date = post.get('createdAt');
            var content = post.get('content');
            console.log(`获取到${id}的内容`);
            $('#blogBox').style.display = 'none';
            $('#contentBox').style.display = 'block';
            $('#contentBox').innerHTML = `
                <div id="mdBlog">
                    <span class="headline">${title}</span>
                    <span class="date">- ${date} </span>
                 <span class="reload" onclick="location.reload(true);" style="margin-left: auto;">←</span>
               
                </div>
                <br>
                <div id="content">${marked(content)}</div>`;
            console.log('完成渲染');

        })

}



/**
 * @param {String} eleName 
 * 返回一个指定的HTML元素
*/
function $(eleName) {
    var element = document.querySelector(eleName);
    if (!element) {
        console.error(`Element with selector ${eleName} not found`);
    }
    return element;
}
    // function mdFirstGetDown() {
    //     fetch('blogs/First.md')
    //         .then(response => response.text())
    //         .then(mdCntt => {
    //             const pattern = /---\s*layout:\s*(.*?)\s*title:\s*"(.*?)"\s*date:\s*(.*?)\s*---/s;
    
    //             var match = mdCntt.match(pattern);
    //             console.log(match);
    //             if (match) {
    //                 var title = match[2];
    //                 var date = match[3];
    
    //                 // 动态生成并插入博客文章标题和日期内容到HTML元素mdBlog中
    //                 $('#mdBlog').innerHTML = blogTitleSpawner(title, date);
    //             }
    //         })
    //         .catch(error => {
    //             document.getElementById('mdBlog').innerHTML = `error: ${error}`;
    //         });
    // }