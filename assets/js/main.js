"use strict";
const switcher = document.querySelector(".filter-switcher");
const blockFilterTag = document.querySelector(".block-filter-tag");
const blockFilterTitle = document.querySelectorAll(".block-filter-title");
const containerCard = document.querySelector(".block-products");
const loadMoreButton = document.getElementById("load-more");
/*const cardCountElem = document.getElementById("card-count");
const cardTotalElem = document.getElementById("card-total");*/

const SetAttr = (elem, data, purpose) => {
  elem.setAttribute(data, purpose.innerText);
};

if (blockFilterTitle) {
  blockFilterTitle[0].classList.add("active");
  SetAttr(containerCard, "id", blockFilterTitle[0]);
  SetAttr(containerCard, "data-tag", blockFilterTag.querySelector("p"));
}

const AddActiveClass = (block) => {
  block.forEach((item) => {
    item.classList.contains("active")
      ? item.classList.remove("active")
      : item.classList.add("active");
    if (item.classList.contains("active")) {
      SetAttr(containerCard, "id", item);
    }
  });
};

const renderGoods = (goods) => {
  const containerCard = document.querySelector(".block-products");
  containerCard.innerHTML = "";
  goods.forEach((good,i) => {
    let arr = [];
    let bulletArr = [];
    const {
      id,
      name,
      category,
      description,
      tag,
      img,
      model,
      doorFinish,
      doorStyle,
    } = good;

    const renderImg = () => {
      if (img) {
        img.forEach((item, i) => {
          if (item) {
            if (i === 0) {
              arr.push(
                `  <div class="carousel-item active"><img src="${item}"  alt="${name}" class="goods-image"/></div>`
              );
              bulletArr.push(
                `<button type="button" data-bs-target="#carouselSlider-${id}" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i}"></button>`
              );
            } else {
              arr.push(
                `  <div class="carousel-item"><img src="${item}"  alt="${name}" class="goods-image"/></div>`
              );
              bulletArr.push(
                `<button type="button" data-bs-target="#carouselSlider-${id}" data-bs-slide-to="${i}"  aria-current="true" aria-label="Slide ${i}"></button>`
              );
            }
          }
        });
      }
    };

    renderImg();

    const goodBlock = document.createElement("div");
         goodBlock.classList.add("col-6");
         goodBlock.classList.add("col-sm-6");
  goodBlock.classList.add("col-xs-12");
    if (
      containerCard.getAttribute("id").toLowerCase() === category &&
      containerCard.getAttribute("data-tag").toLowerCase() === tag
    ) {
      goodBlock.innerHTML = `
      <div class="goods-card">
       <h3 class="goods-title">${name}</h3>
       <p class="category-${category}">${category}</p>
       <p class="goods-description">${description}</p>
<div id="carouselSlider-${id}" class="carousel slide" data-bs-ride="carousel">

  <div class="carousel-inner">
     ${arr.join("")}
           </div>
           <div class="carousel-indicators">${bulletArr.join("")}</div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSlider-${id}" data-bs-slide="prev" aria-hidden="true">
    <!--span class="carousel-control-prev-icon" aria-hidden="true"></!--span-->
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
<path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7473 7.41498 18.7192 4.93661 16.8913 3.10872C15.0634 1.28084 12.585 0.25273 10 0.25ZM12.0306 13.2194C12.1003 13.2891 12.1556 13.3718 12.1933 13.4628C12.231 13.5539 12.2504 13.6515 12.2504 13.75C12.2504 13.8485 12.231 13.9461 12.1933 14.0372C12.1556 14.1282 12.1003 14.2109 12.0306 14.2806C11.9609 14.3503 11.8782 14.4056 11.7872 14.4433C11.6961 14.481 11.5986 14.5004 11.5 14.5004C11.4015 14.5004 11.3039 14.481 11.2128 14.4433C11.1218 14.4056 11.0391 14.3503 10.9694 14.2806L7.21938 10.5306C7.14965 10.461 7.09433 10.3783 7.05658 10.2872C7.01884 10.1962 6.99941 10.0986 6.99941 10C6.99941 9.90144 7.01884 9.80384 7.05658 9.7128C7.09433 9.62175 7.14965 9.53903 7.21938 9.46937L10.9694 5.71937C11.0391 5.64969 11.1218 5.59442 11.2128 5.5567C11.3039 5.51899 11.4015 5.49958 11.5 5.49958C11.5986 5.49958 11.6961 5.51899 11.7872 5.5567C11.8782 5.59442 11.9609 5.64969 12.0306 5.71937C12.1003 5.78906 12.1556 5.87178 12.1933 5.96283C12.231 6.05387 12.2504 6.15145 12.2504 6.25C12.2504 6.34855 12.231 6.44613 12.1933 6.53717C12.1556 6.62822 12.1003 6.71094 12.0306 6.78063L8.81032 10L12.0306 13.2194Z" fill="#F7F7F7"/>
</svg>

    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselSlider-${id}" data-bs-slide="next">
    <!--span class="carousel-control-next-icon">
</!--span--><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7473 7.41498 18.7192 4.93661 16.8913 3.10872C15.0634 1.28084 12.585 0.25273 10 0.25ZM12.7806 10.5306L9.03063 14.2806C8.96095 14.3503 8.87822 14.4056 8.78718 14.4433C8.69613 14.481 8.59855 14.5004 8.5 14.5004C8.40146 14.5004 8.30388 14.481 8.21283 14.4433C8.12179 14.4056 8.03906 14.3503 7.96938 14.2806C7.8997 14.2109 7.84442 14.1282 7.80671 14.0372C7.769 13.9461 7.74959 13.8485 7.74959 13.75C7.74959 13.6515 7.769 13.5539 7.80671 13.4628C7.84442 13.3718 7.8997 13.2891 7.96938 13.2194L11.1897 10L7.96938 6.78063C7.82865 6.63989 7.74959 6.44902 7.74959 6.25C7.74959 6.05098 7.82865 5.86011 7.96938 5.71937C8.11011 5.57864 8.30098 5.49958 8.5 5.49958C8.69903 5.49958 8.8899 5.57864 9.03063 5.71937L12.7806 9.46937C12.8504 9.53903 12.9057 9.62175 12.9434 9.7128C12.9812 9.80384 13.0006 9.90144 13.0006 10C13.0006 10.0986 12.9812 10.1962 12.9434 10.2872C12.9057 10.3783 12.8504 10.461 12.7806 10.5306Z" fill="#F7F7F7"/>
</svg>
    <span class="visually-hidden">Next</span>
  </button>
</div>   
           <div class="info-block  d-flex justify-content-center">
           <div class="m-0"> <p class="model flex align-items-center"> <span class="row"><span class="strong">Door model:</span><span>${model}</span></span></p></div>
            <div class="m-0"> <p class="door-finish flex align-items-center"> <span class="row"><span class="strong">Door Finish:</span><span>${doorFinish}</span></span></p></div>
           <div class="m-0">  <p class="door-style flex align-items-center"> <span class="row"><span class="strong">Door Style:</span><span>${doorStyle}</span></span</p> <div>
           </div>
            </div>
      `;
      
      containerCard.append(goodBlock);
      let myCarousel = document.querySelector(`carouselSlider-${id}`);
      let carousel = new bootstrap.Carousel(myCarousel, {
       /* interval: 2000,*/
        wrap: false,
        touch: true,
      });
    }
  });
};

const responseServer = () => {
  fetch("/assets/db/db.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderGoods(data);
    });
};

document.querySelector(".block-filter-switch").addEventListener("click", (e) => {

  if (
    e.target.closest(".block-filter-title") ||
    e.target.closest(".filter-switcher")
  ) {
    containerCard.innerHTML = "";
    switcher.classList.toggle("filter-switcher-on");

    AddActiveClass(blockFilterTitle);
    const span = blockFilterTag.querySelectorAll("p");
    span.forEach((item, i) => {
      if (i == 0) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
    containerCard.setAttribute(
      "data-tag",
      blockFilterTag.querySelector("p").innerText
    );
    responseServer();
  }
});

blockFilterTag.addEventListener("click", (e) => {
  const element = e.target;
  if (element.tagName === "P") {
    const span = blockFilterTag.querySelectorAll("p");
    span.forEach((item, i) => {
      if (item.classList.contains("active")) item.classList.remove("active");
      if (item === e.target) {
        item.classList.add("active");
        SetAttr(containerCard, "data-tag", item);
      }
    });
    responseServer();
  }
});

responseServer();
