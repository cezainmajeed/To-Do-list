function deletefunc(row) {
    var d = row.parentNode.parentNode.rowIndex;
      document.getElementById('table').deleteRow(d);
}


add = document.getElementById("add");
add.addEventListener("click", ()=>{
    var a = document.getElementById("title").value;
    var b = document.getElementById("desc").value;
    if(a=='' || b=='')
        window.alert("Don't leave any column blank.");
    else
    {
        var table = document.getElementById("table");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = a;
        cell2.innerHTML = b;
        cell3.innerHTML = "<button type='button' onclick='deletefunc(this)' id='delete' class='btn btn-primary btn-sm'>Delete</button>";
        document.getElementById("title").value = ''; 
        document.getElementById("desc").value = ''; 
    }
    
})