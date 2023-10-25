var enemies;

function Enemy(x, y, range)
{
    this.x = x;
    this.y = y;
    this.range = range;

    this.currentX = x;
    this.currentY = y;
    this.inc = 1.5;

    this.update = function()
    {
        this.currentX += this.inc;
        if(this.currentX >= this.x + this.range)
        {
            this.inc = -1.5;
        }
        else if (this.currentX < this.x)
        {
            this.inc = 1.5;
        }

    }

    this.draw = function()
    {
        this.update();
        fill(255,165,0);
        ellipse(this.currentX, this.currentY - 10, 40);
    }

    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.currentX, this.currentY)
        if(d < 30)
        {
            return true;
        }

        return false;
    }
}

function Enemy_flying(x, y, range)
{
    this.x = x;
    this.y = y;
    this.range = range;

    this.currentX = x;
    this.currentY = y;
    this.inc = 1;

    this.update = function()
    {
        this.currentY += this.inc;
        if(this.currentY >= this.y + this.range)
        {
            this.inc = -1;
        }
        else if (this.currentY < this.y)
        {
            this.inc = 1;
        }
    }

    this.draw = function()
    {
        this.update();
        fill(127,255,212);
        ellipse(this.currentX, this.currentY, 20,40);
    }

    this.checkContact = function(gc_x, gc_y)
    {
        var d = dist(gc_x, gc_y, this.currentX, this.currentY)
        if(d < 20)
        {
            return true;
        }

        return false;
    }
    
}

