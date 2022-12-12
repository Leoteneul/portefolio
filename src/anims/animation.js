export function handleScroll( setAnimOne, setAnimTwo, setAnimThree ){

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
            setAnimThree(false)
            
            
        }

        if(scroll.scrollTop > (halfSlide - 1) * 4 && scroll.scrollTop < halfSlide * 5){
            
            setAnimThree(true)
            
            
        }
        if(scroll.scrollTop > (halfSlide - 1) * 5 && scroll.scrollTop < halfSlide * 6){
            
            setAnimThree(false)
            
            
        }
        console.log(scroll.scrollTop)

    })

    
    
   
    



}