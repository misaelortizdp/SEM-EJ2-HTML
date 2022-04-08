
const memoryLeft = document.getElementById('memory-left');
const messageM = document.getElementById('message-memory');




let num=0;
let num2=0;

let time= setInterval(()=>{ 
	num+=1;
	num2=1000-(num*10)

	if (num==80) {
		clearInterval(time);
	}

	messageM.innerHTML= `You've Used  <strong> ${num*10} GB </strong> of your storage` ;
    memoryLeft.innerHTML= `<strong> ${num2} </strong>`;
    

}, 50 )


