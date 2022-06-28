let adviceId = document.getElementById("advice-id");
let adviceText = document.getElementById("advice-text");

const fetchAdvice = async () =>
{
    let adviceResponse = await fetch("https://api.adviceslip.com/advice")
    try 
    {
        if(!(adviceResponse.ok))
        {
            const message = `An error has occurred: ${adviceResponse.status}`;
            throw new Error(message);
        }
    }
    catch(error)
    {
        console.log(error);
        return;
    }
    let adviceJson = await adviceResponse.json();
    let adviceObject = adviceJson.slip;
    let text1 = "Advice #" + adviceObject.id;
    adviceId.innerHTML = text1;
    let text2 = '"' + adviceObject.advice + '"';
    adviceText.innerHTML = text2;
}




