var arr;
var dbArr;
var list1;
var list2;

//<!------- pushing selected values from left to right--------->
function add()
{

    list1=document.getElementById("left_panel");

    var selectedValue=list1.options[list1.selectedIndex].value;

    list2=document.getElementById("right_panel");

    // var result=check_duplicate(selectedValue);
    // alert(result);

    // <!---------------- insert unique value in right panel ---------->
    // if(list2.length == 0 | result != "duplicateAvailable")
    //  {  
    var option=document.createElement("option");
    option.text = selectedValue;
    list2.add(option,list2.length);

    arr = new Array();//array

    for (i = 0; i < list2.length; i++) { 
        arr.push(list2.options[i].text);
    }

    //    }else
    //    {
    //        alert("Choose another option....");
    //    }
    //    <!------------------ -------------------->
}

function check_duplicate(searchTerm)
{   


    // alert(list2.length);
    list2=document.getElementById("right_panel");

    for(l = 0; l < list2.length; l++)
    {   
        if(searchTerm.localeCompare(list2.options[l].text)== 0)
        {
            return "duplicateAvailable";
            break;

        }

    }


}


function remove(){


    list2=document.getElementById("right_panel");


    arr.splice(list2.selectedIndex,1);
    list2.remove(list2.selectedIndex);




}


function clearTable(){
    let i;let j;
    var table= document.getElementById("mytable");
    for ( i = 0 ; i < table.rows.length; i++) {

        var row = "";

        for ( j = 0; j < table.rows[i].cells.length; j++) {

            table.rows[i].cells[j].innerHTML="";

        }

    }
}


function Myfunct(isrefresh){

    //clearTable();
    // dbArr =createdb();//local storage
    dbArr =storeArray();
    console.log("Myfun"+dbArr);
    var table= document.getElementById("mytable");
    let i;let j;
    var td,tr,txt;
    var len=0;
    var arrlength=dbArr.length;
    console.log(arrlength);
    list2=document.getElementById("right_panel");

    for ( i = 0 ; i < table.rows.length; i++) { 
        var row = "";
        for ( j = 0; j < table.rows[i].cells.length; j++) {

            if(len<arrlength)
            {
                table.rows[i].cells[j].innerHTML=document.getElementById(dbArr[len]).innerHTML;

                if(isrefresh == true)
                {
                    console.log( "right panel"+dbArr[len]);
                    var option=document.createElement("option");
                    option.text = dbArr[len];
                    list2.add(option);
                }
            }else{
                break;
            }

            len=len+1;
        }



    }







    //            <!-------------------------Add rows---------------->
    //               var row;var cell;
    //                  
    //                                    row = table.insertRow(table.length);
    //               
    //                     
    //                                   cell= row.insertCell(row.length); 
    //                                   cell.innerHTML=row.length;
    //                                  
    //            for(i=0;i<arr.length;i++)
    //                {
    //                    
    //             tr = document.createElement("tr");
    //                    
    //             td = document.createElement("td");
    //             div = document.createElement("div");
    //            div.innerHTML=document.getElementById(arr[i]).innerHTML;
    //            td.appendChild(div);
    //            tr.appendChild(td);
    //            table.appendChild(tr);     
    //                     
    //                }
    //            <~----------------------------------------->

}






//<!---------------------------use local storage to store array------->

function createdb()
{  
    var databaseArray;
    if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem('Array') == "undefined" | localStorage.getItem('Array') == null)
        {
            databaseArray=JSON.stringify(arr);
            // Store
            localStorage.setItem('Array', databaseArray);
            return databaseArray;

        }else{
            // Retrieve
            databaseArray ="";
            // alert(databaseArray);
            databaseArray = JSON.parse(localStorage.getItem('Array'));
            //alert(databaseArray);
            return databaseArray;
        }

    } else {
        alert( "Sorry, your browser does not support Web Storage...");
    }

}
function removeDb()
{  
    var databaseArray;
    if (typeof(Storage) !== "undefined") {
        if(localStorage.getItem('Array') !== "undefined")
        {

            // Remove
            localStorage.removeItem('Array', databaseArray);
        }

    } else {
        alert( "Sorry, your browser does not support Web Storage...");
    }

}
function toggleProfile() {
    var x = document.getElementById("profileWidgetTD");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


