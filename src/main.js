
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {Calculator} from './../src/calc.js';

$("document").ready(function()
{
  $("#ageButton").click(function()
  {
    let age = parseInt($("input#ageInput").val());
    let avgAge = parseInt($("input#ageExp").val());
    if (age<0 || isNaN(age) || avgAge<0 || isNaN(avgAge))
    {
      alert("Please Enter positive numbers");
    }

    $("#mercury").click(function()
    {
      let userAge = new Calculator(age,avgAge,.24);
      $(".results").hide();
      $(".mercResults").show();
      $(".cardResults").show();
      $(".userAgeMerc").text(userAge.findAge());
      if (age==avgAge)
      {
        $(".mercYears").text("You have "+ userAge.ageExpect()+ " years left. Time to work on that bucket list!");
      }
      else if (age<avgAge)
      {
        $(".mercYears").text("You have an expected "+ userAge.ageExpect()+ " years left. Make the most of it!");
      }
      else
      {
        $(".mercYears").text("You have lived " + userAge.ageExpect() + " year[s] longer than expected!");
      }
    });

    $("#venus").click(function()
    {
      let userAge = new Calculator(age,avgAge,.62);
      $(".results").hide();
      $(".cardResults").show();
      $(".venusResults").show();
      $(".userAgeVenus").text(userAge.findAge());
      if (age==avgAge)
      {
        $(".venusYears").text("You have "+ userAge.ageExpect()+ " years left. Time to work on that bucket list!");
      }
      else if (age<avgAge)
      {
        $(".venusYears").text("You have an expected "+ userAge.ageExpect()+ " years left. Make the most of it!");
      }
      else
      {
        $(".venusYears").text("You have lived " + userAge.ageExpect() + " year[s] longer than expected!");
      }
    });

    $("#mars").click(function()
    {
      let userAge = new Calculator(age,avgAge,1.88);
      $(".results").hide();
      $(".cardResults").show();
      $(".marsResults").show();
      $(".userAgeMars").text(userAge.findAge());
      if (age==avgAge)
      {
        $(".marsYears").text("You have  "+ userAge.ageExpect()+ " years left. Time to work on that bucket list!");
      }
      else if (age<avgAge)
      {
        $(".marsYears").text("You have an expected "+ userAge.ageExpect()+ " years left. Make the most of it!");
      }
      else
      {
        $(".marsYears").text("You have lived " + userAge.ageExpect() + " year[s] longer than expected!");
      }
    });

    $("#jupiter").click(function()
    {
      let userAge = new Calculator(age,avgAge,11.86);
      $(".results").hide();
      $(".cardResults").show();
      $(".jupiterResults").show();
      $(".userAgeJupiter").text(userAge.findAge());
      if (age==avgAge)
      {
        $(".jupiterYears").text("You have "+ userAge.ageExpect()+ " years left. Time to work on that bucket list!");
      }
      else if (age<avgAge)
      {
        $(".jupiterYears").text("You have an expected "+ userAge.ageExpect()+ " years left. Make the most of it!");
      }
      else
      {
        $(".jupiterYears").text("You have lived " + userAge.ageExpect() + " year[s] longer than expected!");
      }
    });
  });


});
