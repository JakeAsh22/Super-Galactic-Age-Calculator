
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
    $(".userAgeMerc").text(userAge.mercAge());

  });

});
