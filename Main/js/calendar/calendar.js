let seasones=document.querySelectorAll('.filters__link')
seasones[0].classList.add('active_link')

let wrapper=document.querySelector('.catalog__wrapper')
let catalog=document.createElement('div')
catalog.classList.add('calendar__catalog')

let summerCatalog=[
    {
        title:"1234SS",
        img:"img/calendar/summer/1.jpeg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    },
    {
        title:"2884ADC",
        img:"img/calendar/summer/2.jpeg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        } 
    },
    {
        title:"3458CS",
        img:"img/calendar/summer/3.jpeg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    }
]
let autumnCatalog=[
    {
        title:"23819",
        img:"img/calendar/autumn/1.jpeg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    },
    {
        title:"2884ADC",
        img:"img/calendar/autumn/2.jpeg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        } 
    },
    {
        title:"311CS",
        img:"img/calendar/autumn/3.jpeg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    }
]
let winterCatalog=[
    {
        title:"555",
        img:"img/calendar/winter/1.jpeg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        }
    },
    {
        title:"28DC",
        img:"img/calendar/winter/2.jpeg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        } 
    },
    {
        title:"348CS",
        img:"img/calendar/winter/3.jpeg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    }
]
let springCatalog=[
    {
        title:"123ыы4SS",
        img:"img/calendar/spring/1.jpeg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        }
    },
    {
        title:"2884ыыADC",
        img:"img/calendar/spring/2.jpeg",
        status:{
            text:'Группа набрана',
            background:'#ff7775'
        } 
    },
    {
        title:"345ыы8CS",
        img:"img/calendar/spring/3.jpeg",
        status:{
            text:'Границы открыты',
            background:'#05c8aa'
        }
    }
]
let allCatalogs=summerCatalog.concat(autumnCatalog, winterCatalog, springCatalog)

function setCatalog(season){
    function setRows(){
        let rowsQuantity=Math.ceil(season.length/3)
        catalog.innerHTML=``
        for(let i=0; i<rowsQuantity; i++){
            catalog.innerHTML+=`
                 <div class="calendar__row"></div>
            `    
        }
        wrapper.append(catalog)
    }
    wrapper.innerHTML=''
    setRows()
    let rows=document.querySelectorAll('.calendar__row')
    let itter=0
    for(let i=0; i<rows.length; i++){
        for(let j=0; j<3; j++){
            rows[i].innerHTML+=`
                <div class="calendar__item">
                    <a href="" class="calendar__link">
                        <span class="calendar__status" style="background-color: ${season[itter].status.background} ">${season[itter].status.text}</span>
                        <img src="${season[itter].img}" alt="" class="calendar__img">
                        <span class="calendar__info">${season[itter].title}</span>
                    </a>                                           
                </div>
            `
            itter++     
        }
        
    }
}

setCatalog(allCatalogs)
for(let i of seasones){
    i.addEventListener('click', (event)=>{
        event.preventDefault()
        for(let j of seasones){
            j.classList.remove('active_link')
        }
        i.classList.add('active_link')
        
    })
}
for(let i of seasones){
    i.addEventListener('click', (event)=>{
        let div=document.createElement('div')
        div.classList.add('calendar-grid__block')
        catalog.append(div)
        catalog.append(div)
        wrapper.append(catalog)
    })
}
seasones[0].addEventListener('click',()=>{
    setCatalog(allCatalogs)
})
seasones[1].addEventListener('click',()=>{
    setCatalog(summerCatalog)
})
seasones[2].addEventListener('click',()=>{
    setCatalog(autumnCatalog)
})
seasones[3].addEventListener('click',()=>{
    setCatalog(winterCatalog)
})
seasones[4].addEventListener('click',()=>{
    setCatalog(springCatalog)
})

