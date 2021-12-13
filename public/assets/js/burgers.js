// Make sure we wait to attach our handlers until the DOM is fully loaded.      
$(function(){

    //Listener for Devour! button
    $(".change-devoured").on("click",function(event){
        //get data
        var id=$(this).data("id");
        var newDevoured=$(this).data("newdevoured");
        //set data
        var newDevouredState={
            devoured:newDevoured
        };
        //Send put request
        $.ajax("/api/burgers/" +id,{
            type:"PUT",
            data: newDevouredState
        }).then(function(){
            console.log("changed devoured to", newDevoured);
            // Reload the page to get the updated list
            location.reload();    
        });
    })

    //Submit and Create new burger
    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          burger_name: $("#bu").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new cat");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    




})           