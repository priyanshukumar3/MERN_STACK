// import React, { useState, useEffect } from "react"

// function Draft(){
//     const [text, setText] = useState(getDraftMessage ? localStorage.getItem('draftMessage') : "");
//     const [cleared, setCleared] = useState(false);
//     useEffect(()=>{
//         const getDraftMessage= localStorage.getItem('draftMessage');
//         if(text==="") setCleared(true);
//         if(getDraftMessage!=="" && text==="" && !cleared) return;

//         localStorage.setItem("draftMessage", text);
//     },[text])


//     return (
//         <main>
//             <h1> Save to Draft</h1>

//             <input value={text} type="text" placeholder="Drafted Text" onChange={}></input>
//         </main>
//     )
// // function Draft(){
// //     const [text, setText] = useState(getDraftMessage ? localStorage.getItem('draftMessage') : "");
// //     const [cleared, setCleared] = useState(false);

// //     useEffect(()=>{
// //         const getDraftMessage= localStorage.getItem('draftMessage');
// //         if(getDraftMessage!=="" && text==="") setText(getDraftMessage);
// //     },[])

// //     useEffect(()=>{
// //         const id = setTimeout(()=>{
// //         if(text!==""){
// //             localStorage.getItem('draftMessage',text)
// //         }
// //         else{
// //             setCleared(true);
// //         }
// //     },500);
// //     },[text]);

// //     if(cleared) localStorage.setItem("draftMessage", "")


//     return (
//         <main>
//             <h1> Save to Draft</h1>

//             <input value={text} type="text" placeholder="Drafted Text" onChange={}></input>
//         </main>
//     )
// }