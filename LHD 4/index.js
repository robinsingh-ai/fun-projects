function clearitems() {
    if (confirm("Warning : Do You Really Want To Clear The Items")) {

        localStorage.clear();
        console.log("cleard Full List")
        update();

    }
}

function getandupdate() {
    console.log("updating");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));


    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);
        itemJsonArray.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));


    }
    update();
}

function update() {
    cd = null
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];

        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));


    }
    else {
        itemJsonArraystr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArraystr);

    }

    //Add items to the Added Items
    tabelbody = document.getElementById('tabelbody');
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `<tr>
        <th scope="row">${index+1}</th>
        <td id="maintitle" >${element[0]}</td>
        <td>${element[1]}</td>
        
        <td><button class="btn"><i class="fa fa-close" onclick="itemdeleted(${index})"></i></button>
        <button class="btn"><i class="fa fa-check" onclick="itemcompleted(${index })"></i></button></td>
    </tr>`

    });

    tabelbody.innerHTML = str;
};

function itemdeleted(itemindex) {
    console.log("deleted", itemindex)
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);

    itemJsonArray.splice(itemindex, 1);


    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    update();




};
function itemcompleted(itemindex) {
    
    console.log("completed", itemindex)
    itemJsonArraystr = localStorage.getItem('itemsJson');
    itemJsonArray = JSON.parse(itemJsonArraystr);

    var cd = itemJsonArray.splice(itemindex,1);
    console.log(cd);
    // itemJsonArray.splice(itemindex, 1);
    tabelbody2 = document.getElementById('tabelbody2');
    let str1 = "";

    str1 += `<tr>
        <th scope="row">${itemindex}</th>
        <td id="maintitle" >${cd[0][0]}</td>
        <td>${cd[0][1]}</td>
    </tr>`



    tabelbody2.innerHTML = str1;


localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
update();




};
additem = document.getElementById("add");
additem.addEventListener("click", getandupdate);

recenty = document.getElementById("Recentlyadded");
recenty.addEventListener("click", update);




