window.onload=function(){
    const canvas=document.querySelector("canvas");
    if(canvas && canvas.getContext){
        const ctx=canvas.getContext("2d");
        if(ctx){
            ctx.lineWidth="25";

            ctx.strokeStyle="yellow";
            ctx.beginPath();
            ctx.moveTo(50,50);
            ctx.lineTo(350,50);
            ctx.stroke();

            ctx.strokeStyle="orange";
            ctx.beginPath();
            ctx.moveTo(50,100);
            ctx.lineTo(350,100);
            ctx.stroke();

            ctx.strokeStyle="red";
            ctx.beginPath();
            ctx.moveTo(50,150);
            ctx.lineTo(350,150);
            ctx.stroke();

            ctx.strokeStyle="#fff";
            ctx.beginPath();
            ctx.moveTo(50,200);
            ctx.lineTo(350,200);
            ctx.stroke();

            ctx.strokeStyle="black";
            ctx.beginPath();
            ctx.moveTo(50,250);
            ctx.lineTo(350,250);
            ctx.stroke();

            ctx.strokeStyle="blue";
            ctx.beginPath();
            ctx.moveTo(50,300);
            ctx.lineTo(350,300);
            ctx.stroke();

            ctx.strokeStyle="darkgreen";
            ctx.beginPath();
            ctx.moveTo(50,350);
            ctx.lineTo(350,350);
            ctx.stroke();

            ctx.strokeStyle="#ff4848";
            ctx.beginPath();
            ctx.moveTo(50,400)
            ctx.lineTo(350,400);
            ctx.stroke();

            ctx.strokeStyle="#ff2020";
            ctx.beginPath();
            ctx.moveTo(50,450);
            ctx.lineTo(350,450);
            ctx.stroke();
        }
    }
}