
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Calculator} from './../src/calc.js';

$("document").ready(function()
{
  $("form#ageForm").click(function()
  {
    let age = parseInt($("input#ageInput").val());
    let userAge = new Calculator(age);
    $("#mercury").click(function()
    {
      $(".userAgeMerc").text(userAge.mercAge());
    });
    $("#venus").click(function()
    {
      $(".userAgeVenus").text(userAge.venusAge());
    });
    $("#mars").click(function()
    {
      $(".userAgeMars").text(userAge.marsAge());
    });
    $("#jupiter").click(function()
    {
      $(".userAgeJupiter").text(userAge.jupiterAge());
    });
  });


});
