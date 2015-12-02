<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@page session="false" %>
<html>
<head>
    <TITLE>Будремавто</TITLE>
    <link rel="shortcut icon" href="img/icon.ico" type="image/x-icon">
    <SCRIPT SRC="js/jQueru/jquery-1.11.3.min.js"></SCRIPT>
    <link rel="stylesheet" type="text/css"   media='(min-width: 1600px)' href="css/different_sizes/main_1600.css">
    <link rel="stylesheet" type="text/css"   media='(min-width: 1440px) and (max-width: 1599px)' href="css/different_sizes/main_1440.css">
    <link rel="stylesheet" type="text/css"   media='(min-width: 1366px) and (max-width: 1439px)' href="css/different_sizes/main_1366.css">
    <link rel="stylesheet" type="text/css"   media='(min-width: 1280px) and (max-width: 1365px)' href="css/different_sizes/main_1280.css">
    <link rel="stylesheet" type="text/css"   media='(min-width: 1152px) and (max-width: 1279px)' href="css/different_sizes/main_1152.css">
    <link rel="stylesheet" type="text/css"   media='(min-width: 1024px) and (max-width: 1151px)' href="css/different_sizes/main_1024.css">
    <link rel="stylesheet" type="text/css"   media='(min-width: 200px) and (max-width: 1023px)'   href="css/different_sizes/main_900.css">
    <style type=text/css>
        #logo{
            width: 200px;
            height: auto;
        }
        #logo IMG{
            width: 200px;
            height: auto;
        }
        #cmain{
            padding: 0px;
            margin: 0px;
        }
    </style>
</head>
<body>

<DIV id="head">

</DIV>

<DIV id="wrap">

    <DIV ID="cheader" align="center">
        <DIV ID="logo" align="center">
            <IMG SRC="img/logText.png" align="center" width="auto" height="auto">
        </DIV>
        <DIV ID="search" >
            <FORM ACTION="#" >
                <P>
                    <INPUT TYPE="search" value="Поиск по сайту" ID="keyword" NAME="keyword" SIZE="20" align="right" >
                    <INPUT TYPE="button" ID="find" NAME="find" VALUE="Поиск" align="right"><BR>
                    <%--<SELECT ID="search_in" NAME="search_in">--%>
                    <%--<OPTION>В названиях</OPTION>--%>
                    <%--<OPTION>В ключевых словах</OPTION>--%>
                    <%--<OPTION SELECTED>В названиях и ключевых словах</OPTION>--%>
                    <%--</SELECT>--%>
                </P>
            </FORM>
        </DIV>
    </DIV>

    <DIV ID="cnavbar">
        <UL ID="navbar">
            <LI ID="list_index"><A >Главная</A></LI>
            <LI ID="list_product"><A >Услуги</A>
                <UL>
                    <LI><CODE><A >строительные работы</A></CODE></LI>
                    <LI><CODE><A >изделия из железа</A></CODE></LI>
                    <LI><CODE><A >грузоперевозки</A></CODE></LI>
                    <LI><CODE><A >услуги автокрана</A></CODE></LI>
                </UL>
            </LI>
            <LI ID="list_contacts"><A >Контакты</A></LI>
            <LI ID="list_do"><A >Деятельность</A>	</LI>
            <LI ID="list_aboutus"><A >О нас</A></LI>
        </UL>
    </DIV>

    <DIV ID="cmain" >

    </DIV>

    <DIV ID="contacts">
        <H2>Нашы контакты:</H2>
        <HR>
        <H4>г. Киев ул. Якутская 7<BR>тел: (067) 408-06-82<BR> (044) 403-82-38<BR>budremavto@ukr.net</H4>
    </DIV>
    <DIV ID="ccopyright">
        <DIV ID="ccompany">
            <H5>&copy BudRemAvto. num: (067) 408-06-82, (044) 403-82-38<BR>All right reserved,  2015 year.</H5>
        </DIV>
        <DIV ID="cdeveloper">
            <H5 align="right"><i> Developed by:<BR>Yashchuk A.F., num: (093) 411-37-74</i> </h5>
        </DIV>
    </DIV>

</DIV>


<DIV id="bottom">

</DIV>>


<SCRIPT SRC="js/load_product.js"></SCRIPT>
<script src="js/main.js"></script>

</body>
</html>

