var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");

document.getElementById("errorName").style.display = 'none'
document.getElementById("errorUrl").style.display = 'none'

var container;

if (localStorage.getItem("urlList") == null) {
    container = [];
}
else {
    container = JSON.parse(localStorage.getItem("urlList"));
    displayItem();
}


function submit() 

{

    if (validation()) 
    {
        var site = 
        {
            name: siteName.value,
            url: siteUrl.value
        }
        container.push(site);
        localStorage.setItem("urlList",JSON.stringify(container));
        displayItem();
        document.getElementById("errorName").style.display = 'none';
        clear()
    }

    else {
        if (siteName.value == "" && siteUrl.value == "") {
            document.getElementById("errorName").style.display = 'block'
            document.getElementById("errorUrl").style.display = 'block'
        }
        else if (siteUrl.value == "") {
            document.getElementById("errorUrl").style.display = 'block'
        }
        else if (siteName.value == "") {
            document.getElementById("errorName").style.display = 'block'
        }
    }

}


function displayItem() {

    var contain = "";

    for (var i=0;i<container.length;i++) 
    {
        contain +=

       `<div class="webwell "> 
       
        <h2 class="d-flex fs-1 text-light">${container[i].name}</h2>
        <a class="btn btn-primary " href="http://${container[i].url}" target="_blank">visit</a>
        <button class="btn btn-danger " onclick="deleteItem(${i})" >Delete</button>
        </div>`
    }


    document.getElementById("bookmarkList").innerHTML = contain;
}

function validation() {
    if (siteName.value !== "" && siteUrl.value !== "") {
        return true
    }
    else {
        return false
    }
}



function deleteItem(index)
{
    container.splice(index,1)
    localStorage.setItem("urlList",JSON.stringify(container))
    displayItem()
}

function clear() {

    siteName.value = "";
    siteUrl.value = "";
}