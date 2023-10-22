 
    var x= document.getElementById("Name")
    var y= document.getElementById("url")
    var tableBody=document.getElementById("demo")

var bookmarkes=[]

if(localStorage.getItem("bookmarkes")!=null){
    var bookmarkes=[]}
    else{
 products=JSON.parse(localStorage.getItem('bookmarkes'))
  display()
}

function getelement(){
  
    var bookmarker = {
        Name:x.value,
        url:y.value,
     
    };
bookmarkes.push(bookmarker)
console.log(bookmarkes)
localStorage.setItem('bookmarkes',JSON.stringify(bookmarkes))
display()
}
function display(){
    var cartona=` `
for(var i=0;i<bookmarkes.length;i++){
    cartona+=`
    <tr> 
    <td> ${i}</td>
    <td>  ${bookmarkes[i].Name}</td>
    <td> <a herf="${bookmarkes[i].url}"><button class="btn btn-submit px-5 bg-danger">Visit</button> </a> </td>
    <td> <button onclick="deletebook(${i})" class="btn btn-submit px-5 bg-info">delete</button</td>
</tr>
`
}
tableBody.innerHTML=cartona 
}

function deletebook(index){
    bookmarkes.splice(index,1)
  
    display()
}
nameRagex=/^\w{3,}(\s+\w+)*$/;
function namevaild(){
    if(nameRagex.test()==x.value){
        return true
    }
    else {
        return false
    }
}
urlRagex=/^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
function urlvaild(){
    if(urlRagex==y.value){
        return true
    }
    else {
        return false;
    }
}
x.onkeyup=function() {
    if(namevaild()&&urlvaild){
        addbtn.removeAttribute="disabled";
    }else{
        addbtn.disable="true";
    }
}
y.onkeyup=function() {
    if(namevaild()&&urlvaild){
        addbtn.removeAttribute="disabled";
    }else{
        addbtn.disable="true";
    }
}
function clear(){
     x.value=" "
     y.value=" "
   
 }
