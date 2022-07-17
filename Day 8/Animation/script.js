const animation2= [
    {transform: 'rotate(-360deg) scale(0)'}
];

const animation1= [
    {transform: 'skew(20deg, 10deg) scale(0)'}
];

const animation3= [
    {transform: 'translate(360px, 100px) scale(0)'}
];

const animationConfig= {
    duration: 2000,
    iterations: 1
    
};

var img1 = document.getElementById("image1");

var img2 = document.getElementById("image2");

var img3 = document.getElementById("image3");

async function imageAnimation(){
    img1.animate(animation1,animationConfig)
    await img1.animate(animation1,animationConfig).finished

    img2.animate(animation2,animationConfig)
    await img2.animate(animation2,animationConfig).finished

    img3.animate(animation3,animationConfig)
}

imageAnimation();