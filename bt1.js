
var a = [4,0,1,-2,3];
var b = 0;
var c = [];
for( var i = 0 ; i < a.length; i++)
{
if (typeof a[i-1] !== 'undefined'){
    b+= a[i-1];
}
if (typeof a[i] !== 'undefined'){
    b+= a[i];
}
if (typeof a[i+1] !== 'undefined'){
    b+= a[i+1];
}
c.push(b);
b = 0;
}
console.log(c);

