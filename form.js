//form creation
var form=document.createElement('form');
form.setAttribute('name','createform');

// firstname
var fname=document.createElement('label');
fname.setAttribute('for','fname');
fname.innerHTML="First name";
var input1=document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('id','fname');
var br1=document.createElement('br')
var br2=document.createElement('br')

// lastname
var lname=document.createElement('label');
lname.setAttribute('for','lname');
lname.innerHTML="Last name";
var input2=document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute('id','lname');
var br3=document.createElement('br')
var br4=document.createElement('br')

// address
var add=document.createElement('label');
add.setAttribute('for','add');
add.innerHTML="Address";
var input3=document.createElement('input');
input3.setAttribute('type','text');
input3.setAttribute('id','add');
var br5=document.createElement('br')
var br6=document.createElement('br')

// pincode
var pin=document.createElement('label');
pin.setAttribute('for','pin');
pin.innerHTML="Pincode";
var input4=document.createElement('input');
input4.setAttribute('type','number');
input4.setAttribute('id','pin');
var br7=document.createElement('br')
var br8=document.createElement('br')

// gender
var gen=document.createElement('label');
gen.setAttribute('for','gender');
gen.innerHTML="Gender";
var input5=document.createElement('input');
input5.setAttribute('type','text');
input5.setAttribute('id','gender');
var br9=document.createElement('br')
var br10=document.createElement('br')

//food
var p=document.createElement('p');
p.innerHTML="Food"


var input6=document.createElement('input');
input6.setAttribute('type','checkbox');
input6.setAttribute('id','food1');
input6.setAttribute('value','South Indian')
var label1=document.createElement('label');
label1.setAttribute('for','food1');
label1.innerHTML="South Indian";



var input6f=document.createElement('input');
input6f.setAttribute('type','checkbox');
input6f.setAttribute('id','food2');
input6f.setAttribute('value','North Indian');
var label2=document.createElement('label');
label2.setAttribute('for','food2');
label2.innerHTML="North Indian";



var input6f1=document.createElement('input');
input6f1.setAttribute('type','checkbox');
input6f1.setAttribute('id','food3');
input6f1.setAttribute('value','Chinese')
var label3=document.createElement('label');
label3.setAttribute('for','food3');
label3.innerHTML="Chinese";


var input6f2=document.createElement('input');
input6f2.setAttribute('type','checkbox');
input6f2.setAttribute('id','food4');
input6f2.setAttribute('value','Italian');
var label4=document.createElement('label');
label4.setAttribute('for','food4');
label4.innerHTML="Italian";


var input6f3=document.createElement('input');
input6f3.setAttribute('type','checkbox');
input6f3.setAttribute('id','food5');
input6f3.setAttribute('value','Mexican');
var label5=document.createElement('label');
label5.setAttribute('for','food5');
label5.innerHTML="Mexican";



var br11=document.createElement('br')
var br12=document.createElement('br')




//state
var state=document.createElement('label');
state.setAttribute('for','state');
state.innerHTML="State";
var input7=document.createElement('input');
input7.setAttribute('type','text');
input7.setAttribute('id','state');
var br13=document.createElement('br')
var br14=document.createElement('br')


//country
var con=document.createElement('label');
con.setAttribute('for','con');
con.innerHTML="Country";
var input8=document.createElement('input');
input8.setAttribute('type','text');
input8.setAttribute('id','con');
var br15=document.createElement('br')
var br16=document.createElement('br')

//submit
var input9=document.createElement('input');
input9.setAttribute('type','submit');
input9.setAttribute('value','submit');
var br17=document.createElement('br')

//table creation
var table=document.createElement('table');
table.setAttribute('class','table');
var thead=document.createElement('thead');
var tr=document.createElement('tr');
var th1=document.createElement('th');
th1.innerHTML="First name";
var th2=document.createElement('th');
th2.innerHTML="last name";
var th3=document.createElement('th');
th3.innerHTML="Address";
var th4=document.createElement('th');
th4.innerHTML="Pincode";
var th5=document.createElement('th');
th5.innerHTML="Gender";
 var th6=document.createElement('th');
 th6.innerHTML="Food";
var th7=document.createElement('th');
th7.innerHTML="state";
var th8=document.createElement('th');
th8.innerHTML="Country";

//adding submit event
form.addEventListener('submit', function val(e){
 e.preventDefault();
 var val1=input1.value;
 console.log(val1)
 //passing the value entered in the textbox to new varriables
var val2=input2.value;
var val3=input3.value;
var val4=input4.value;
var val5=input5.value;
var val6=input7.value;
var val7=input8.value;
//creating empty array and passing the value of the checkbox which is checked
var arr=[];

if(input6.checked){
 arr.push(input6.value)
}

if(input6f.checked){
 arr.push(input6f.value)
}

if(input6f1.checked){
 arr.push(input6f1.value)
}
if(input6f2.checked){
 arr.push(input6f2.value)
}
if(input6f3.checked){
 arr.push(input6f3.value)
}

if(arr.length<2)

 
 {
 alert('Must choose at least 2 out of 5 options')
 return false;
 } 
 



var tbody=document.createElement('tbody');
var tr1=document.createElement('tr');
var td1=document.createElement('td');
td1.innerHTML=val1;
var td2=document.createElement('td');
td2.innerHTML=val2;
var td3=document.createElement('td');
td3.innerHTML=val3;
var td4=document.createElement('td');
td4.innerHTML=val4;
var td5=document.createElement('td');
td5.innerHTML=val5;
 var td6=document.createElement('td');
td6.innerHTML=arr;
var td7=document.createElement('td');
td7.innerHTML=val6;
 var td8=document.createElement('td');
 td8.innerHTML=val7;

tr.append(th1,th2,th3,th4,th5,th6,th7,th8)
thead.append(tr)

tr1.append(td1,td2,td3,td4,td5,td6,td7,td8)
tbody.append(tr1)

table.append(thead,tbody)
document.body.append(table)
document.createform.reset();


})

//form append
form.append(fname,input1,br1,br2);
form.append(lname,input2,br3,br4);
form.append(add,input3,br5,br6);
form.append(pin,input4,br7,br8);
form.append(gen,input5,br9,br10);
form.append(p);
form.style.textAlign = "left";
form.append(input6,label1,input6f,label2,input6f1,label3,input6f2,label4,input6f3,label5,br11,br12);
form.append(state,input7,br13,br14);
form.append(con,input8,br15,br16,br17);
form.append(input9)
document.body.append(form);