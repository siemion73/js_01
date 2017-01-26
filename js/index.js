function printAnswer (ans) {
	document.write ('<br>Відповідь Х= ' +ans);
	alert ('Відповідь Х= ' +ans);
    }
var a=Number (prompt ('Введіть A'));
document.write ('<br>A= ' +a);
var b=Number (prompt ('Введіть B'));
document.write ('<br>B= ' +b);
var c=Number (prompt ('Введіть C'));
document.write ('<br>C= ' +c);
if (a==0) {
	if (b==0) {
		alert ('Немає рішень');
		} else {
			var x;
			x=c/b;
			x=-x;
			printAnswer(x);
		}	
    } else { 
	if (b==0) {
		if (c==0){
			alert ('X=0');
			} else {
				alert ('Немає рішень');
					}
		    } 
    }
var D=b*b-4*a*c;
console.log ('D= '+D);
if (D==0) {
		var x;
		x=b/2*a;
		x=-x;
		printAnswer(x);
	} else {
			if (D >0){
				var x,d;
				d=Math.sqrt (D);
				x=(d-b)/(2*a);
				printAnswer (x);
				x=0;
				d=-d;
				x=(d-b)/(2*a);
				printAnswer (x);
			}else {
				alert('Нема рішень');
				}
		}