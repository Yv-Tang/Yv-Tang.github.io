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

function showMsg(msg) {
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = '50%';  // 居中显示
    div.style.left = '50%'; // 居中显示
    div.style.transform = 'translate(-50%, -50%)'; // 用于居中
    div.style.width = '80%'; // 较小宽度，便于美观
    div.style.maxWidth = '400px'; // 最大宽度
    div.style.height = 'auto'; // 自适应高度
    div.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'; // 更深的背景色
    div.style.color = '#fff';
    div.style.fontSize = '1.5rem';
    div.style.padding = '20px'; // 加大内边距
    div.style.borderRadius = '10px'; // 圆角
    div.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)'; // 阴影效果
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.zIndex = '9999';
    div.style.transition = 'opacity 0.5s ease'; // 过渡效果
    div.style.opacity = '1'; // 初始透明度

    div.innerHTML = msg;
    document.body.appendChild(div);

    // 设置定时器，2秒后开始淡出
    setTimeout(function () {
        div.style.opacity = '0'; // 设置透明度为0
        setTimeout(function () {
            // 增加验证div是否存在
            if (!div) { document.body.removeChild(div); }
        }, 500); // 等待过渡效果
    }, 2000);

    // 点击事件处理
    addEventListener('click', function (e) {
        document.body.removeChild(div);
        e.stopPropagation();
    });
}

function showMsg(msg, imgUrl) {
    var div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.top = '50%';
    div.style.left = '50%';
    div.style.transform = 'translate(-50%, -50%)';
    div.style.width = '80%';
    div.style.maxWidth = '400px';
    div.style.height = 'auto';
    div.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    div.style.color = '#fff';
    div.style.fontSize = '1.5rem';
    div.style.padding = '20px';
    div.style.borderRadius = '10px';
    div.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    div.style.display = 'flex';
    div.style.flexDirection = 'column'; // 垂直排列子元素
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.zIndex = '9999';
    div.style.transition = 'opacity 0.5s ease';
    div.style.opacity = '1';

    div.innerHTML = msg; // 显示消息

    // 如果传入了图片 URL，则创建图片元素并添加到 div
    if (imgUrl) {
        var img = document.createElement('img');
        img.src = imgUrl; // 设置图片源
        img.style.maxWidth = '100%'; // 图片宽度自适应
        img.style.borderRadius = '10px'; // 圆角
        img.style.marginTop = '10px'; // 图片与文字之间的间距
        div.appendChild(img); // 将图片添加到 div 中
    }

    document.body.appendChild(div);

    // 设置定时器，2秒后开始淡出
    setTimeout(function () {
        div.style.opacity = '0';
        setTimeout(function () {
            if (!div) { document.body.removeChild(div); }
        }, 500);
    }, 2000);

    // 点击事件处理
    div.addEventListener('click', function (e) {
        document.body.removeChild(div);
        e.stopPropagation();
    });
}
function qsMsg(msg, type) {
    return new Promise((resolve) => {
        var div = document.createElement('div');
        div.style = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80%;
            max-width: 400px;
            height: auto;
            background-color: rgba(30, 30, 30, 0.9); /* 深灰背景 */
            color: #fff;
            font-size: 1.5rem;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 50px rgba(0, 0, 0, 0.7);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;

        var message = document.createElement('div');
        message.innerHTML = msg;
        message.style.marginBottom = '20px'; // 消息与按钮之间的间距
        div.appendChild(message);

        // 创建公共按钮样式
        var buttonStyle = `
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 10px 15px; // 设置内边距
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
            width: 20%; // 设置按钮宽度为父元素的 20%
            margin: 0 5px; // 添加左右边距
        `;

        // 创建不同类型的输入或选项
        if (type === 'input') {
            var input = document.createElement('input');
            input.type = 'text';
            input.placeholder = '请输入内容';
            input.style.marginTop = '10px';
            input.style.padding = '12px';
            input.style.border = 'none';
            input.style.borderRadius = '5px';
            input.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
            input.style.width = '80%'; // 输入框宽度为父元素的 80%
            input.style.fontSize = '1rem'; // 字体大小
            div.appendChild(input);

            var confirmBtn = document.createElement('button');
            confirmBtn.innerHTML = '确定';
            confirmBtn.style = `${buttonStyle}`;
            confirmBtn.style.backgroundColor = '#007BFF'; // 确定按钮颜色
            confirmBtn.onclick = function () {
                var inputValue = input.value;
                console.log('输入的内容是：' + inputValue);
                document.body.removeChild(div);
                resolve(inputValue);
            };

            div.appendChild(confirmBtn);
        } else if (type === 'if') {
            // 创建按钮容器
            var buttonContainer = document.createElement('div');
            buttonContainer.style.display = 'flex';
            buttonContainer.style.justifyContent = 'space-between'; // 平均分配
            buttonContainer.style.width = '100%'; 
            buttonContainer.style.marginTop = '20px'; // 按钮与信息之间的间距

            var yesBtn = document.createElement('button');
            yesBtn.innerHTML = 'Yes';
            yesBtn.style = `${buttonStyle}`;
            yesBtn.style.backgroundColor = '#4CAF50'; // 绿色背景
            yesBtn.onclick = function () {
                console.log('用户选择了：Yes');
                document.body.removeChild(div);
                resolve('Yes');
            };

            var noBtn = document.createElement('button');
            noBtn.innerHTML = 'No';
            noBtn.style = `${buttonStyle}`;
            noBtn.style.backgroundColor = '#f44336'; // 红色背景
            noBtn.onclick = function () {
                console.log('用户选择了：No');
                document.body.removeChild(div);
                resolve('No');
            };

            buttonContainer.appendChild(yesBtn);
            buttonContainer.appendChild(noBtn);
            div.appendChild(buttonContainer); // 将按钮容器添加到 div 中
        }

        document.body.appendChild(div);
    });
}






function $(selector) {
    return document.querySelector(selector);
}