
console.log('hello')
const h1=document.querySelector('.heading-primary')


h1.addEventListener('click',function(){
  h1.textContent="Made by harman"
})


const btnNavEl=document.querySelector('.btn-mobile-nav')
const headerEL=document.querySelector('.header')

btnNavEl.addEventListener('click',function(){
  headerEL.classList.toggle('nav-open')
})



const allLinks=document.querySelectorAll('a:link')

allLinks.forEach(function(link){
    link.addEventListener('click',function(e){
      // console.log(e)
      e.preventDefault()
      const href=link.getAttribute('href')
      if(href==='#') window.scrollTo({
        top:0,
        behavior:"smooth"
      })
      if(href!=='#' && href.startsWith('#')){
        const sectionEL=document.querySelector(href)
        sectionEL.scrollIntoView({behavior:'smooth'})
      }
      if(link.classList.contains('main-nav-link')){
        headerEL.classList.toggle('nav-open')

      }
    })
})






const sectionHeroEL=document.querySelector('.section-hero')

const obs=new IntersectionObserver(function(entries){
  const ent=entries[0]
  console.log(ent)
  if(ent.isIntersecting===false){
      document.body.classList.add('sticky')
  }
  if(ent.isIntersecting===true){
    document.body.classList.remove('sticky')
}
},{
  root:null,
  threshold:0,
  rootMargin: '-80px'
})

obs.observe(sectionHeroEL)


