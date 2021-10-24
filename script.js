document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector('.nav-button').addEventListener('click', ()=> {
        document.getElementById('nav-bar').style.display = 'block';
    });
    document.querySelector('.nav-button-close').addEventListener('click', ()=> {
        document.getElementById('nav-bar').style.display = 'none';
    });
    document.querySelectorAll('.nav-link').forEach((e) => {
        e.addEventListener('click', (e) => {
            if(window.innerWidth <= 740) {
                document.getElementById('nav-bar').style.display = 'none';

            }
        });
    });
    window.addEventListener('resize', (e)=> {

        if(e.target.innerWidth <= 740) {
            document.getElementById('nav-bar').style.display = 'none';
            document.querySelector('.nav-button-close').style.display='block';
        } else {
            document.getElementById('nav-bar').style.display = 'block';
            document.querySelector('.nav-button-close').style.display='none';
        }
    });
});