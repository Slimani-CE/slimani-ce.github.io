var image_set=document.getElementsByClassName("image-set");
var check=document.getElementsByClassName("check");
var image_set_table=[false,false,false,false];
for (var i = 0; i<image_set.length; i++)
{
	check[i].addEventListener("click",clickhandler_imageset.bind(null,i));
}
function clickhandler_imageset(num)
{
	if (image_set_table[num])
	{
		image_set_table[num]=false;
	}
	else
	{
		image_set_table[num]=true;
	}
	image_set[num].getElementsByClassName("form-image")[0].style=(image_set_table[num])? ("border-color:#39c042;"):null;
	check[num].style=(image_set_table[num])? ("visibility:visible;"):null;
}

var user_info=document.getElementsByClassName("user-info")[0].getElementsByTagName("input");

var checkVar=false;

setInterval(checkSize, 1);
var table=["First name...","Last name... ","User name... "];
function checkSize()
{
	if (window.innerWidth<=745 )
	{
		if (!checkVar) 
		{
			user_info[0].setAttribute("value",table[0]);
			user_info[1].setAttribute("value",table[1]);
			user_info[2].setAttribute("value",table[2]);
			checkVar=true;
		}
		for(var i=0;i<user_info.length;i++)
		{
			user_info[i].addEventListener("mouseover",removeValue.bind(null,i));
			user_info[i].addEventListener("mouseout",addValue.bind(null,i));
		}
	}
	else
	{
		user_info[0].setAttribute("value","");
		user_info[1].setAttribute("value","");
		user_info[2].setAttribute("value","");
		checkVar=false;
	}
}

var user_info_table=[false,false,false];
var body=document.getElementsByTagName("body")[0];

function removeValue(num1)
{
	user_info[num1].setAttribute("value","");
	user_info[num1].addEventListener("click",click.bind(null,num1));
}
function click(num3)
{
	if(!user_info_table[num3])
		user_info_table[num3]=true;
	else
		user_info_table[num3]=false;
}
function addValue(num2)
{
	if(!user_info_table[num2])
		user_info[num2].setAttribute("value",table[num2]);
}



//all about list styling !!
var item_display_table=[false];
list_style();
function list_style(){
var ol_list=document.getElementsByClassName("ol-list");
var li_list=document.getElementsByClassName("li-list");

for(var i=0;i<ol_list.length;i++)
{
	li_list[i].addEventListener("click",display_list.bind(null,i));
}
var list_table=[false,false,false,false];
for(var i=0;i<ol_list.length;i++)
{
	ol_list[i].addEventListener("click",func);
}
function display_list(num4)
{
	if(clickhandler_list)
	{
		clickhandler_list=false;
		return ;
	}
	if (list_table[num4])
	{
		list_table[num4]=false;
	}
	else
	{
		list_table[num4]=true;
	}
	ol_list[num4].style=(list_table[num4])? ("display:block"):("display:none");
	li_list[num4].style=(list_table[num4])? ("background-color:#628ed0;"):null;
	for(var i=0;i<li_list.length;i++)
	{
		if(i==num4)
			continue;
		ol_list[i].style.display="none";
		list_table[i]=false;
		li_list[i].style=null;
		if(item_display_table[i])
			li_list[i].style.display="none";
		// ("background-color:#89aadc;")
	}
}
var clickhandler_list=false;
function func()
{
	clickhandler_list=true;//true if we clicked li element!
}}


var new_item_added_eventHandler=false; 
var new_item_added_text_eventHandler=false;
//get input more respositivity!!               >>>>
var clickhandler_additem=false;
var new_item=document.getElementById("new-item");
new_item.addEventListener("click",removeValue1);
function  removeValue1() 
{
	if(new_item_added_text_eventHandler)
	{
		new_item.value=null;
		new_item.setAttribute("value","gooood!");
		new_item_added_text_eventHandler=false;
	}
	new_item.setAttribute("value","");
	new_item_added_eventHandler=true;
}
var eventHandler_newitem=false;
body.addEventListener("click",addValue1);
new_item.addEventListener("click",eventHandler_newitem_change);
function addValue1()
{
	if(eventHandler_newitem)
	{
		eventHandler_newitem=false;
		return;
	}
	new_item.setAttribute("value","add new item");
}
function eventHandler_newitem_change()
{
	if (!eventHandler_newitem)
		eventHandler_newitem=true;
}
//                                             <<<<
												  
