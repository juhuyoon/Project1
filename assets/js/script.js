let blogCont= document.querySelector("#blog");


console.log('hey');


const blogContent= ()=>{
    if(!localStorage.getItem("blog")){
        let vidya= `
        <iframe src="https://www.youtube.com/channel/UCm9K6rby98W8JigLoZOh6FQ" title="Lockpicke"> </iframe>
        `
        blogCont.innerHTML= vidya;
        localStorage.setItem("blog", vidya);
    } else{
        blogCont.innerHTML= localStorage.getItem("blog");
    }

    return;
}

blogContent();