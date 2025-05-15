let droprequests = new Set();
let pickuprequests = new Set();
let direction = 0;

let currentFloor = 0;

let buttons = document.querySelectorAll("button");
let count = document.querySelector("#count");
count.textContent = droprequests.size;

let symbol_floor0 = document.querySelector(`.symbol0`);
symbol_floor0.style.backgroundColor = "red";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        let floor = Number(e.target.id.replace("request",""));

        pickuprequests.add(floor);

        e.target.style.backgroundColor = 'lightblue';
        if(direction == 0) start();
        console.log(pickuprequests);
    }
)});

function checkRequestsAbove(){
    for(let i = currentFloor + 1; i <= 9; i++){
        if(droprequests.has(i) || pickuprequests.has(i))
            return true;
    }

    return false;
}

function checkRequestsBelow(){
    for(let i = currentFloor - 1; i >= 0; i--){
        if(droprequests.has(i) || pickuprequests.has(i))
            return true;
    }

    return false;
}

function elevatorMove(){
    
    if(droprequests.size != 0 || pickuprequests.size!=0){
        let waittime;
        let symbol_currentfloor = document.querySelector(`.symbol${currentFloor}`);

        symbol_currentfloor.style.backgroundColor = "red";

            let isPickUp = pickuprequests.has(currentFloor);
            let isdropOff = droprequests.has(currentFloor);

            if(isPickUp){
            
                let pushed_button = document.querySelector(`#request${currentFloor}`);
                
                pushed_button.style.backgroundColor = "white";
            }

            if(isPickUp || isdropOff) waittime = 4000;

            else waittime = 1000;
        
        
        setTimeout(() => {
            
            if(isPickUp){

                let drop_request = Number(prompt("Enter destination floor: "));

                droprequests.add(drop_request);
                count.textContent = droprequests.size;

                pickuprequests.delete(currentFloor);
            }
            if(isdropOff){
                droprequests.delete(currentFloor);
                count.textContent = droprequests.size;
            }

            if(droprequests.size == 0 && pickuprequests.size ==0 )
            {
                direction = 0;
                return;
            }

            symbol_currentfloor.style.backgroundColor = "darkgoldenrod";


            let hasAbove = checkRequestsAbove();
            let hasBelow = checkRequestsBelow();

            if(direction == -1){
            
                if(hasBelow)
                    currentFloor--;
                
                else if(hasAbove){
                    direction = 1;
                    currentFloor++;
                }
                else direction = 0;
            }
            if(direction == 1){
    
                if(hasAbove)
                    currentFloor++;
                
                else if(hasBelow){
                    direction = -1;
                    currentFloor--;
                }
                else direction = 0;
            }
            elevatorMove();

        }, waittime)

        
    }
}

function start(){
    if(direction == 0 && pickuprequests.size != 0) //When elevator is idle and receives first request
    {
            let iterator = pickuprequests.values();
    
            let first_pickup = iterator.next().value;
    
            if(first_pickup > currentFloor) direction = 1; //if the first request is above 
            else if(first_pickup < currentFloor) direction = -1; //if its below
            else { //if request is on the same floor, we will give direction according to the droprequest
                pickuprequests.delete(currentFloor);
                
                //make the button back to white
                let pushed_button = document.querySelector(`#request${currentFloor}`);
                
                pushed_button.style.backgroundColor = "white";

                let drop_request = Number(prompt("Enter destination floor: "));

                droprequests.add(drop_request);

                let iterator_drop = droprequests.values();
    
                let first_drop = iterator_drop.next().value;
        
                if(first_drop > currentFloor) direction = 1; //if drop is above
                else if(first_drop < currentFloor) direction = -1; //if drop is below
                else {                                 //if drop is also on the same floor, just break out of the loop
                    droprequests.delete(first_drop);
                } 
            }
        }


        elevatorMove();

}

