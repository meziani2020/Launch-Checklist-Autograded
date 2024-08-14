// Write your helper functions here!

require('cross-fetch/polyfill');



function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    


    // Here is the HTML formatting for our mission target div.
    document.getElementById("missionTarget").innerHTML=
    
                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name:${name} </li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance} </li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`
    ;
 }
 
 function validateInput(testInput) {
      
      let response="";
      //let val=testInput.value;
      if(testInput===""){//
        response="Empty";
      }else if(isNaN(testInput)){//
        response="Not a Number";
      } else {
         response="Is a Number"; 
      }
      console.log('validateInput :('+ testInput+" ="+response);
      //returns "Empty"  , "Not a Number", "Is a Number"
      return response;  
      
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
 
     console.log(`formSubmission(document, listE, ${pilot}, ${copilot}, ${fuelLevel}, ${cargoLevel})`);

    let status="ready2submit";//notready2submit
      let h2,pilotStatus,copilotStatus,fuelStatus,cargoStatus;
      h2 = document.getElementById("launchStatus");
      pilotStatus = document.getElementById("pilotStatus");
      copilotStatus = document.getElementById("copilotStatus");
      fuelStatus = document.getElementById("fuelStatus");
      cargoStatus = document.getElementById("cargoStatus");
    //requirement list
    let minRequiredFuel=10000;
    let maxCharge=1000;
    let invalidData=false;
    //all fields are required
         if (pilot == "" || copilot == "" || fuelLevel == ""   || cargoLevel == "" ) {
           //alert("All fields are required!");
            status="notready2submit";
        }
        console.log(`${document}, list, ${pilot}, ${copilot}, ${fuelLevel}, ${cargoLevel} `);
    // data validation 
        status="ready2submit";
        invalidData=false;
        fuelStatus.innerHTML="Fuel level high enough for launch";
        cargoStatus.innerHTML="Cargo mass low enough for launch";
        h2.innerHTML='Shuttle is Ready for Launch';
        h2.style.color="green";

        if(validateInput(pilot)==="Not a Number"){
              //pilotStatus=`Pilot ${pilot} is ready for launch`;
                pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;
            }else{
                pilotStatus.innerHTML="Pilot Not ready";
                status="notready2submit";
                if(pilot!=""){invalidData=true};
            };
            //co pilot
              if(validateInput(copilot)==="Not a Number"){
                copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;
                //Pilot Chris is ready for launch
            }else{
                copilotStatus.innerHTML="Co-pilot Not ready";
                status="notready2submit";
                if(copilot!=""){invalidData=true};
                
            };

        if(validateInput(fuelLevel)==="Is a Number"){/**/  
             if(fuelLevel>=minRequiredFuel){
                 fuelStatus.innerHTML="Fuel level high enough for launch";
             }else{
                fuelStatus.innerHTML="Fuel level too low for launch";
                status="notready2submit";
                //document.getElementById("launchStatus").innerHTML='Shuttle not ready for launch';
                //document.getElementById("launchStatus").style.color="red";
             }
           
           }else{
            fuelStatus.innerHTML="fuel Level Not ready, expect number";
            status="notready2submit";
            if(fuelLevel!=""){invalidData=true}

           // document.getElementById("launchStatus").innerHTML='Shuttle not ready for launch';
           // document.getElementById("launchStatus").style.color="red";
           };
        

           //mass
           if(validateInput(cargoLevel)==="Is a Number"){/**/  
                if(cargoLevel<=maxCharge){
                    cargoStatus.innerHTML="Cargo mass low enough for launch";
                }else{
                    cargoStatus.innerHTML="Cargo mass too heavy for launch";
                    status="notready2submit";
                    //document.getElementById("launchStatus").innerHTML='Shuttle not ready for launch';
                    //document.getElementById("launchStatus").style.color="red";

                }
          
          }else{
            cargoStatus.innerHTML=" Cargo lavel Level Not ready, expect number";
                status="notready2submit";
                if(cargoLevel!=""){invalidData=true}
                //document.getElementById("launchStatus").innerHTML='Shuttle not ready for launch';
                //document.getElementById("launchStatus").style.color="red";
          };

    //Updating Shuttle
      //pilotStatus and copilotStatus
  

    //Shuttle not ready for launch
/*
     let statutListOl= `<ol>
                    <li id="pilotStatus" data-testid="pilotStatus">${pilotStatus}</li>
                    <li id="copilotStatus" data-testid="copilotStatus">${copilotStatus}</li>
                    <li id="fuelStatus" data-testid="fuelStatus">${fuelStatus}</li>
                    <li id="cargoStatus" data-testid="cargoStatus">${cargoStatus}</li>
                </ol>`;
      document.getElementById("faultyItems").innerHTML=statutListOl;
      */
    if( invalidData===true){
       //alert("Make sure to enter valid information for each field!");
        }

    if(status==="notready2submit"){
           h2.innerHTML='Shuttle Not Ready for Launch';
           h2.style.color="red";
           list.style.visibility="visible" ;    }  
           
  //return "ready2submit";
  console.log(`formSubmission(document, listE, ${pilotStatus.innerHTML}, ${copilotStatus.innerHTML}, ${fuelStatus.innerHTML}, ${cargoStatus.innerHTML})`);
  return "notready2submit";
  //return status;

 }
 
 
 async function myFetch() {

     //alert("myFetch");
    
     let planetsReturned;
 
     //planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
     
     
      await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(listedPlanetsResponse) {
        planetsReturned=listedPlanetsResponse.json();//.then(function(result){
            //planetsReturned=result;
            console.log(planetsReturned);
        //});

         });
      
     //console.log(planetsReturned);
     return planetsReturned;
     
 }
 
 function pickPlanet(planets) {
   let index= Math.floor(Math.random()*planets.length);
   return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;