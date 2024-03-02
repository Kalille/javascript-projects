


window.addEventListener("load", function(){
    
        // TODO: register the handler
        const form = document.getElementById("searchForm");
        const engines = document.getElementsByName("engine");
        const engineUrl = {
            google: "https://www.google.com/search",
            duckDuckGo: "https://duckduckgo.com/", 
            bing: "https://www.bing.com/search",
            ask: "https://www.ask.com/web"
        }
     console.log("loaded")



form.addEventListener("submit", function(e){
    searchEngine(e, engines, engineUrl,form)
    console.log(form.action)
})
});

function searchEngine(e, engines, engineUrl, form){
    e.preventDefault();
    for (let i = 0; i < engines?.length; i++){
    // let urlResponse;
    // let formAction;
     if (engines[i]?.checked){
        // urlResponse = engines[i].value
     form.action = engineUrl[engines[i].value]
     }
  }
 }



