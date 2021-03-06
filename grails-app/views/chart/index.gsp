<%--
  Created by IntelliJ IDEA.
  User: carcelem
  Date: 02/05/2014
  Time: 10:09
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Mews Analytics</title>
    <script data-main="${resource(dir:"app/js", file: "main.js")}" src="${resource(dir:"app/js/lib/chart", file: "Chart.min.js")}"></script>
    <link rel="stylesheet" href="${resource(dir: "css/analytics", file: "global.css")}">
</head>

<body>
<div class="header"><span>mews</span><span class="analytics">Analytics</span></div>
<h1 class="title">Moods per Source</h1>
<g:each in="${sources}">
    <div class="chart_container">
        <h1>${it.key}</h1>
        <canvas id="${it.key}" width="400" height="400"></canvas>
        <script>
            //Get the context of the canvas element we want to select
            var ctx = document.getElementById("${it.key}").getContext("2d");

            var data = {
                labels : ${moodKeys},
                datasets : [
                    {
                        fillColor : "rgba(220,220,220,0.7)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        data : ${it.value}
//                        data : [28,48,40,19,96,27,100, 50, 61,25,34,54]
                    }

                ]
            }

            new Chart(ctx).Radar(data,{});

        </script>
    </div>

</g:each>


<script></script>
</body>
</html>