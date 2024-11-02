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
    const qq = document.getElementById("qq").value;
    const todo = new AV.Object("MarkDownPosts");

    if (title === "" || content === "") {
        alert("标题和内容不能为空！");
        return;
    }

    qsMsg(`这是你吗？<br><img src="https://q.qlogo.cn/g?b=qq&nk=${qq}&s=100">`, "if")
        .then(function(res){
            if (res === "Yes") {
                todo.set("title", title);
                todo.set("content", content);
                todo.set("qq", qq);
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
            if (res === "No") {
                alert("你不是我，不要乱发！");
                window.location.href = "/";
            }
        });

}
