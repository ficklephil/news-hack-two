<%--
  Created by IntelliJ IDEA.
  User: philpotb
  Date: 01/05/2014
  Time: 13:56
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" %>
<html ng-controller="AppCtrl">
<head>
  <title></title>
    <script data-main="${resource(dir:"app/js", file: "main.js")}" src="${resource(dir:"app/js/lib/require", file: "require.js")}"></script>
</head>
<body>
    <div ng-view></div>
</body>
</html>