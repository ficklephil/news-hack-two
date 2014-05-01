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
    <link rel="stylesheet" href="${resource(dir:"app/css", file:"all.css")}">
    <script data-main="${resource(dir:"app/js", file: "main.js")}" src="${resource(dir:"app/js/lib/require", file: "require.js")}"></script>
</head>
<body id="{{navDomain.pageId}}">
    <div ng-click="navDomain.navigate('/')" class="header">mews</div>
    <div ng-view></div>
    <div class="splash_container">
        <div class="splash_background"></div>
        <div class="splash_screen">
            <p class="blurb">Welcome to Mews, the worlds first mood driven news stream application. Start by picking a context for your news. Mews will build you a personalised stream of stories from around the web. We will ask you to rate how well these stories fit your current mood. As you vote, Mews will learn and update itself so it constantly gets better at building streams that are the perfect fit for you.</p>
            <p class="login">Email Address:</p>
            <input type="text" ng-model="user"/>
            <div class="ok_btn" ng-click="okClick()" ok-close-button>Login</div>
        </div>
    </div>
</body>
</html>