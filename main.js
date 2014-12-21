$(function() {
var windowHeight=$(window).height();
		var titleBarHeight = $('#titlebar').height();

		var codecontainerHeight=windowHeight-titleBarHeight;

		$('.codecontainer').height(codecontainerHeight+'px');

		$(".toggle").click(function() {
			$(this).toggleClass("selected");

			var activeDiv=$(this).html();
			
			$("#" + activeDiv + "Container").toggle();

			var showingDivs = $(".codecontainer").filter(function(){
				return($(this).css("display") != "none");

			}).length;

			var width = 100 / showingDivs;

			$(".codecontainer").css("width", width + "%");

		});

			$("#run").click(function() {
				$('iframe').contents().find('html').html("<style>"+$
				('#cssCode').val()+"</style>"+$("#htmlCode").val());

				document.getElementById('resultFrame').contentWindow.eval( $('#jsCode').val() );

			});
});