const schedule = document.querySelectorAll('.schedule__item')
const mountainsTabs = document.querySelectorAll('.content__main_tab')
const mountainsContent = document.querySelectorAll('.content__img_wrapper')
let activeTab = '';
for (let i = 0; i < schedule.length - 1; i++) {
  const currentItem = schedule[i];
  const nextItem = schedule[i + 1];
  const currentMonth = currentItem.getAttribute('data-month');
  const nextMonth = nextItem.getAttribute('data-month');

  if (currentMonth !== nextMonth) {
    nextItem.classList.add('mt-1')
  }
}

window.innerWidth <  720 ? mountainsContent[0].classList.add('d-none') : mountainsContent[0].classList.remove('d-none')
window.innerWidth <  720 ? mountainsTabs[0].classList.remove('content__active_tab') : mountainsTabs[0].classList.add('content__active_tab')

mountainsTabs.forEach((item,index) => {
    item.addEventListener('click',(e)=>{
        const isSameTab = activeTab === item;
        mountainsTabs.forEach((tab,tabIndex)=>{
            tab.classList.toggle('content__active_tab',tabIndex === index)
        })
        mountainsContent.forEach((content,contentIndex)=>{
            if(index === contentIndex){
                if (isSameTab && window.innerWidth < 720) {
                    
                    content.style.display = 'none';
                    content.style.maxHeight = 0;
                    activeTab = null;
                  } else {
                   
                    content.style.display = 'block';
                   window.innerWidth < 720 ? content.style.maxHeight = content.scrollHeight*2 + 'px' : content.style.maxHeight = '75vh';
                    activeTab = item;
                  }
                } else {
                  
                  content.style.display = 'none';
                  content.style.maxHeight = 0;
                }
        })
    })
})
