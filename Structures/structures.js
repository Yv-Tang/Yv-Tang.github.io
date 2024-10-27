window.onload = function () {
    
    // 添加markdown渲染器和leancloud存储库
    // var script1 = document.createElement('script');
    // script1.src = 'https://cdn.bootcss.com/marked/0.8.1/marked.min.js';
    // var script2 = document.createElement('script');
    // script2.src = 'https://cdn.jsdelivr.net/npm/leancloud-storage@latest/dist/av-min.js';
    // document.head.appendChild(script1);
    // document.head.appendChild(script2);

    // 添加css样式
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/Structures/structures.css';
    document.head.appendChild(css);

    // 添加导航栏header和页脚footer
    var header = document.createElement('div');
    header.id = 'header';
    header.innerHTML = `
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true"
            class="octicon octicon-mark-github v-align-middle color-fg-default">
            <path
                d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z">
            </path>
        </svg>
        <span>YvTang</span>
        <div id="nav">
            <span onclick="headCtrler.Home()" id="Home">Home</span>
            <span onclick="headCtrler.About()" id="About">About</span>
            <span onclick="headCtrler.Reward()" id="Reward">Reward</span>
            <span onclick="headCtrler.Post()" id="Post">Post</span>
        </div>`
    document.body.insertBefore(header, document.body.firstChild);

    var footer = document.createElement('footer');
    footer.innerHTML = `
        <div>小项目链接</div>
        <div class="urls">
            <div id="c1">
                <a href="https://github.com/Yv-Tang">GitHub</a><br>
                <a href="https://space.bilibili.com/414852496">Bilibili</a>
            </div>
            <div id="c2">
                <a href="https://yv-tang.github.io/universe/index.html">旧Blog</a><br>
                <a href="https://yv-tang.github.io/universe/universe.html">下雪了吗</a><br>
                <a href="https://yv-tang.github.io/universe/LocalFriend/index.html">匹配度计算器</a>
            </div>
            <div id="c3">
                <a href="https://console.leancloud.cn/apps/kSDqVFRjBHrwXqvwTXN8WM7b-gzGzoHsz/">管理后台</a>
            </div>
        </div>
        <div class="copyright">
            <p>© 2024 YvTang. All rights reserved.</p>
        </div>`;
    document.body.appendChild(footer);
}


var headCtrler = {
    Github: function () { window.open('https://github.com/Yv-Tang') },                    // 跳转到Github主页
    Home: function () { window.open('https://yv-tang.github.io') },                       // 跳转到主页
    About: function () { window.open('/pages/About.html') },     // 关于页
    Reward: function () { window.open('/pages/Reward.html') },   // 赞赏页
    Post: function () { window.open('/pages/Post.html') },       // 写作页
}