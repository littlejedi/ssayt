$(document).ready(function(){
    $.ajax({
        type: 'get',
        url: 'http://www.stemcloud.cn/api/ssanews/recent',
        dataType:"html",
        success: function (result) {
  			  var result = '[{"id":1,"title":"942524502fcb45f8a91b398e7b0aa1e7","body":"body:942524502fcb45f8a91b398e7b0aa1e7","published":"2015-03-04T04:52:01.000+0000"},{"id":2,"title":"SSA新闻标题","body":"正文","published":"2015-03-03T06:37:28.000+0000"}]';
     			news = JSON.parse(result);
     			myid = 0;
     			for(var i = 0; i < news.length; i++)
     			{
            var d = new Date(news[i].published);
            
            num = i + 1;
            title = '<h1 id='+'"mark'+num+'"'+"></h1>";
            block1 = '<img src="images/border-bottom-header-gradient.png" class="part_line">';
            
            body = '<div id='+'"content'+num+'"'+'></div>';
            published = '<time>'+d+'</time>';

            $("#news").append(title);
            $("#news").append(block1);
            
            $("#news").append(body);
            $("#news").append(published);
            $("#mark"+num).html(news[i].title);
            $("#content"+num).html(news[i].body);
     			}

          for(var i= 0; i < news.length; i++)
          {
            num = i + 1;
            h4 = '<h4>><a href="#mark'+num+'">'+news[i].title+'</h4>';
            $("#newslink").append(h4);
          }
        },
        error: function () {
            alert("read news errors!");
        }
    });
});