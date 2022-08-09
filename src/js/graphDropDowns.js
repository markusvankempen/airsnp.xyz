/*
    Dropdowns for grafan graphs 
    Author: Nicodemus Allan
    Date: 2022/08/09 V1
*/

//temp graphs
document.getElementById('temp-btn').onclick = function() {show_temp_graphs()};

function show_temp_graphs() {
    
    document.getElementById("temp-dropdown").classList.toggle("show");
    changeBackgroundColor("temp-btn");
    closeChildren("temp-dropdown");
    parrentDropdownLimiter("temp-dropdown", "temp-btn");
}
//last 24 hours
document.getElementById("day-temp-btn").onclick = function() {show_day_temp_graph()};

function show_day_temp_graph() {
    
    document.getElementById("day-temp-dropdown").classList.toggle("show");
    changeBackgroundColor("day-temp-btn");
    dropdownLimiter("day-temp-dropdown", "day-temp-btn");
}
//last week
document.getElementById("week-temp-btn").onclick = function() {show_week_temp_graph()};

function show_week_temp_graph() {
    
    document.getElementById("week-temp-dropdown").classList.toggle("show");
    changeBackgroundColor("week-temp-btn");
    dropdownLimiter("week-temp-dropdown", "week-temp-btn");
}
//last month
document.getElementById("month-temp-btn").onclick = function() {show_month_temp_graph()};

function show_month_temp_graph() {
    
    document.getElementById("month-temp-dropdown").classList.toggle("show");
    changeBackgroundColor("month-temp-btn");
    dropdownLimiter("month-temp-dropdown", "month-temp-btn");
}



//humidity graphs
document.getElementById("humid-btn").onclick = function() {show_humid_graphs()};

function show_humid_graphs() {
    
    document.getElementById("humid-dropdown").classList.toggle("show");
    changeBackgroundColor("humid-btn");
    closeChildren("humid-dropdown");
    parrentDropdownLimiter("humid-dropdown", "humid-btn");
}
//last 24 hours
document.getElementById("day-humid-btn").onclick = function() {show_day_humid_graph()};

function show_day_humid_graph() {
    
    document.getElementById("day-humid-dropdown").classList.toggle("show");
    changeBackgroundColor("day-humid-btn");
    dropdownLimiter("day-humid-dropdown", "day-humid-btn");
}
//last week
document.getElementById("week-humid-btn").onclick = function() {show_week_humid_graph()};

function show_week_humid_graph() {
    
    document.getElementById("week-humid-dropdown").classList.toggle("show");
    changeBackgroundColor("week-humid-btn");
    dropdownLimiter("week-humid-dropdown", "week-humid-btn");
}
//last month
document.getElementById("month-humid-btn").onclick = function() {show_month_humid_graph()};

function show_month_humid_graph() {
    
    document.getElementById("month-humid-dropdown").classList.toggle("show");
    changeBackgroundColor("month-humid-btn");
    dropdownLimiter("month-humid-dropdown", "month-humid-btn");
}



//voc graphs
document.getElementById("voc-btn").onclick = function() {show_voc_graphs()};

function show_voc_graphs() {
    
    document.getElementById("voc-dropdown").classList.toggle("show");
    changeBackgroundColor("voc-btn");
    closeChildren("voc-dropdown");
    parrentDropdownLimiter("voc-dropdown", "voc-btn");
}
//last 24 hours
document.getElementById("day-voc-btn").onclick = function() {show_day_voc_graph()};

function show_day_voc_graph() {
    
    document.getElementById("day-voc-dropdown").classList.toggle("show");
    changeBackgroundColor("day-voc-btn");
    dropdownLimiter("day-voc-dropdown", "day-voc-btn");
}
//last week
document.getElementById("week-voc-btn").onclick = function() {show_week_voc_graph()};

function show_week_voc_graph() {
    
    document.getElementById("week-voc-dropdown").classList.toggle("show");
    changeBackgroundColor("week-voc-btn");
    dropdownLimiter("week-voc-dropdown", "week-voc-btn");
}
//last month
document.getElementById("month-voc-btn").onclick = function() {show_month_voc_graph()};

function show_month_voc_graph() {
    
    document.getElementById("month-voc-dropdown").classList.toggle("show");
    changeBackgroundColor("month-voc-btn");
    dropdownLimiter("month-voc-dropdown", "month-voc-btn");
}



//pm2.5 graphs
document.getElementById("pm25-btn").onclick = function() {show_pm25_graphs()};

function show_pm25_graphs() {
    
    document.getElementById("pm25-dropdown").classList.toggle("show");
    changeBackgroundColor("pm25-btn");
    closeChildren("pm25-dropdown");
    parrentDropdownLimiter("pm25-dropdown", "pm25-btn");
}
//last 24 hours
document.getElementById("day-pm25-btn").onclick = function() {show_day_pm25_graph()};

