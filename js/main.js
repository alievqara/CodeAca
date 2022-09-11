if(confirm('For Only Code Academy Students ')==true){
    document.body.style.display='block';
    if(prompt('Enter Your Age:')>=18){
        alert('Welcome');
        document.body.style.display='block'; 
    }
    else{
        alert('Sorry...');
        document.body.style.display='none'; 
    
    }
  }
  else{
      document.body.style.display='none'; 
  }



function mode() {
    if( document.body.style.backgroundColor === 'white' ){
        document.body.style.backgroundColor = 'black'
        document.getElementById('btn').innerHTML ='<i class="fa-regular fa-lightbulb"></i>';
        document.getElementById('btn').style.backgroundColor = 'black'
        document.getElementById('btn').style.color = 'white'
        document.getElementById('text').style.color = 'white'
        document.getElementById('text').style.border = '3px solid white'
        document.getElementById('cavab').style.color = 'white'


    }
    else{
        document.body.style.backgroundColor = 'white'
        document.getElementById('btn').innerHTML ='<i class="fa-solid fa-lightbulb"></i>';
        document.getElementById('btn').style.backgroundColor = 'white'
        document.getElementById('btn').style.color = 'black'
        document.getElementById('text').style.color = 'black'
        document.getElementById('text').style.border = '3px solid black'
        document.getElementById('cavab').style.color = 'black'



    }
}

function yoxla(){
    var value=document.getElementById('enter').value;    
    time=value.slice(-3)

    if(time[0]==='1'){
        
        document.getElementById('cavab').innerHTML = "Siz Sabah Grupusunuz"
        
    }
    else if(time[0]==='2'){

        document.getElementById('cavab').innerHTML = "Siz Gunorta Grupusunuz"

    
    }
    else if(time[0]==='3'){

        document.getElementById('cavab').innerHTML = "Siz Axsam Grupusunuz"
        

    }
    else{
        document.getElementById('cavab').innerHTML = "Bele Bir Group Yoxdur"

    }

}