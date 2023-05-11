window.onload = function(){start();};

var n=0;
var bool;
var blue=0;
var red=0;
var matrix= [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            ];


function start()
{
    for(var i=0;i<21;i++)
    {
        for(var j=0;j<21;j++)
        {
            if((i%2==1 && j%2==0)||(i%2==0 && j%2==1))
            {
                document.getElementById(i*100+j).setAttribute("onclick","put("+i+","+j+");");
            }
        }
    }
    if(n%2==1)
    {
        document.body.style.background='rgb(156, 167, 255)'
    }
    else
    {
        document.body.style.background='rgb(255, 144, 144)'
    }
    for(var i=0;i<21;i++)
    {
        for(var j=0;j<21;j++)
        {
            if(i==0||i==20||j==0||j==20)
            {
                document.getElementById(i*100+j).style.backgroundColor='#000'
            }
        }
    }
}

function put(i,j)
{
    if(matrix[i][j]==0)
    {
        matrix[i][j]=1;
        document.getElementById(i*100+j).style.backgroundColor='#000';
        check();
        n++;
        bool=false;
    }
    if(n%2==1)
    {
        document.body.style.background='rgb(156, 167, 255)'
    }
    else
    {
        document.body.style.background='rgb(255, 144, 144)'
    }
}

function check()
{
    for(var i=1;i<21;i+=2)
    {
        for(var j=1;j<21;j+=2)
        {
            if(matrix[i][j+1]==1 && matrix[i][j-1]==1 && matrix[i-1][j]==1 && matrix[i+1][j]==1 && matrix[i][j]!=2 && matrix[i][j]!=3)
            {
                if(n%2==0)
                {
                    matrix[i][j]=2;
                    red++
                    document.getElementById(i*100+j).style.backgroundColor='#f00';
                    bool=true;
                }
                else
                {
                    matrix[i][j]=3;
                    blue++;
                    bool=true;
                    document.getElementById(i*100+j).style.backgroundColor='#00f';
                }
            }
        }
    }
    document.getElementById('p1').innerHTML=red;
    document.getElementById('p2').innerHTML=blue;
    if(bool)
    {
        n--;
    }
}