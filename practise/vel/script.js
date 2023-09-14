fetch("./ques.json")
    .then(response => response.json())
    .then(data => { 
        let vel = data.question;
        let i=0;
        document.getElementById("name").innerHTML=vel[i].id+" . ";
        document.getElementById("name").innerHTML+=vel[i].Ques;
        document.getElementById('button',addEventListener('click',(event)=>{
            event.preventDefault;
            i++;
            document.getElementById("name").innerHTML=vel[i].id+" . ";
            document.getElementById("name").innerHTML+=vel[i].Ques;
        }))
       
        console.log(vel);

    })