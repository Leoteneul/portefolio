export function handleScroll( setAnimOne, setAnimTwo, setAnimThree, setAnimFour, setAnimFive ){

    const slidesContainer = document.querySelector('#slideContainer')
    const slide = slidesContainer.children
      
    slidesContainer.addEventListener( 'scroll' , function(){
        const scroll = slidesContainer.scrollTop
        
        setAnimOne(true)
        
        // La Vague descends
        if(scroll > slide[1].offsetTop / 2){
            
            setAnimOne(false)
            setAnimTwo(false)
        }

        // Affichage des barres stats et retire anim projet
        if(scroll >= slide[1].offsetTop){

            setAnimTwo(true)
            setAnimThree(false)
        }
        
        // Affichage Projet, retire barres stats et neons anims
        if(scroll >= slide[2].offsetTop - 300){
            
            setAnimTwo(false)
            setAnimThree(true)
            setAnimFour(false)
        }
        // Affichage Neons,  retire barres stats et projet display
        if(scroll >= slide[3].offsetTop - 300){
            
            setAnimThree(false)
            setAnimFour(true)
            setAnimFive(false)
        }

        // Affichage anim phone et retire neons anims
        if(scroll >= slide[4].offsetTop - 200){
            
            setAnimFour(false)
            setAnimFive(true)
        }
    })
}