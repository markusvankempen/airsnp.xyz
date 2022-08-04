//temp graphs
const temp_btn = document.getElementById('temp-btn');
temp_btn.onclick = function() {show_temp_graphs()};

function show_temp_graphs() {
    changeBackgroundColor("temp-btn");
    document.getElementById("temp-dropdown").classList.toggle("show");
}
//last 24 hours
document.getElementById("day-temp-btn").onclick = function() {show_day_temp_graph()};

function show_day_temp_graph() {
    changeBackgroundColor("day-temp-btn");
    document.getElementById("day-temp-dropdown").classList.toggle("show");
}
//last week
document.getElementById("week-temp-btn").onclick = function() {show_week_temp_graph()};

function show_week_temp_graph() {
    changeBackgroundColor("week-temp-btn");
    document.getElementById("week-temp-dropdown").classList.toggle("show");
}
//last month
document.getElementById("month-temp-btn").onclick = function() {show_month_temp_graph()};

function show_month_temp_graph() {
    changeBackgroundColor("month-temp-btn");
    document.getElementById("month-temp-dropdown").classList.toggle("show");
}



//humidity graphs
document.getElementById("humid-btn").onclick = function() {show_humid_graphs()};

function show_humid_graphs() {
    changeBackgroundColor("humid-btn");
    document.getElementById("humid-dropdown").classList.toggle("show");
}
//last 24 hours
document.getElementById("day-humid-btn").onclick = function() {show_day_humid_graph()};

function show_day_humid_graph() {
    changeBackgroundColor("day-humid-btn");
    document.getElementById("day-humid-dropdown").classList.toggle("show");
}
//last week
document.getElementById("week-humid-btn").onclick = function() {show_week_humid_graph()};

function show_week_humid_graph() {
    changeBackgroundColor("week-humid-btn");
    document.getElementById("week-humid-dropdown").classList.toggle("show");
}
//last month
document.getElementById("month-humid-btn").onclick = function() {show_month_humid_graph()};

function show_month_humid_graph() {
    changeBackgroundColor("month-humid-btn");
    document.getElementById("month-humid-dropdown").classList.toggle("show");
}



//voc graphs
document.getElementById("voc-btn").onclick = function() {show_voc_graphs()};

function show_voc_graphs() {
    changeBackgroundColor("voc-btn");
    document.getElementById("voc-dropdown").classList.toggle("show");
}
//last 24 hours
document.getElementById("day-voc-btn").onclick = function() {show_day_voc_graph()};

function show_day_voc_graph() {
    changeBackgroundColor("day-voc-btn");
    document.getElementById("day-voc-dropdown").classList.toggle("show");
}
//last week
document.getElementById("week-voc-btn").onclick = function() {show_week_voc_graph()};

function show_week_voc_graph() {
    changeBackgroundColor("week-voc-btn");
    document.getElementById("week-voc-dropdown").classList.toggle("show");
}
//last month
document.getElementById("month-voc-btn").onclick = function() {show_month_voc_graph()};

function show_month_voc_graph() {
    changeBackgroundColor("month-voc-btn");
    document.getElementById("month-voc-dropdown").classList.toggle("show");
}



//pm2.5 graphs
document.getElementById("pm25-btn").onclick = function() {show_pm25_graphs()};

function show_pm25_graphs() {
    changeBackgroundColor("pm25-btn");
    document.getElementById("pm25-dropdown").classList.toggle("show");
}
//last 24 hours
document.getElementById("day-pm25-btn").onclick = function() {show_day_pm25_graph()};

function show_day_pm25_graph() {
    changeBackgroundColor("day-pm25-btn");
    document.getElementById("day-pm25-dropdown").classList.toggle("show");
}
//last week
document.getElementById("week-pm25-btn").onclick = function() {show_week_pm25_graph()};

function show_week_pm25_graph() {
    changeBackgroundColor("week-pm25-btn");
    document.getElementById("week-pm25-dropdown").classList.toggle("show");
}
//last month
document.getElementById("month-pm25-btn").onclick = function() {show_month_pm25_graph()};

function show_month_pm25_graph() {
    changeBackgroundColor("month-pm25-btn");
    document.getElementById("month-pm25-dropdown").classList.toggle("show");
}

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
}