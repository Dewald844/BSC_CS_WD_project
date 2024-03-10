// The purpose of this script is to render the Tailwind CSS classes on the HTML elements
// This will make the HTML scipts more readable and easier to maintain
// Also make it easier for me when i need to change styling on a reusable component

function applyNavBarClass () {
   let elems = document.getElementsByClassName('navbar');
   for(let i = 0; i < elems.length; i++) {
       elems[i].classList.add(
         "bg-[#302e2f]", 
         "border-b-2",
         "border-pink-500", 
         "sticky", 
         "z-[100]", 
         "shadow", 
         "shadow-lg",
         "top-0",
         "w-full",
         "grid", 
         "grid-cols-3"
      );
   }
}

function applyBodyClass () {

   let elems = document.getElementsByClassName('body');
   for(let i = 0; i < elems.length; i++) {
       elems[i].classList.add(
         "bg-gray-800"
         , "h-screen"
         , "background-image"   
      );
      elems[i].style.backgroundImage = "url('media/background11.jpg')";
   }
}

function applyButtonClass () {
   let elems = document.getElementsByClassName('button');
   for(let i = 0; i < elems.length; i++) {
       elems[i].classList.add(
         "transition",
         "ease-in-out",
         "delay-150",
         "hover:-translate-y-1",
         "hover:scale-110",
         "hover:bg-indigo-500",
         "duration-300",
         "shadow-gray-900",
         "m-auto",
         "bg-indigo-500",
         "px-2",
         "rounded",
         "text-slate-900",
         "font-semibold"
       )
   }
}

function applyFooterClass () {
   let elems = document.getElementsByClassName('footer');
   for(let i = 0; i < elems.length; i++) {
       elems[i].classList.add(
         "border-t-2",
         "border-pink-500",
         "bottom-0",
         "w-full",
         "p-2",
         "bg-[#302e2f]",
         "grid",
         "grid-cols-3",
         "sticky",
         "text-slate-300",
         "font-semibold"
      );
   }
}

function applyInputLabelClass () {
   let elems = document.getElementsByClassName('input-label');
   for(let i = 0; i < elems.length; i++) {
       elems[i].classList.add("text-slate-300", "font-semibold", "text-xl", "p-0");
   }
}

function applyInputClass () {
   let elems = document.getElementsByClassName('input');
   for(let i = 0; i < elems.length; i++) {
       elems[i].classList.add(
         "px-2",
         "py-2",
         "font-semibold",
         "text-slate-800",
         "rounded-lg",
         "shadow-inner",
         "outline-purple-500",
         "shadow-indigo-500"
       )
   }
}

function applyCardClass () {
   let elems = document.getElementsByClassName('card');
   console.log(elems.length);
   for(let i = 0; i < elems.length; i++) {
       elems[i].classList.add(
         "p-4",
         "bg-indigo-500",
         "m-2",
         "rounded-md",
         "w-[30%]",
         "justify-self-center",
         "transition",
         "ease-in-out",
         "delay-150",
         "hover:-translate-y-1",
         "hover:scale-110"
       );
   }
}

// This function will fire when all the DOM content has been loaded adding the same style to the elements that was missed by the onload function
document.addEventListener("DOMContentLoaded", function() {
   applyNavBarClass();
   applyBodyClass();
   applyButtonClass();
   applyFooterClass();
   applyCardClass();
   applyInputLabelClass();
   applyInputClass();
 });