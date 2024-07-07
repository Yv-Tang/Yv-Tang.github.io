const { Query, User } = AV;

AV.init({
    appId: "kSDqVFRjBHrwXqvwTXN8WM7b-gzGzoHsz",
    appKey: "mX6hrQ3f4nxt8mSp3B1pp3BO",
    serverURL: "https://ksdqvfrj.lc-cn-n1-shared.com",
});

window.onload = mdGetDown();

const blogFather = $('#blogFather');

function mdGetDown() {
    const query = new AV.Query("MarkDownPosts");
    query.find()
        .then(results => {
            // 遍历查询结果，生成博客文章列表
            results.forEach(function (post) {
                var title = post.get('title');
                var date = post.get('createdAt');
                $('.blogs').innerHTML = blogTitleSpawner(title, date)+$('.blogs').innerHTML;
            });
        })
        .catch(error => {
            console.error("Error while querying MarkDownPosts: " + error.message)
        });
}


function blogTitleSpawner(title, date) {
    return `
    <div id="leanMdBlog">
    <span class="headline">${title}</span>
    <span class="date">- ${date} </span>
    </div>`;
}

/**
 * @param {String} eleName 
 * 返回一个指定的HTML元素
*/
function $(eleName) {
    var element = document.querySelector(eleName)
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