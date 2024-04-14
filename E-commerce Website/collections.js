var prodcontainer=document.getElementById("product")
var search=document.getElementById("search")
var prodlist=prodcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<prodlist.length;count=count+1)
    {
        var productname = prodlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            prodlist[count].style.display="none"
        }
        else{
            prodlist[count].style.display="block"
        }
    }
})