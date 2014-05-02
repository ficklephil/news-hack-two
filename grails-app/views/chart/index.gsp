<%--
  Created by IntelliJ IDEA.
  User: carcelem
  Date: 02/05/2014
  Time: 10:09
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title></title>
    <script data-main="${resource(dir:"app/js", file: "main.js")}" src="${resource(dir:"app/js/lib/chart", file: "Chart.min.js")}"></script>
</head>

<body>

<canvas id="myChart" width="400" height="400"></canvas>

<script>
    //Get the context of the canvas element we want to select
    var ctx = document.getElementById("myChart").getContext("2d");

    var data = {
        labels : ["January","February","March","April","May","June","July"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [65,59,90,81,56,55,40]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [28,48,40,19,96,27,100]
            }
        ]
    }

    new Chart(ctx).Line(data,{});

</script>


<script></script>
</body>
</html>