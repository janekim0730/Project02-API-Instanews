$(document).ready(function(){$(".sections").on("change",function(e){e.preventDefault(),$(".item-container").empty(),$(".categories").prepend('<p class="ajax-loader"><img src="images/ajax-loader.gif" alt="loading"></p> '),$(".initial").addClass("minimize");var a=$(".sections :selected").val();$.ajax({method:"GET",dataType:"json",url:"http://api.nytimes.com/svc/topstories/v1/"+a+".json?api-key=c37f75561abe3523181a126c4cb4dc92:12:75124075"}).done(function(e){console.log(e),$(".ajax-loader").remove();var a,t,i,n=e.results;n=n.filter(function(e){return e.multimedia.length}).splice(0,12);for(var l=" ",r=0;12>r;r++)i=n[r].multimedia[4].url,t=n[r]["abstract"],a=n[r].url,l+='<li class="article-item">',l+='<a class="articleimage" href="'+a+'" target="_blank" style="background-image:url(\''+i+"');\">",l+='<p class="text-container">'+t+"</p></a></li>";$(".item-container").append(l)})})});