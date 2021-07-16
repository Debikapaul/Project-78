var images = [

]

var names = [ " Family Book","Ranvir Singh","Diljeet Singh","Rocky Singh","Alia Singh","Soni Singh"];

var i=0;

function Update(){

    i++;

    numbers_of_family_member_in_the_array=5;

    if(i>numbers_of_family_member_in_the_array)
    {
        i=0
    }

    var updatedImage = images[0];
    var updatedName = names[0];

    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;

}