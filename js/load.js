function loadJson() {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', "http://127.0.0.1:8080/items/", true);


    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var jsonText = JSON.parse(xhr.responseText);

            var qwe0 = jsonText[0];
            document.getElementById("qw1").innerHTML = (qwe0.id);

            var node1 = document.createElement("DIV");
            var qwe1 = jsonText[1];
            var textnode = document.createTextNode(qwe1.id);
            node1.appendChild(textnode);
            document.getElementById("qw1").appendChild(node1);

            var node2 = document.createElement("DIV");
            var qwe2 = jsonText[2];
            var textnode = document.createTextNode(qwe2.id);
            node2.appendChild(textnode);
            document.getElementById("qw1").appendChild(node2);

            var node3 = document.createElement("DIV");
            var qwe3 = jsonText[3];
            var textnode = document.createTextNode(qwe3.id);
            node3.appendChild(textnode);
            document.getElementById("qw1").appendChild(node3);

            var node4 = document.createElement("DIV");
            var qwe4 = jsonText[4];
            var textnode = document.createTextNode(qwe4.id);
            node4.appendChild(textnode);
            document.getElementById("qw1").appendChild(node4);

            var node5 = document.createElement("DIV");
            var qwe5 = jsonText[5];
            var textnode = document.createTextNode(qwe5.id);
            node5.appendChild(textnode);
            document.getElementById("qw1").appendChild(node5);

            var node6 = document.createElement("DIV");
            var qwe6 = jsonText[6];
            var textnode = document.createTextNode(qwe6.id);
            node6.appendChild(textnode);
            document.getElementById("qw1").appendChild(node6);

            var node7 = document.createElement("DIV");
            var qwe7 = jsonText[7];
            var textnode = document.createTextNode(qwe7.id);
            node7.appendChild(textnode);
            document.getElementById("qw1").appendChild(node7);

            var node8 = document.createElement("DIV");
            var qwe8 = jsonText[8];
            var textnode = document.createTextNode(qwe8.id);
            node8.appendChild(textnode);
            document.getElementById("qw1").appendChild(node8);

            var node9 = document.createElement("DIV");
            var qwe9 = jsonText[9];
            var textnode = document.createTextNode(qwe9.id);
            node9.appendChild(textnode);
            document.getElementById("qw1").appendChild(node9);
        }
    };
    xhr.send();
}
window.onload = loadJson;
