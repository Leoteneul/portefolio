export function handleScroll( setAnimOne, setAnimTwo ){

    var scroll = document.querySelector('#slideContainer')
    var halfSlide = scroll.children[1].offsetHeight / 2

    
    
    console.log('demi', halfSlide)
      
    scroll.addEventListener( 'scroll' , function(){
        
        if(scroll.scrollTop < halfSlide){
            setAnimOne(false)
        }

        if(scroll.scrollTop > halfSlide && scroll.scrollTop < halfSlide * 2){
            
            console.log('hello')
            setAnimOne(true)
            setAnimTwo(false)
            
        }

        if(scroll.scrollTop > (halfSlide - 1) * 2 && scroll.scrollTop < halfSlide * 3){
            console.log('hello2222')
            setAnimTwo(true)
            
            
        }
        
        if(scroll.scrollTop > (halfSlide - 1) * 3 && scroll.scrollTop < halfSlide * 4){
            
            setAnimTwo(false)
            
            
        }
        console.log(scroll.scrollTop)

    })

    
    
   
    



}