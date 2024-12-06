const imgArray=['image.jpg','download.jpg','mountain.avif','tree.jpg']
const arraylength =imgArray.length
let i=0

const demoFunction=()=>{
    i++
    i=i%arraylength
    //0%5=0 1%5=0 2%5=0 3%5=0 4%5=0 5%5=0
    document.querySelector('img').src=`images/${imgArray[i]}`
}

let set=setInterval(demoFunction,4000)
//addeventlistemer ma on lekhna painna
document.querySelector('.content .right').addEventListener('click' ,()=>{

    i++
    i=i%arraylength
    //0%5=0 1%5=0 2%5=0 3%5=0 4%5=0 5%5=0
    document.querySelector('img').src=`images/${imgArray[i]}`
})

document.querySelector('.content .left').addEventListener('click' ,()=>{

    i--
    if(i<0)
        {
            i=arraylength-1
        }
    i=i%arraylength
    //0%5=0 1%5=0 2%5=0 3%5=0 4%5=0 5%5=0
    document.querySelector('img').src=`images/${imgArray[i]}`
})




//agadi ko function call paxadi ko time ie harek 4sec ma change hune image
//let set=setInterval(demoFunction,4000)

document.querySelector('.content').addEventListener('mouseover',()=>{

    clearInterval(set)
})

document.querySelector('.content').addEventListener('mouseout',()=>{

    set=setInterval(demoFunction,4000)

})