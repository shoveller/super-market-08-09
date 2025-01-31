import { getPbImageURL, comma } from '/src/lib';

export const createCardTemplate = (product) => {
/**
 * TODO: 고생은 많이 하셨을 것 같지만 유지보수하기 어려운 코드입니다.
 * 처음부터 끝가지 읽어도 부수효과를 예측하기 어려운 코드는 업보를 쌓습니다.
 * 후임이 인수인계를 받으면 손을 대기가 어렵겠습니다.
 * 프레임워크를 사용하거나 Array.prototype.join 등을 이용해서 자연어처럼 읽을 수 있게 만들어 보시길 권합니다.
 */
  const {
    id,
    product_name,
    brand_id,
    price,
    discount,
    product_description,
    karly_only,
    limit,
  } = product;

  const realPrice = comma(
    Math.floor((price * (1 - 0.01 * discount)) / 10) * 10
  );

  let template = /* html */ `
    <a href="/src/pages/detail/#${id}" class="product swiper-slide">
      <div class="product__images">
        <img
          src="${getPbImageURL(product, 'product_img')}"
          class="product__images__thumbnail"
          alt="${product_name}"
        />
        <img
          src="/images/menu/cart.svg"
          alt="장바구니에 담기"
          class="cart"
        />
      </div>
    `;

  if (brand_id) {
    template += /* html */ `
      <span class="product__brand">${product_name}</span>
    `;
  }

  template += /* html */ `
      <span class="product__title">${product_name}</span>
      <p class="product__discount">
    `;
  if (discount) {
    template += /* html */ `
      <span class="product__discount-rate">${discount}%</span>
      `;
  }

  template += /* html */ `
        <span class="product__price">${realPrice}원</span>
      </p>
      `;
  if (discount) {
    template += /* html */ `
        <span class="product__regular-price">${comma(price)}원</span>
      `;
  }

  template += /* html */ `
      <span class="product__description">${product_description}</span>
      <p class="product__keyword-list">
    `;

  if (karly_only == 1) {
    template += /* html */ `
        <span class="product__keyword only">Karly Only</span>
      `;
  } else if (karly_only == 2) {
    template += /* html */ `
        <span class="product__keyword only">희소가치 프로젝트</span>
      `;
  }

  if (limit) {
    template += /* html */ `
        <span class="product__keyword">한정수량</span>
      `;
  }
  template += /* html */ `
        </p>
      </a>
    `;

  return template;
};

export const createSkeletonCardTemplate = () => {
  let template = /* html */ `
    <div class="product skeleton_card">
      <div class="product__images">
        <div class="skeleton_loading">
          <div class="skeleton_img"></div>
        </div>
        <img src="#" class="product__images__thumbnail" alt="#" width="250" height="322" loading="lazy" decoding="async" />
        <img src="/images/menu/cart.svg" alt="장바구니에 담기" class="cart" width="45" height="45" />
      </div>
      <div class="product__desc">
        <div class="skeleton_loading">
          <div class="skeleton_text"></div>
          <div class="skeleton_text"></div>
          <div class="skeleton_text"></div>
          <div class="skeleton_text"></div>
          <div class="skeleton_text"></div>
          <div class="skeleton_text"></div>
        </div>      
        <span class="product__brand">xxx</span>
        <span class="product__title">xxx</span>
        <p class="product__discount">
          <span class="product__discount-rate">xxx%</span>
          <span class="product__price">xxx원</span>
        </p>
        <span class="product__regular-price">xxx원</span>
        <span class="product__description">xxx</span>
        <p class="product__keyword-list"></p>
      </div>
    </div>
  `;

  return template;
};
