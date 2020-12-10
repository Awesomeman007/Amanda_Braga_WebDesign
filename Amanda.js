window.onload = function init() {
    console.log("Page loaded. DOM is ready!");
    
}



const [red1, green1, blue1] = [0, 74, 98];
const [red2, green2, blue2] = [198, 70, 14];
const [red3, green3, blue3] = [232, 178, 151];
const [red4, green4, blue4] = [214, 196, 163];
const [red5, green5, blue5] = [138, 169, 154];

window.addEventListener('scroll', function colorChange() {
    if (window.scrollY <= (document.querySelector(".slide1").scrollHeight + window.innerHeight/1.8)) {
        document.querySelector('body').style.backgroundColor = "rgb(0, 74, 98)";  
    }
    if (window.scrollY > (document.querySelector(".slide1").scrollHeight + window.innerHeight/1.8)) {
        const y = (window.scrollY - (document.querySelector(".slide1").scrollHeight))*10;
        
        const [r, g, b] = [red1+(red2-red1)*((y-4700)/5000), green1+(green2-green1)*((y-4700)/5000), blue1+(blue2-blue1)*((y-4700)/5000)].map(Math.round);
        document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    
    if (window.scrollY >= (document.querySelector(".slide1").scrollHeight + 1.2*window.innerHeight)) {
        const [r, g, b] = [red2, green2, blue2];
        document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    if (window.scrollY > (document.querySelector(".slide2").scrollHeight + 1.1*window.innerHeight)) {
        const y = (window.scrollY - (document.querySelector(".slide2").scrollHeight))*10;
        const [r, g, b] = [red2+(red3-red2)*((y-9000)/10000), green2+(green3-green2)*((y-9000)/10000), blue2+(blue3-blue2)*((y-9000)/10000)].map(Math.round);
        document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    if (window.scrollY >= (document.querySelector(".slide2").scrollHeight + 2.3*window.innerHeight)) {
        const [r, g, b] = [red3, green3, blue3];
        document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    if (window.scrollY > (document.querySelector(".slide3").scrollHeight + 6*window.innerHeight)){
        const y = (window.scrollY - (document.querySelector(".slide3").scrollHeight))*10;
        const [r, g, b] = [red3+(red4-red3)*((y-49000)/3000), green3+(green4-green3)*((y-49000)/3000), blue3+(blue4-blue3)*((y-49000)/3000)].map(Math.round);
        document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
    
    if (window.scrollY >= (document.querySelector(".slide3").scrollHeight + 6.3*window.innerHeight)) {
        const [r, g, b] = [red4, green4, blue4];
        document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    if (window.scrollY > (document.querySelector(".slide4").scrollHeight + 10.6*window.innerHeight)){
        const y = (window.scrollY - (document.querySelector(".slide4").scrollHeight))*10;
        console.log(y);
        const [r, g, b] = [red4+(red5-red4)*((y-86500)/6000), green4+(green5-green4)*((y-86500)/6000), blue4+(blue5-blue4)*((y-86500)/6000)].map(Math.round);
        document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    if (window.scrollY >= (document.querySelector(".slide4").scrollHeight + 11.2*window.innerHeight)) {
        const [r, g, b] = [red5, green5, blue5];
        document.querySelector('body').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
})
