var web_style = $("#web_style").val();
var valine_appid = $("#valine_appid").val();
var valine_appKey = $("#valine_appKey").val();

new Valine({
    el: '#vcomments',
    appId: valine_appid,
    appKey: valine_appKey,
    placeholder: '请输入内容...',
    avatar: "wavatar"
})

document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre').forEach((block) => {
        hljs.highlightBlock(block);
    });
});
