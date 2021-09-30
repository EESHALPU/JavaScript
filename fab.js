// function x(a,b,callback)
// {
//     let sum=a+b;
//     a=sum;
//     callback(sum);
// }

// a=5,b=4
// x(a,b,function(value)
// {
//     console.log(value);
//     x(value,b,function(value)
//     {
//         console.log(value);
//     })
// });

//fabonacci series 

function fab(a,b,callback)
{
    let next=a+b;
    callback(a,b,next);
    a=b;b=next;
}


fab(a=0,b=1,function(x,y,nxt){
    console.log(x);
    console.log(y);
    console.log(nxt);
    fab(a=y,b=nxt,function(x,y,nxt)
    {
        console.log(nxt);
        fab(a=y,b=nxt,function(x,y,nxt)
        {
            console.log(nxt);
            fab(a=y,b=nxt,function(x,y,nxt)
            {
                console.log(nxt);
                fab(a=y,b=nxt,function(x,y,nxt)
                {
                    console.log(nxt);
                    fab(a=y,b=nxt,function(x,y,nxt)
                    {
                        console.log(nxt);
                        fab(a=y,b=nxt,function(x,y,nxt)
                        {
                            console.log(nxt);
                            fab(a=y,b=nxt,function(x,y,nxt)
                            {
                                console.log(nxt);
                                fab(a=y,b=nxt,function(x,y,nxt)
                                {
                                    console.log(nxt);
                                })
                            })
                        })
                    })
                })
            })

        })
    })
    
  
})


