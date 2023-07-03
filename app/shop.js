//Product Section
let product = document.querySelector(".product_div");
let product_list = "";
products.forEach((item) => {
  product_list += `<div class="col-sm-6 col-lg-4">
                    <div class="product mb-0">
                      <div class="product-thumb-info border-0 mb-3">
                        <div class="product-thumb-info-badges-wrapper">
                          <span class="badge badge-ecommerce badge-success"
                            >${item.badge}</span
                          ><span class="badge badge-ecommerce badge-danger"
                            >${item.offer}</span
                          >
                        </div>
                        <div class="addtocart-btn-wrapper">
                          <a
                            href="#"
                            class="text-decoration-none addtocart-btn"
                            data-tooltip
                            data-original-title="Add to Cart"
                          >
                            <i class="icons icon-bag"></i>
                          </a>
                        </div>
                        <a
                          href="#"
                          class="quick-view text-uppercase font-weight-semibold text-2"
                        >
                          QUICK VIEW
                        </a>
                        <a href="shop.html">
                          <div
                            class="product-thumb-info-image"
                          >
                            <img
                              alt=""
                              class="img-fluid"
                              src="${item.img}"
                            />
                           
                          </div>
                        </a>
                      </div>
                      <div class="d-flex justify-content-between">
                        <div>
                          <a
                            href="#"
                            class="d-block text-uppercase text-decoration-none text-color-default text-color-hover-primary line-height-1 text-0 mb-1"
                            >${item.category}</a
                          >
                          <h3
                            class="text-3-5 font-weight-medium font-alternative text-transform-none line-height-3 mb-0"
                          >
                            <a
                              href="shop.html"
                              class="text-color-dark text-color-hover-primary"
                              >${item.name}</a
                            >
                          </h3>
                        </div>
                        <a
                          href="#"
                          class="text-decoration-none text-color-default text-color-hover-dark text-4"
                          ><i class="far fa-heart"></i
                        ></a>
                      </div>
                      <div title="#">
                        <input
                          type="text"
                          class="d-none"
                          value="5"
                          title=""
                          data-plugin-star-rating
                          data-plugin-options="{'displayOnly': true, 'color': 'default', 'size':'xs'}"
                        />
                      </div>
                      <p class="price text-5 mb-3">
                        <span class="sale text-color-dark font-weight-semi-bold"
                          >${item.discount_price}</span
                        >
                        <span class="amount">${item.price}</span>
                      </p>
                    </div>
                  </div>`;
});
product.innerHTML = product_list;
