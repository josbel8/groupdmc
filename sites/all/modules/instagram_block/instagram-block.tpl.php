<?php
/**
 * @file
 * Instagram block content.
 *
 * Available variables:
 *  content:   The Instagram images.
 *  response:  Instagram API response.
 */
    $path = $_GET['q'];
    $path = drupal_get_path_alias($path);
    switch ($path) {
        /**
        * Tag block: change tag, size, number of photos
        */
        case "dmc-tours-travel/destinos":
            echo "<a href='https://www.instagram.com/toursdmc'>
                    <div class='pre-title-ig'>S&iacute;guenos en&nbsp;&nbsp;</div>
                    <div class='title-ig'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                 </a>
                 <br>
                 <div class='images-ig'>";
            print render($content);
            echo "</div>";
            break;
        case "dmc-tours-travel/traslados":
            echo "<a href='https://www.instagram.com/toursdmc'>
                    <div class='pre-title-ig'>S&iacute;guenos en&nbsp;&nbsp;</div>
                    <div class='title-ig'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                 </a>
                 <br>
                 <div class='images-ig'>";
            print render($content);
            echo "</div>";
            break;
        case "dmc-tours-travel/hospedaje":
            echo "<a href='https://www.instagram.com/toursdmc'>
                    <div class='pre-title-ig'>S&iacute;guenos en&nbsp;&nbsp;</div>
                    <div class='title-ig'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                 </a>
                 <br>
                 <div class='images-ig'>";
            print render($content);
            echo "</div>";
            break;
        case "dmc-tours-travel/entretenimiento":
            echo "<a href='https://www.instagram.com/toursdmc'>
                    <div class='pre-title-ig'>S&iacute;guenos en&nbsp;&nbsp;</div>
                    <div class='title-ig'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                 </a>
                 <br>
                 <div class='images-ig'>";
            print render($content);
            echo "</div>";
            break;
        case "hotel-boutique-isabel-la-católica":
            echo "<a href='https://www.instagram.com/hotelisabellacatolica'>
                    <div class='pre-title-ig'>S&iacute;guenos en&nbsp;&nbsp;</div>
                    <div class='title-ig'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                 </a>
                 <br>
                 <div class='images-ig'>";
            print render($content);
            echo "</div>";
            break;
        case "juana-la-loca-restaurant":
            echo "<div class='row' style='margin-top: 15em;'>
                    <div class='columns'>
                        <a href='https://www.instagram.com/juanalalocarest'>
                            <div class='pre-title-ig'>S&iacute;guenos en&nbsp;&nbsp;</div>
                            <div class='title-ig'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                         </a>
                         <br>
                        <div class='images-ig'>";
            print render($content);
            echo "</div></div></div>";
            break;
        case "guillermina-restaurant":
            echo "<div class='row' style='margin-top: 17em;'>
                    <div class='columns'>
                        <a href='https://www.instagram.com/guillerminarest'>
                            <div class='pre-title-ig'>S&iacute;guenos en&nbsp;&nbsp;</div>
                            <div class='title-ig'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        </a>
                        <br>
                        <div class='images-ig'>";
            print render($content);
            echo "</div>";
            break;
        case "dmc-catering":
            echo "<a href='https://www.instagram.com/dmcmargarita'>
                    <div class='pre-title-ig'>S&iacute;guenos en&nbsp;&nbsp;</div>
                    <div class='title-ig'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                 </a>
                 <br>
                 <div class='images-ig'>";
            print render($content);
            echo "</div>";
            break;
        case "dmc-planner":
            echo "<a href='https://www.instagram.com/dmcplanner'>
                    <div class='pre-title-ig'>S&iacute;guenos en&nbsp;&nbsp;</div>
                    <div class='title-ig'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                 </a>
                 <br>
                 <div class='images-ig'>";
            print render($content);
            echo "</div>";
            break;
    }
