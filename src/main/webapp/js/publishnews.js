$(document).ready(function(){
    $("#newpublishform").submit(function(){
        var title = $("#title").attr('value');
        var body = $("#body").attr('value');

        var publishdata = {
         "title":title,
         "body":body
        }

        var publishdata_json = JSON.stringify(publishdata);

        $.ajax({
            type: 'post',
            url: 'http://www.stemcloud.cn/api/ssanews',
            data: publishdata_json,
            async:false,
            dateType: 'json',
            success: function (result) {
               alert("Pulish news success!");
            },
            error: function () {
                alert("read news errors!");
            }
        });
    });
});