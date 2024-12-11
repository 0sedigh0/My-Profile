function show () {

    //document.getElementById ("test");
    const test1= document.querySelector (".one");
    const test2= document.querySelector (".two");
    const test3= document.querySelector (".three");
    const test4= document.querySelector (".four");
    //const sedigh= document.getElementsByTagName (".test")
    //const number= document.querySelector ("#number")
    
if (test1.textContent/*.trim()*/ === '- - - - -' ) {

    test1.innerHTML= "rakab khordi :)";
    test2.innerHTML= "bikary :(";
    test3.innerHTML= "ajaaaab ...";
    test4.innerHTML= "barat motasefam :|";
    
    //number.innerHTML=sedigh.length;
}else{

    test1.innerHTML= "- - - - -";
    test2.innerHTML= "- - - - -";
    test3.innerHTML= "- - - - -";
    test4.innerHTML= "- - - - -";
    
}
}

function show_again () {

    const sedigh= document.getElementsByClassName ("test");
    const text= document.querySelector ("#text");

    text.innerHTML="to be " + sedigh.length + " ta az rakabhay man negah kardy wa baz rakab khordy :)";
    
}

//let isMenuOpen=false

function hideMenu () {

    const divOn=document.getElementById('menuOn')

    if (divOn.style.opacity === '0') {

        divOn.style.opacity='100'
        divOn.style.pointerEvents='auto'
        divOn.style.transform='scale(1.05)'

    }else{

        divOn.style.opacity='0'
        divOn.style.pointerEvents='none'
        divOn.style.transform='scale(1.0)'

    }
    /*const menuIcon=document.getElementById('menuIcon');

    if (isMenuOpen) {

        menuIcon.innerHTML= `
        <g>
	        <path d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
        </g>`;
        isMenuOpen=true;

    }else{

        menuIcon.innerHTML=
        `<g>
            <path d="M480,224H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,224,480,224z"/>
            <path d="M32,138.667h448c17.673,0,32-14.327,32-32s-14.327-32-32-32H32c-17.673,0-32,14.327-32,32S14.327,138.667,32,138.667z"/>
            <path d="M480,373.333H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h448c17.673,0,32-14.327,32-32S497.673,373.333,480,373.333z"/>
        </g>`;
        isMenuOpen=false;   

    }*/
    

}

