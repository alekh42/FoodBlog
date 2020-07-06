var counter = 0;
function changeBG(){
    var imgs = [
        "url(https://images.unsplash.com/photo-1486485764572-92b96f21882a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)",
        "url(https://images.unsplash.com/photo-1515007917921-cad9bf0e2e87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)",
        // "url(https://images.unsplash.com/photo-1444012104069-996724bf4a0a?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        // "url(https://images.unsplash.com/photo-1445888761652-fc13cbb0d819?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        // "url(https://images.unsplash.com/photo-1445888985293-8e1b904061c4?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        // "url(https://images.unsplash.com/photo-1444228250525-3d441b642d12?dpr=2&fit=crop&fm=jpg&h=825&ixlib=rb-0.3.5&q=50&w=1450)",
        "urlhttps://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)",
        "url(https://images.unsplash.com/photo-1563865436826-3d20161e7ebd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)",
		"url(https://images.unsplash.com/photo-1489069313310-63735a4f3010?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)"
      ]
    
    if(counter === imgs.length) counter = 0;
    $("body").css("background-image", imgs[counter]);

    counter++;
}
  
  setInterval(changeBG, 5000);


