var canvas = new fabric.Canvas('canvas');

var block_width = 100;
var block_height = 100;

var heroy = 200;
var herox = 200;

var hero_object = "";

var block_object = "";

function hero_update()
{
    fabric.Image.fromURL("Groot_Hero.png", function (Img)
    {
        hero_object = Img;

        hero_object.scaleToWidth(150);
        hero_object.scaleToHeight(140);
        hero_object.set
        ({
            top:heroy,
            left:herox
        });

        canvas.add(hero_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function (Img)
    {
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:heroy,
            left:herox
        });

        canvas.add(block_object);
    });
}

window.addEventListener("keydown", keydown);

function keydown(e) 
{
     keyPressed = e.keyCode;
     console.log(keyPressed);

    if (e.shiftKey == true && keyPressed == '38')
    {
        console.log("UP AND SHIFT!");

        block_width = block_width + 10;
        block_height = block_height + 10;

        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (e.shiftKey == true && keyPressed == '40')
    {
        console.log("DOWN AND SHIFT!")
        block_width = block_width - 10;
        block_height = block_height - 10;

        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (e.shiftKey == true && keyPressed == '37')
    {
        console.log("LEFT AND SHIFT!")
        herox = herox - 10;
        heroy = heroy - 10;

        document.getElementById("currentx").innerHTML = herox;
        document.getElementById("currenty").innerHTML = heroy;
    }

    if (e.shiftKey == true && keyPressed == '39')
    {
        console.log("RIGHT AND SHIFT!")
        herox = herox + 10;
        heroy = heroy + 10;

        document.getElementById("currentx").innerHTML = herox;
        document.getElementById("currenty").innerHTML = heroy;
    }

    if (keyPressed == '38')
    {
        up();
        console.log("UP!");
    }

    if (keyPressed == '40')
    {
        down();
        console.log("DOWN!");
    }

    if (keyPressed == '37')
    {
        left();
        console.log("LEFT!");
    }

    if (keyPressed == '39')
    {
        right();
        console.log("RIGHT!")
    }

    if (keyPressed == '72')
    {
        left_hand = Math.floor((Math.random() * 5) + 1);
        console.log(left_hand);

        if (left_hand == 1)
        {
            new_image('CaptainAmerica_Left_Hand.png');
        }

        if (left_hand == 2)
        {
            new_image('Hulk_Left_Hand.png');
        }

        if (left_hand == 3)
        {
            new_image('IronMan_Left_Hand.png');
        }

        if (left_hand == 4)
        {
            new_image('SpiderMan_Left_Hand.png');
        }

        if (left_hand == 5)
        {
            new_image('Thor_Left_Hand.png');
        }
        
        console.log("H meaning a Left Hand!");
    }

    if ( keyPressed == '82')
    {
        right_hand = Math.floor((Math.random() * 4) + 1);
        console.log(right_hand);

        if (right_hand == '1')
        {
            new_image('Hulk_Right_Hand.png');
        }

        if (right_hand == '2')
        {
            new_image('IronMan_Right_Hand.png');
        }

        if (right_hand == '3')
        {
            new_image('SpiderMan_Right_Hand.png');
        }

        if (right_hand == '4')
        {
            new_image('Thor_Right_Hand.png');
        }

        console.log("R meaning a Right Hand!");
    }

    if (keyPressed == '66')
    {
        body = Math.floor((Math.random() * 3) + 1);
        console.log(body);

        if (body == '1')
        {
            new_image('Hulk_Body.png');
        }

        if (body == '2')
        {
            new_image('IronMan_Body.png');
        }

        if (body == '3')
        {
            new_image('SpiderMan_Body.png');
        }

        console.log("B meaning a Body!");
    }

    if (keyPressed == '70')
    {
        face = Math.floor((Math.random() * 4) + 1);
        console.log(face);

        if (face == '1')
        {
            new_image('Hulk_Face.png');
        }

        if (face == '2')
        {
            new_image('IronMan_Face.png');
        }

        if (face == '3')
        {
            new_image('SpiderMan_Face.png');
        }

        if (face == '4')
        {
            new_image('Thor_Face.png');
        }

        console.log("F meaning a Face!");
    }

    if (keyPressed == '76')
    {
        legs = Math.floor((Math.random() * 3) + 1);
        console.log(legs);

        if (legs == '1')
        {
            new_image('Hulk_Legs.png');
        }

        if (legs == '2')
        {
            new_image('IronMan_Legs.png');
        }

        if (legs == '3')
        {
            new_image('SpiderMan_Legs.png');
        }

        console.log("L meaning a Pair of Legs!")
    }
}

function up()
{
    if (heroy >= 0)
    {
        heroy = heroy - block_height;

        console.log("BLOCK HEIGHT IS " + block_height + " px!");
        console.log("WHEN UP IS PRESSED, THE X AND Y COORDINATES ARE X = " + herox + ", Y = " + heroy + "!");

        canvas.remove(hero_object);
        hero_update();
    }
}

function down()
{
    if (heroy <= 450)
    {
        heroy = heroy + block_height;

        console.log("BLOCK HEIGHT IS " + block_height + " px!");
        console.log("WHEN DOWN IS PRESSED, THE X AND Y COORDINATES ARE X = " + herox + ", Y = " + heroy + "!");

        canvas.remove(hero_object);
        hero_update();
    }
}

function left()
{
    if (herox >= 100)
    {
        herox = herox - block_width;

        console.log("BLOCK WIDTH IS " + block_width + " px!");
        console.log("WHEN LEFT IS PRESSED, THE X AND Y COORDINATES ARE X = " + herox + ", Y = " + heroy + "!");

        canvas.remove(hero_object);
        hero_update();
    }
}

function right()
{
    if (herox <= 850)
    {
        herox = herox + block_width;

        console.log("BLOCK WIDTH IS " + block_width + " px!");
        console.log("WHEN RIGHT IS PRESSED, THE X AND Y COORDINATES ARE X = " + herox + ", Y = " + heroy + "!");

        canvas.remove(hero_object);
        hero_update();
    }
}
