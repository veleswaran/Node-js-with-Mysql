
    fetch('./ques.json')
    .then(response =>response.json())
    .then(data=>{
        const arr=data.questions;
        let i=0;
        document.getElementById('quesNo').innerHTML=arr[i].id+" . "+arr[i].ques;
        document.getElementById('op1').innerHTML=arr[i].op1;
        document.getElementById('op2').innerHTML=arr[i].op2;
        document.getElementById('op3').innerHTML=arr[i].op3;
        document.getElementById('op4').innerHTML=arr[i].op4;
        document.getElementById('next').addEventListener('click',(event)=>{
            event.preventDefault();
            resetradio();
            if(i<arr.length-1){
                i++;
                document.getElementById('quesNo').innerHTML=arr[i].id+" . "+arr[i].ques;
                document.getElementById('op1').innerHTML=arr[i].op1;
                document.getElementById('op2').innerHTML=arr[i].op2;
                document.getElementById('op3').innerHTML=arr[i].op3;
                document.getElementById('op4').innerHTML=arr[i].op4;
                document.getElementById('style').reset();
            }
            else{
                document.getElementById('final').innerHTML="No more question";
                document.getElementById('bodycontent').style.display = "none";
            }   
        });
    });


    fetch('./ques.json')
    .then(response =>response.json())
    .then(data=>{
        const arr=data.questions;
        let i=0;
        document.getElementById('quesNo').innerHTML=arr[i].id+" . "+arr[i].ques;
        document.getElementById('op1').innerHTML=arr[i].op1;
        document.getElementById('op2').innerHTML=arr[i].op2;
        document.getElementById('op3').innerHTML=arr[i].op3;
        document.getElementById('op4').innerHTML=arr[i].op4;
        document.getElementById('vel').addEventListener('click',(event)=>{
            event.preventDefault();
            resetradio();
            if(i<arr.length-1){
                i++;
                document.getElementById('quesNo').innerHTML=arr[i].id+" . "+arr[i].ques;
                document.getElementById('op1').innerHTML=arr[i].op1;
                document.getElementById('op2').innerHTML=arr[i].op2;
                document.getElementById('op3').innerHTML=arr[i].op3;
                document.getElementById('op4').innerHTML=arr[i].op4;
                document.getElementById('style').reset();
            }
            else{
                document.getElementById('final').innerHTML="No more question";
                document.getElementById('bodycontent').style.display = "none";
            }   
        });
   
    const radioInputs = document.querySelectorAll('input[type="radio"]');
    let select="";
    radioInputs.forEach(input => {
       
        input.addEventListener('change', () => {
          
            const selectedOption = input.value;
            const correctOption = arr[i].ans;
            select=selectedOption;
           
            // if (selectedOption === correctOption) {
            //    document.getElementById(selectedOption).style.backgroundColor='green';
           
            // } else {
            //     document.getElementById(selectedOption).style.backgroundColor='red';
            //     document.getElementById(correctOption).style.backgroundColor='green';
              
            // }
            
        });
        console.log(select);
        
    });
});
const radioInputs = document.querySelectorAll('input[type="radio"]');
function resetradio(){
    radioInputs.forEach(input=>{
        let ele=document.getElementById(input.value).style;
        // resetradio();
        ele.backgroundColor = 'lightgreen';
    });
}


