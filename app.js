var name_of_the_student_array = [];

function submit() {
    // var name1 = document.getElementById("Name_of_the_Student-1").value;
    // console.log(name1);
    // var name2 = document.getElementById("Name_of_the_Student-2").value;
    
    // var name3 = document.getElementById("Name_of_the_Student-3").value;
    // var name4 = document.getElementById("Name_of_the_Student-4").value;
    // name_of_the_student_array.push(name1);
    // name_of_the_student_array.push(name2);
    // name_of_the_student_array.push(name3);
    // name_of_the_student_array.push(name4);
    // console.log(name_of_the_student_array);
    
    // document.getElementById("displaynames").innerHTML=name_of_the_student_array;
    //document.getElementById("submitbutton").style.display="none";
    //document.getElementById("sortbutton").style.display="inline-block";

    

    for (i=1; i<=4;i++) {
       var name_of_the_student = document.getElementById("Name_of_the_Student-"+ i).value;
       console.log(name_of_the_student);

       name_of_the_student_array.push(name_of_the_student);

    }

    console.log(name_of_the_student_array);

    var lenght_student_array = name_of_the_student_array.length;
     console.log(lenght_student_array);

     var display_student_array = [];

     for (t=0; t<lenght_student_array; t++){
        display_student_array.push("<h4>NAME-"+ name_of_the_student_array[t]+ "</h4>");
        
     }
     console.log(display_student_array);
       
     document.getElementById("display_names_with_commas").innerHTML=display_student_array;
     var remove_commas = display_student_array.join(" ");
     document.getElementById("display_names_without_commas").innerHTML=remove_commas;
     document.getElementById("submitbutton").style.display="none";
     document.getElementById("sortbutton").style.display="inline-block";
     document.getElementById("sizechange").style.display="inline-block";
   
}

function sorting() {
    // name_of_the_student_array.sort();
    // console.log(name_of_the_student_array);
    // document.getElementById("displaynames").innerHTML=name_of_the_student_array;

    name_of_the_student_array.sort();
     console.log(name_of_the_student_array);
     document.getElementById("display_names_with_commas").innerHTML=name_of_the_student_array;
   document.getElementById("sortbutton").style.display="none";
}
function changesize() {
   document.getElementById("display_names_with_commas").style.fontSize = "35px"; 
    document.getElementById("sizechange").style.display="inline-block";
}
function Reload() {
   location.reload();
}