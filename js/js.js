
// gnb 슬라이드메뉴
const gnbBtn = document.querySelector('.gnbBtn_trigger')
const gnb = document.querySelector('.gnb')
const dark = document.querySelector('.dark')

// gnb 슬라이드메뉴 - 튀어나오게
gnbBtn.onclick = () => {
  gnb.style = 'transform: translateX(0)';
  dark.style.display = 'block'; /* css 그대로 넣기 */
  
  searchSub.style.display = 'none'
  langSub.style.display = 'none'
}

// gnb 슬라이드메뉴 - 닫히게 (loginPop도 사라지게)
dark.onclick = () => {
  gnb.style = 'transform: translateX(-100%)'
  dark.style.display = 'none'; 
  loginPop.style.display = 'none';
  list_sub[0].style.height = '0';
  list_sub[1].style.height = '0';
  list_sub[2].style.height = '0';
  list_sub[3].style.height = '0';
  list_sub[4].style.height = '0';
  btn_subArrow[0].classList.remove('on');
  btn_subArrow[1].classList.remove('on');
  btn_subArrow[2].classList.remove('on');
  btn_subArrow[3].classList.remove('on');
  btn_subArrow[4].classList.remove('on');
}

// gnb 내의 서브메뉴 열기/닫기
  const btn_subs = document.querySelectorAll('.btn_sub') // 버튼
  const btn_subArrow = document.querySelectorAll('.btn_sub .icon_arrow_down') // 화살표
  const list_sub = document.querySelectorAll('.list_sub') //서브

  btn_subs.forEach((item,index) => {
    item.onclick = function(){
      btn_subArrow[index].classList.toggle('on');
      if(btn_subArrow[index].classList.contains('on')){
        list_sub[index].style.height = 'auto';
      }else {
        list_sub[index].style.height = '0';
      }
    }
  })


  // 로그인 팝업
    const log = document.querySelectorAll('.log')
    const loginPop = document.querySelector('.loginPop')
    const loginPopClose = document.querySelector('.close')
    const login_btn = document.querySelector('.login_btn')

  // 로그인 팝업 - 띄우기
    log.forEach((logBtn) => {
      logBtn.addEventListener('click',()=>{
        loginPop.style.display = 'block';
        dark.style.display = 'block';
        gnb.style = 'transform: translateX(-100%)'
      })
    })

  // 로그인팝업 - 닫기
    loginPopClose.addEventListener('click', ()=>{
      loginPop.style.display = 'none';
      dark.style.display = 'none'; 
    })

  // 로그인팝업 - 링크
  login_btn.addEventListener('click',()=>{
    window.location = 'login.html'
  })

  // header_search - 띄우기
  const searchBtn = document.querySelector('.search')
  const searchSub = document.querySelector('.serch_sub')
  const searchClose = document.querySelector('.serch_sub img')

  searchBtn.onclick = () => {
    searchSub.style.display = 'block'
    langSub.style.display = 'none'
  }

  searchClose.onclick = () => {
    searchSub.style.display = 'none'
  }

  
  // header_langaue - 띄우기
  const langBtn = document.querySelector('.gnbBtn_lang');
  const langSub = document.querySelector('.lang_sub')
  const langClose = document.querySelector('.lang_sub img')


  langBtn.onclick = () => {
    langSub.style.display = 'block'
    searchSub.style.display = 'none'
  }

  langClose.onclick = () => {
    langSub.style.display = 'none'
  }

  // 공지사항 -  버튼 누를 때마다 내용 바꾸기
  const announceBtn1 = document.querySelector('.btn1')
  const announceBtn2 = document.querySelector('.btn2')
  const announceBtn3 = document.querySelector('.btn3')

  const anInner1 = document.querySelector('.an_inner1')
  const anInner2 = document.querySelector('.an_inner2')
  const anInner3 = document.querySelector('.an_inner3')


  announceBtn1.onclick = () => {
    anInner1.style.display = 'block'
    anInner2.style.display = 'none'
    anInner3.style.display = 'none'
  }

  announceBtn2.onclick = () => {
    anInner2.style.display = 'block'
    anInner1.style.display = 'none'
    anInner3.style.display = 'none'
  }

  announceBtn3.onclick = () => {
    anInner3.style.display = 'block'
    anInner1.style.display = 'none'
    anInner2.style.display = 'none'
  }




