"use strict";

// Elements
const introScene = document.getElementById("introScene");
const canvas = document.getElementById("animation_canvas");
const left_knife = document.getElementById("left_knife");
const right_knife = document.getElementById("right_knife");
const whole_peppers = document.querySelector("#whole_bellpeppers");
// --Node index
const parentNode_bellPepper = whole_peppers.parentNode;

// --Window sizes
const canvasSize = canvas.getBoundingClientRect();
const introSceneSize = introScene.getBoundingClientRect();

//-------------------------------------------------------
// ----------------- DEBUG STUFF --------------------
//--TODO: TEST/DEBUG ELEMENTS TO DELETE LATER
const testBtn = document.getElementById("testBtn");
testBtn.addEventListener("click", ()=>{
    slice_animation();
    bellPepperExplosion();
});

// ----------------- END DEBUG STUFF --------------------
//-------------------------------------------------------

// - Elements for animation set up
const o_slice = document.createElement("img");
o_slice.src = "orange_pepperslice.png";
o_slice.alt = "orange bell pepper slice";
o_slice.style.opacity = 0;
o_slice.classList = "peppers";
const o_slice_flyLeft = o_slice.cloneNode(true);
const o_slice_flyRight = o_slice.cloneNode(true);
parentNode_bellPepper.insertBefore(o_slice, whole_peppers.nextSibling);
parentNode_bellPepper.insertBefore(o_slice_flyLeft, whole_peppers.nextSibling);
parentNode_bellPepper.insertBefore(o_slice_flyRight, whole_peppers.nextSibling);

const r_slice = document.createElement("img");
r_slice.src = "red_pepperslice.png";
r_slice.alt = "red bell pepper slice";
r_slice.style.opacity = 0;
r_slice.classList = "peppers";
const r_slice_flyLeft = r_slice.cloneNode(true);
const r_slice_flyRight = r_slice.cloneNode(true);
parentNode_bellPepper.insertBefore(r_slice, whole_peppers.nextSibling);
parentNode_bellPepper.insertBefore(r_slice_flyLeft, whole_peppers.nextSibling);
parentNode_bellPepper.insertBefore(r_slice_flyRight, whole_peppers.nextSibling);

const g_slice = document.createElement("img");
g_slice.src = "green_pepperslice.png";
g_slice.alt = "green bell pepper slice";
g_slice.style.opacity = 0;
g_slice.classList = "peppers";
const g_slice_flyLeft = g_slice.cloneNode(true);
const g_slice_flyRight = g_slice.cloneNode(true);
parentNode_bellPepper.insertBefore(g_slice, whole_peppers.nextSibling);
parentNode_bellPepper.insertBefore(g_slice_flyLeft, whole_peppers.nextSibling);
parentNode_bellPepper.insertBefore(g_slice_flyRight, whole_peppers.nextSibling);

const y_slice = document.createElement("img");
y_slice.src = "yellow_pepperslice.png";
y_slice.alt = "yellow bell pepper slice";
y_slice.style.opacity = 0;
y_slice.classList = "peppers";
const y_slice_flyLeft = y_slice.cloneNode(true);
const y_slice_flyRight = y_slice.cloneNode(true);
parentNode_bellPepper.insertBefore(y_slice, whole_peppers.nextSibling);
parentNode_bellPepper.insertBefore(y_slice_flyLeft, whole_peppers.nextSibling);
parentNode_bellPepper.insertBefore(y_slice_flyRight, whole_peppers.nextSibling);
// Animation variables
// - Keyframe Arrays
const sliceFromLeft = [{transform: "translate3d(0, 0, 0)"},
    {transform: `translate3d(10%, ${introSceneSize.height}px, 0) rotate(145deg)`, opacity: 0}]; // "translate3d(10%, 100%, 0) rotate(145deg)"
const sliceFromRight = [{transform: "translate3d(0, 0, 0)"},
    {transform: `translate3d(-10%, ${introSceneSize.height}px, 0) rotate(-145deg)`, opacity: 0}]; // "translate3d(-10%, 100%, 0) rotate(-145deg)"
const wholeBellFade = [{transform: "translate3d(0%,0%,0)"},
    {transform: "translate3d(0%, 100%, 0)", opacity: 0}];
const o_pepperSpin = [{transform: "translate3d(0,0,0) rotate(0deg)"}, {opacity: 1, offset: 0.03},
    {transform: `translate3d(${introSceneSize.width}px,${getRand(500, -500)}%,0) rotate(${getRand(150, 300)}deg)`}];

// -- Slices keyframe arrs
//---- Red slices
const r_pepperSpin = [{transform: "translate3d(0,0,0) rotate(0deg)"}, {opacity: 1, offset: 0.03},
    {transform: `translate3d(${introSceneSize.width}px,${getRand(500, -500)}%,0) rotate(${getRand(150, 300)}deg)`}];
const r_pepperSpin_OutLeft = [{transform: "translate3d(0,0,0) rotate(0deg)"}, {opacity: 1, offset: 0.03},
    {transform: `translate3d(-${introSceneSize.width/2}px, -80vh,0) rotate(150deg)`}];
const r_pepperSpin_OutLeft2 = [{transform: "translate3d(0,0,0) rotate(0deg)"}, {transform: `translate3d(-${introSceneSize.width}px, 1vh,0) rotate(300deg)`}];

const g_pepperSpin = [{transform: "translate3d(0,0,0) rotate(0deg)"}, {opacity: 1, offset: 0.03},
    {transform: `translate3d(-${introSceneSize.width}px,${getRand(500, -500)}%,0) rotate(${getRand(150, 300)}deg)`}];
const y_pepperSpin = [{transform: "translate3d(0,0,0) rotate(0deg)"}, {opacity: 1, offset: 0.03},
    {transform: `translate3d(-${introSceneSize.width}px,${getRand(500, -500)}%,0) rotate(${getRand(150, 300)}deg)`}];
// - Timing objects
const sliceTime = {duration: 4000, iterations: 1,
    easing: "cubic-bezier(0.1, 0.5, 0.75, 1)", fill: "forwards"}; // add back --> , fill: "forwards"
const wholeBellFadeTime = {duration: 240, iterations: 1, fill: "forwards"}; // add back --> , fill: "forwards"
const sliceFlyTime = {duration: 1000, iterations: 1, delay: 100}; // add back --> duration: 450

// - Replace HTML bell pepper images and animate
function bellPepperExplosion () {
    const fadeWholeBell = whole_peppers.animate(wholeBellFade, wholeBellFadeTime);
    o_slice.animate(o_pepperSpin, sliceFlyTime);
    r_slice.animate(r_pepperSpin, sliceFlyTime);
    g_slice.animate(g_pepperSpin, sliceFlyTime);
    y_slice.animate(y_pepperSpin, sliceFlyTime);
    const r_pepperFly = r_slice_flyLeft.animate(r_pepperSpin_OutLeft, {duration: 1000, iterations: 1, delay: 100, fill: "forwards"});
    r_pepperFly.finished.then(()=>{
            let spinAway = r_slice_flyLeft.animate(r_pepperSpin_OutLeft2, sliceFlyTime);
        }
    );
}

// Animation players
function slice_animation () {
    const cutItLeft = left_knife.animate(sliceFromLeft, sliceTime);
    const cutItRight = right_knife.animate(sliceFromRight, sliceTime);
}

// Functions
// - Utility Functions
function getRand(min, max) {
    return Math.floor(Math.random() * (max - (min + 1)) + min)
}