function show_day_pm25_graph() {
    
    document.getElementById("day-pm25-dropdown").classList.toggle("show");
    changeBackgroundColor("day-pm25-btn");
    dropdownLimiter("day-pm25-dropdown", "day-pm25-btn");
}
//last week
document.getElementById("week-pm25-btn").onclick = function() {show_week_pm25_graph()};

function show_week_pm25_graph() {
    
    document.getElementById("week-pm25-dropdown").classList.toggle("show");
    changeBackgroundColor("week-pm25-btn");
    dropdownLimiter("week-pm25-dropdown", "week-pm25-btn");
}
//last month
document.getElementById("month-pm25-btn").onclick = function() {show_month_pm25_graph()};

function show_month_pm25_graph() {
    
    document.getElementById("month-pm25-dropdown").classList.toggle("show");
    changeBackgroundColor("month-pm25-btn");
    dropdownLimiter("month-pm25-dropdown", "month-pm25-btn");
}

//toggles the background color
function changeBackgroundColor(id){
    const btn_id = document.getElementById(id);
    if (btn_id.style.backgroundColor === 'lightgray')
    {
        btn_id.style.backgroundColor = "gray";
        btn_id.style.color = "white";
    }
    else{
        btn_id.style.backgroundColor = "lightgray";
        btn_id.style.color = "black";
    }
    //console.log(ul.querySelectorAll('.show').length);
}

//closes children of a dropdown when the parent was closed
function closeChildren(id){
    const dropdown_children = document.getElementById(id).children;
    for (i = 0; i < dropdown_children.length; i++){
        //console.log(dropdown_children[i].className);
        
        dropdown_children[i].classList.remove('show');
        if (dropdown_children[i].style.backgroundColor == "lightgray")
        {
            dropdown_children[i].style.backgroundColor = "gray"
            dropdown_children[i].style.color = "white"
        }
    }
}

//console.log(document.querySelector('.graphs'));

//const ul = document.querySelector('.graphs');
//const children = ul.children;
//console.log(ul.querySelectorAll('.show').length);

//closes previously opened dropdowns to only have child one open at a time
function dropdownLimiter(id, btn_id){
    const current_dropdown = document.getElementById(id);
    const par_dropdown_id = current_dropdown.parentNode.id;
    const dropdown_children = document.getElementById(par_dropdown_id).children;
    //console.log(dropdown_children);
    for (i = 0; i < dropdown_children.length; i ++)
    {
        //console.log(dropdown_children[i].className);
        if(dropdown_children[i].classList.contains("show")  && dropdown_children[i].id != id)
        {
            //console.log(dropdown_children[i].className);
            dropdown_children[i].classList.remove('show');
            for (j = 0; j < dropdown_children.length; j ++)
            {
                if (dropdown_children[j].style.backgroundColor == "lightgray" && dropdown_children[j].id != btn_id)
                {
                    dropdown_children[j].style.backgroundColor = "gray"
                    dropdown_children[j].style.color = "white"
                }
            }
            
        }    
    }
    //console.log(par_dropdown_id);
}

//closes previously opened dropdowns to only have one parent open at a time
function parrentDropdownLimiter(id, btn_id){
    const current_dropdown = document.getElementById(id);
    const par_dropdown_id1 = current_dropdown.parentNode.id;
    const par_dropdown_id2 = document.getElementById(par_dropdown_id1).parentNode.id;
    const dropdown_children1 = document.getElementById(par_dropdown_id1).children;
    const dropdown_children2 = document.getElementById(par_dropdown_id2).children;
    //console.log(dropdown_children1);
    //console.log(dropdown_children2);
    for (i = 0; i < dropdown_children2.length; i ++)
    {
        //console.log(dropdown_children2[i].className);
        const par_dropdown_id1 = document.getElementById(dropdown_children2[i].id).id;
        //console.log(par_dropdown_id1);
        const dropdown_children1 = document.getElementById(par_dropdown_id1).children;
        for (f = 0; f < dropdown_children1.length; f ++)
        {
            //console.log(dropdown_children1[f].className);
            if(dropdown_children1[f].classList.contains("show")  && dropdown_children1[f].id != id)
            {
                //console.log(dropdown_children1[f].className);
                dropdown_children1[f].classList.remove('show');
                for (j = 0; j < dropdown_children1.length; j ++)
                {
                    if (dropdown_children1[j].style.backgroundColor == "lightgray" && dropdown_children1[j].id != btn_id)
                    {
                        dropdown_children1[j].style.backgroundColor = "gray"
                        dropdown_children1[j].style.color = "white"
                    }
                }
            }  
        }  
    }
    //console.log(par_dropdown_id1);
    //onsole.log(par_dropdown_id2);
}