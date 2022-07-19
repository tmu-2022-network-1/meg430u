function updateScroll(event) {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    const baseHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    // console.log(top, document.documentElement.clientHeight);
  
    const angle = (top / baseHeight) * 360 * 2;
    // console.log(angle);
    document.querySelector(".gear").style.transform = `rotate(${angle}deg)`;
  
    if (top >= baseHeight) {
      document.documentElement.scrollTop = top - baseHeight;
    }
  }
  
  document.body.onscroll = updateScroll;
  