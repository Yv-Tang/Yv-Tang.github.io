const { Query, User } = AV;

AV.init({
    appId: "kSDqVFRjBHrwXqvwTXN8WM7b-gzGzoHsz",
    appKey: "mX6hrQ3f4nxt8mSp3B1pp3BO",
    serverURL: "https://ksdqvfrj.lc-cn-n1-shared.com",
});


// 写博客
function mdGetOn() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const todo = new AV.Object("MarkDownPosts");
    todo.set("title", title);
    todo.set("content", content);
    todo.save()
        .then(function (todo) {
            console.log(`文章 "${todo.get("title")}" 已保存, objectId: ${todo.id}`);
            // 切换到主页
            window.location.href = "/";
        })
        .catch(function (error) {
            console.error("Error while saving Post: " + error.message);
        });
}
