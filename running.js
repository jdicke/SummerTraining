function grabMondayLink() {
    window.location="https://www.google.com/search?q=monday+motivation&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwio8I256JDcAhUI_IMKHWRWBgoQ_AUICigB&biw=1920&bih=947";
}

function socialMedia() {
    var social = document.getElementById("hiddenSocial");
    if (social.style.display === "none") {
        social.style.display = "block";
    } else {
        social.style.display = "none";   
    }
}

function contact() {
    var social = document.getElementById("hiddenContact");
    if (social.style.display === "none") {
        social.style.display = "block";
    } else {
        social.style.display = "none";   
    }
}

window.onload = function() {
    var d = new Date();
    var n = d.getDate();
    var totalDays = (31 - n) + 10;
    var perc = Math.round((n / totalDays)*100);
    var id = document.getElementById("testProgress");
    
    id.style = "width: " + perc + "%";
    
    document.getElementById("testProgress").innerHTML = perc + "%";
}