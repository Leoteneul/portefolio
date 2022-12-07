export function handleScroll(setAnimOne){

    var scroll = document.querySelector('#slideContainer')
    var children = scroll.children[1].offsetHeight / 2

    
    
    console.log('demi', children)
      
    scroll.addEventListener( 'scroll' , function(){
        
        if(scroll.scrollTop < children){
            setAnimOne(false)
        }

        if(scroll.scrollTop > children && scroll.scrollTop < children * 2){
            
            console.log('hello')
            setAnimOne(true)
        }

        if(scroll.scrollTop === children * 2 ){
            console.log('hello2222')
            
        }
        



        console.log(scroll.scrollTop)

    })

    
    
   
    



}