//adding new item to list!                     >>>>
var deleted_list_eventHandler=false;
var button_addvalue=document.getElementById("new-item-button");
var list=document.getElementsByClassName("todo-liste")[0];
button_addvalue.addEventListener("click",additem);
function additem()
{
	if(!new_item_added_eventHandler || new_item.value=="")
	{	
		alert("please add a new item!");
		return;
	}
	if(deleted_list_eventHandler)
	{
		deleted_list_eventHandler=false;
		list.innerHTML=null;
	}
	list.innerHTML+='<div class="item-delete-button">D</div><div class="item-add-button">+</div><div class="item-change-button">C</div><li class="li-list">'+new_item.value+'<ol type="1" class="ol-list"></ol></li>';
	new_item_added_text_eventHandler=true;
	list_style();
	manage_item();

	// use this when we want the user to add new item !!
	// new_item_added_eventHandler=false;
}
//                                             <<<<

//Delete the entire list                       >>>>

var delete_todolist_button=document.getElementById("delete-button");
delete_todolist_button.addEventListener("click",deletelist);
function deletelist()
{
	list.innerHTML="<h2 class='form-holder'>Your list is empty!</h2>"
	deleted_list_eventHandler=true;
}

//                                             <<<<

//item delete + name change + subitem add      >>>>
manage_item();
var handler=[0];
function manage_item(){
var  item_element=document.getElementsByClassName("li-list");
var item_delete_button_table=document.getElementsByClassName("item-delete-button");
var item_add_button_table=document.getElementsByClassName("item-add-button");
var item_change_button_table=document.getElementsByClassName("item-change-button");
var Length=item_delete_button_table.length;
for(var i=0;i<item_element.length;i++)
{
	item_delete_button_table[i].addEventListener("click",delete_item.bind(null,i));
	item_add_button_table[i].addEventListener("click",add_item.bind(null,i));
	// item_delete_button_table[i].addEventListener("click",delete_item.bind(null,i));
}

// delete item from list                    >>>>
function delete_item(num5)
{
	Length--;
	item_element[num5].style.display="none";
	item_display_table[num5]=true;
	delete_button(num5);
	return;
}
function delete_button(num6)
{
	item_delete_button_table[num6].style.display="none";
	item_add_button_table[num6].style.display="none";
	item_change_button_table[num6].style.display="none";
	
	if(!Length)
		deletelist();
	return;
}
//                                          <<<<

// add subitem to the list                  >>>>
function add_item(num7)
{	
	handler[num7]=0;
	document.getElementById("close-button").addEventListener("mouseover",close_button_effect);
	document.getElementById("close-button").addEventListener("click",close_popup.bind(null,num7));
	document.getElementById("close-button").addEventListener("mouseout",close_button_no_effect);
	document.getElementsByClassName("popup-Container")[0].style.display="inline-block";
	document.getElementsByClassName("popup-button")[0].addEventListener("click",addsubitem.bind(null,num7));
}
function addsubitem(num8)
{
	handler[num8]++;
	if(handler[num8]>=2)
		return;
	var subitem_text;
	subitem_text=document.getElementById("item");
	item_element[num8].getElementsByTagName("ol")[0].innerHTML+='<li>'+subitem_text.value+'</li>';
	document.getElementsByClassName("popup-Container")[0].style.display="none";
	list_style();
}

function close_button_effect()
{
	this.style.transform="rotate(45deg)";
}

function close_button_no_effect()
{
	this.style.transform="rotate(0deg)";
}
function close_popup(num9)
{
	handler[num9]++;
	document.getElementsByClassName("popup-Container")[0].style.display="none";
}
//                                          <<<<
}

//                                             <<<<