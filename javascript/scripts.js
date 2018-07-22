window.onload;

function rotateArrow()
{
    angleRotate.angle = angleRotate.angle+1;

    document.getElementById('redArrow').style.transform = 'rotate('+angleRotate.angle+'deg)';
}

function rotateArrow2()
{
    angleRotate.angle2 = angleRotate.angle2+1;

    document.getElementById('redArrow2').style.transform = 'rotate('+angleRotate.angle+'deg)';
}

function rotateArrow3()
{
    angleRotate.angle3 = angleRotate.angle3+1;

    document.getElementById('redArrow3').style.transform = 'rotate('+angleRotate.angle+'deg)';
}

function rotateArrow4()
{
    angleRotate.angle4 = angleRotate.angle4+1;

    document.getElementById('redArrow4').style.transform = 'rotate('+angleRotate.angle+'deg)';
}

var angleRotate = new Object();
angleRotate.angle = 0;
angleRotate.angle2 = 0;
angleRotate.angle3 = 0;
angleRotate.angle4 = 0;


var timer = setInterval("rotateArrow()", 20);
var timer2 = setInterval("rotateArrow2()", 100);
var timer3 = setInterval("rotateArrow3()", 850);
var timer4 = setInterval("rotateArrow4()", 550);