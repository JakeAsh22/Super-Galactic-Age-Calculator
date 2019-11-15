import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Calculator} from './../src/calc.js';

$(document).ready(function()
{
  $("form#ageForm").submit(function(event)
  {
    event.preventDeault();
    let age = parseInt($("#ageInput").val());
    let userAge = new Calculator(age);
    $(".userAgeMerc").text(userAge.mercAge());
  });
});
