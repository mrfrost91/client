function loadJson() {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', "http://127.0.0.1:8080/items/", true);


    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var jsonText = JSON.parse(xhr.response);
            var text="";
            var i;
            for (i=0; i < jsonText.length; i++) {
                text += jsonText[i].id + "<br>";
            }
            document.getElementById("qw1").innerHTML = text;
        }
    };
    xhr.send();
}
window.onload = loadJson;
