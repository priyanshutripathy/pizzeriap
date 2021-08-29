menu_list_array =["Veg Margherita Pizza","Double Cheese Margherita pizza","Peppy Paneer pizza","Mexican Green Wave pizza","Deluxe Veggie pizza","Veg Extravaganza pizza","PANEER MAKHANIPIZZA","VEGGIE PARADISE PIZZA","FRESH VEGGIE PIZZA","Indi Tandoori Paneer pizza","PEPPER BARBECUE CHICKEN PIZZA","CHICKEN SAUSAGE PIZZA","Chicken Golden Delight pizza","Non Veg Supreme pizza","Chicken Dominator pizza","PEPPER BARBECUE & ONION PIZZA"]


















function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menu_list_array.sort();
            for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' +menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("dispaly_menu").innerHTML = htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="cards">'
        + '<img src="Images/pizzaImg.jpg">'+menu_list_array[i]+"</div>"
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
}