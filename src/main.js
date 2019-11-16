
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
    let avgAge = parseInt($("input#ageExp").val());
    let userAge = new Calculator(age,avgAge);
    $("#mercury").click(function()
    {
      $(".results").hide();
      $(".mercResults").show();
      $(".userAgeMerc").text(userAge.mercAge());
      if (age<avgAge)
      {
        $(".mercYears").text("You have an expected "+ userAge.mercAgeExpect()+ " years left. Make the most of it!");
      }
      else
      {
        $(".mercYears").text("You have lived " + userAge.mercAgeExpect() + " year[s] longer than expected!");
      }
    });

    $("#venus").click(function()
    {
      $(".results").hide();
      $(".venusResults").show();
      $(".userAgeVenus").text(userAge.venusAge());
      if (age<avgAge)
      {
        $(".venusYears").text("You have an expected "+ userAge.venusAgeExpect()+ " years left. Make the most of it!");
      }
      else
      {
        $(".venusYears").text("You have lived " + userAge.venusAgeExpect() + " year[s] longer than expected!");
      }
    });

    $("#mars").click(function()
    {
      $(".results").hide();
      $(".marsResults").show();
      $(".userAgeMars").text(userAge.marsAge());
      if (age<avgAge)
      {
        $(".marsYears").text("You have an expected "+ userAge.marsAgeExpect()+ " years left. Make the most of it!");
      }
      else
      {
        $(".marsYears").text("You have lived " + userAge.marsAgeExpect() + " year[s] longer than expected!");
      }
    });

    $("#jupiter").click(function()
    {
      $(".results").hide();
      $(".jupiterResults").show();
      $(".userAgeJupiter").text(userAge.jupiterAge());
      if (age<avgAge)
      {
        $(".jupiterYears").text("You have an expected "+ userAge.jupiterAgeExpect()+ " years left. Make the most of it!");
      }
      else
      {
        $(".jupiterYears").text("You have lived " + userAge.jupiterAgeExpect() + " year[s] longer than expected!");
      }
    });
  });


});
