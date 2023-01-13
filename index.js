function isArmstrong(n){

    let temp =n;
    let p = n.length
    let sum=0;

    while(temp>0){
        const rem = temp%10;
        const power = Math.pow(rem,p);
        sum+=power;
        temp=temp/10;
    }

    if(sum===n){
        console.log("Yes, Armstrong")
    }
    else{
        console.log("No, not armstrong")
    }

}

function isPrime(n){

    if(n===1){
        console.log("neither prime, nor composite")
    }
    else{
        let temp=n;
        let f=0;
        for(let i=2;i<temp;i++){
            if(temp%i===0){
                f=1;
                break;
            }
        }

        if(f===1){
            console.log("No,not Prime")
        }
        else{
            console.log("Yes, Prime")
        }
    }

    
}

console.log(isPrime(153))