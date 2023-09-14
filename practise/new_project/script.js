fetch('./ques.json')
.then(response =>response.json())
.then(data=>{
    const arr=data.questions;
    let i=0;
    let count=0;
    function contentQues(){
        document.getElementById('quesNo').innerHTML=arr[i].id+" . "+arr[i].ques;
        document.getElementById('op1').innerHTML=arr[i].op1;
        document.getElementById('op2').innerHTML=arr[i].op2;
        document.getElementById('op3').innerHTML=arr[i].op3;
        document.getElementById('op4').innerHTML=arr[i].op4;  
    }
    contentQues();
    document.getElementById('next').addEventListener('click',(event)=>{
        event.preventDefault();
        resetradio();
        
        if(i<arr.length-1){
            i++;
            contentQues();
            document.getElementById('style').reset();
        }
        else{
            document.getElementById('final').innerHTML="No more question"+ "    "+count+"/"+arr.length;
            document.getElementById('bodycontent').style.display = "none";
        }   
    });
    const radioInputs = document.querySelectorAll('input[type="radio"]'); 
    document.getElementById('vel').addEventListener('click',(event)=>{  
        event.preventDefault();
        radioInputs.forEach(input => {
            const selectedOption = input.value;
            const correctOption = arr[i].ans;
            if (selectedOption === correctOption) {
                document.getElementById(selectedOption).style.backgroundColor='green';
            } 
        });
    });
             
    function resetradio(){
        radioInputs.forEach(input=>{
            document.getElementById(input.value).style.backgroundColor = 'lightgreen';
        });
    }
    const inputradio = document.querySelectorAll('input[type="radio"]');
    inputradio.forEach(input=>{
        input.addEventListener('change',()=>{
            const select=input.value;
            const corr=arr[i].ans;
            if(select===corr){
                count++;
            }
        });
    });
});

