// Write your JavaScript code here!




window.addEventListener("load", function() {

    //alert("loaded");
    
     let form = document.querySelector("Form");
    
         form.addEventListener("submit",function(event){
        let form = document.querySelector("Form");
        let list = document.getElementById("faultyItems");
        let pilot= document.querySelector("input[name=pilotName]").value;
        let copilot= document.querySelector("input[name=copilotName]").value;
        let fuelLevel= document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel= document.querySelector("input[name=cargoMass]").value;
        //pilotName  copilotName  fuelLevel  cargoMass
        let formStatus=formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       // let formStatus=formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        if( formStatus != "ready2submit"){
            event.preventDefault();
            //event.defaultPrevented();
            //alert("Note submited");
        }else{
            //alert("submited");
        }
        
    
     } );
     
    






    //this.alert(1);
    /*
    let listedPlanets=myFetch();
    let p=pickPlanet(listedPlanets);
    addDestinationInfo(document,p.name,p.diameter,p.star,p.distance,p.moons, p.image);
    */
   /*
    let listedPlanets
    let listedPlanetsResponse=myFetch();
    alert(myFetch())
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
    }).then(function(){
        alert(listedPlanets);

        let p=pickPlanet(listedPlanets);
        addDestinationInfo(document,p.name,p.diameter,p.star,p.distance,p.moons, p.image);

    });
    */
   
    let listedPlanets;// promise2
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse=myFetch();// promise1

    
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
            //listedPlanets = result.json().then(function(r){
            //alert(r.length);
           // listedPlanets=r;
            
           // });
        
        console.log(result);
        
    }).then(function () {
        console.log( listedPlanets[0] );
        let p=pickPlanet(listedPlanets);
        addDestinationInfo(document,p.name,p.diameter,p.star,p.distance,p.moons, p.image);


        

       // listedPlanets.json();
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })
   
 });