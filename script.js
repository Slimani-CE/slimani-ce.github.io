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

var user_info=document.getElementsByClassName("user-name")[0].getElementsByTagName("input");

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
	for(var i=0;i<ol_list.length;i++)
	{
		if(i==num4)
			continue;
		ol_list[i].style.display="none";
		list_table[i]=false;
		li_list[i].style=null;
		// ("background-color:#89aadc;")
	}
}
var clickhandler_list=false;
function func()
{
	clickhandler_list=true;//true if we clicked li element!
}