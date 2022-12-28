export function handleScroll( setAnimOne, setAnimTwo, setAnimThree, setAnimFour, setAnimFive ){

    const slidesContainer = document.querySelector('#slideContainer')
    const slide = slidesContainer.children
      
    slidesContainer.addEventListener( 'scroll' , function(){
        const scroll = slidesContainer.scrollTop
        
        setAnimOne(true)
        

        if(scroll > slide[1].offsetTop / 2){
            
            setAnimOne(false)
            setAnimTwo(false)
        }

        if(scroll >= slide[1].offsetTop){

            setAnimTwo(true)
            setAnimThree(false)
        }
        
        if(scroll >= slide[2].offsetTop){
            
            setAnimTwo(false)
            setAnimThree(true)
            setAnimFour(false)
        }

        if(scroll >= slide[3].offsetTop - 300){
            
            setAnimThree(false)
            setAnimFour(true)
            setAnimFive(false)
        }
        if(scroll >= slide[4].offsetTop - 200){
            
            setAnimFour(false)
            setAnimFive(true)
        }
    })
}