//SLider Section
let slider = document.querySelector(".owl-stage");
let slider_list = "";
sliders.forEach((item) => {
  slider_list += ` <div
                class="owl-item position-relative   ${item.overlay}"
                style="
                  background-image: url(${item.img});
                  background-color: #2e3136;
                  background-size: cover;
                  background-position: center;
                "
              >
                <div class="container position-relative z-index-3 h-100">
                  <div
                    class="d-flex flex-column align-items-center justify-content-center h-100"
                  >
                    <h3
                      class="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
                      data-appear-animation="fadeInDownShorter"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      <span
                        class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3"
                      >
                        <img
                          src="img/slides/slide-title-border.png"
                          class="w-auto appear-animation"
                          data-appear-animation="fadeInLeftShorter"
                          data-appear-animation-delay="250"
                          data-plugin-options="{'minWindowWidth': 0}"
                          alt=""
                        />
                      </span>${item.title_before}
                      <span class="position-relative"
                        >${item.title_styled_word}
                        <span
                          class="position-absolute left-50pct transform3dx-n50 top-0 mt-4"
                          ><img
                            src="${item.title_styled_img}"
                            class="w-auto appear-animation"
                            data-appear-animation="fadeInLeftShorterPlus"
                            data-appear-animation-delay="1000"
                            data-plugin-options="{'minWindowWidth': 0}"
                            alt="" /></span
                      ></span>
                      <span
                        class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3"
                      >
                        <img
                          src="img/slides/slide-title-border.png"
                          class="w-auto appear-animation"
                          data-appear-animation="fadeInRightShorter"
                          data-appear-animation-delay="250"
                          data-plugin-options="{'minWindowWidth': 0}"
                          alt=""
                        />
                      </span>
                    </h3>
                    <h1
                      class="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
                      data-appear-animation="blurIn"
                      data-appear-animation-delay="500"
                      data-plugin-options="{'minWindowWidth': 0}"
                    >
                      ${item.title_main}
                    </h1>
                    <p
                      class="text-4 text-color-light font-weight-light opacity-7 mb-0"
                      data-plugin-animated-letters
                      data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0}"
                    >
                      ${item.title_after}
                    </p>
                  </div>
                </div>
              </div>`;
});
slider.innerHTML = slider_list;

////Features Section left
featuresLeft = document.querySelector(".features_left");
let features_list_left = "";
features_data_left.forEach((item) => {
  features_list_left += `<div class="feature-box feature-box-style-2">
                    <div class="feature-box-icon">
                      <i class="icons ${item.icon} text-color-primary"></i>
                    </div>
                    <div class="feature-box-info">
                      <h4 class="font-weight-bold text-4-5 mb-1">
                        ${item.title}
                      </h4>
                      <p class="mb-4">
                        ${item.description}
                      </p>
                    </div>
                  </div>`;
});
featuresLeft.innerHTML = features_list_left;

////Features Section Right
featuresRight = document.querySelector(".features_right");
let features_list_right = "";
features_data_right.forEach((item) => {
  features_list_right += ` <div class="feature-box feature-box-style-2">
                    <div class="feature-box-icon">
                      <i class="icons ${item.icon} text-color-primary"></i>
                    </div>
                    <div class="feature-box-info">
                      <h4 class="font-weight-bold text-4-5 mb-1">${item.title}</h4>
                      <p class="mb-4">
                        ${item.description}
                      </p>
                    </div>
                  </div>`;
});
featuresRight.innerHTML = features_list_right;

//Accordion Section
let accordion = document.getElementById("accordion");
let accordion_list = "";
accordions.forEach((item) => {
  accordion_list += `<div class="card card-default">
                  <div class="card-header">
                    <h4 class="card-title m-0">
                      <a
                        class="accordion-toggle text-color-dark font-weight-bold"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#${item.collapse_num}"
                      >
                        <i class="icons ${item.icon} text-color-primary"></i>
                        Creative Websites
                      </a>
                    </h4>
                  </div>
                  <div id="${item.collapse_num}" class="${item.collapse_visibility}">
                    <div class="card-body text-2">
                      <p>
                        ${item.description}
                      </p>
                      <p class="mb-0">
                        ${item.title}
                        <a
                          href="#"
                          class="d-block text-color-dark font-weight-semibold pt-4"
                          >read more
                          <i
                            class="fas fa-angle-right position-relative top-1 ml-1"
                          ></i
                        ></a>
                      </p>
                    </div>
                  </div>
                </div>`;
});
accordion.innerHTML = accordion_list;

//Our Client
let ourClient = document.querySelector(".our_client");
let client_list = "";
clients.forEach((item) => {
  client_list += `<div>
                <img class="img-fluid" src="${item.img}" alt="" />
              </div>`;
});
ourClient.innerHTML = client_list;

//Post Section
let post = document.querySelector(".post_div");
let post_list = "";
Posts.map((item) => {
  post_list += `<div class="row">
                        <div class="col-lg-6 mb-4 mb-lg-0">
                          <article>
                            <div class="row">
                              <div class="col-auto pr-0">
                                <div class="date">
                                  <span class="day font-weight-extra-bold"
                                    >${item[0].date}</span
                                  >
                                  <span class="month text-1">${item[0].month}</span>
                                </div>
                              </div>
                              <div class="col pl-1">
                                <h4 class="text-primary text-4">
                                  <a class="d-block" href="blog-post.html"
                                    >${item[0].content.post_title}</a
                                  >
                                </h4>
                                <p class="pr-4 mb-0">
                                  ${item[0].content.post_desc}
                                </p>
                                <a
                                  href="https://www.okler.net/"
                                  class="read-more text-color-dark font-weight-semibold text-2"
                                  >read more
                                  <i
                                    class="fas fa-angle-right position-relative top-1 ml-1"
                                  ></i
                                ></a>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div class="col-lg-6">
                          <article>
                            <div class="row">
                              <div class="col-auto pr-0">
                                <div class="date">
                                  <span class="day font-weight-extra-bold"
                                    >${item[1].date}</span
                                  >
                                  <span class="month text-1">${item[1].month}</span>
                                </div>
                              </div>
                              <div class="col pl-1">
                                <h4 class="text-primary text-4">
                                  <a class="d-block" href="blog-post.html"
                                    >${item[1].content.post_title}</a
                                  >
                                </h4>
                                <p class="pr-4 mb-0">
                                  ${item[1].content.post_desc}
                                </p>
                                <a
                                  href="https://www.okler.net/"
                                  class="read-more text-color-dark font-weight-semibold text-2"
                                  >read more
                                  <i
                                    class="fas fa-angle-right position-relative top-1 ml-1"
                                  ></i
                                ></a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>`;
});
post.innerHTML = post_list;

//Testimonial Section
let testimonial = document.querySelector(".testimony_div");
let testimonial_list = "";
testimonials.forEach((item) => {
  testimonial_list += `<div class="col">
                          <div class="testimonial testimonial-primary">
                            <blockquote>
                              <p class="mb-0">
                                ${item.title}
                              </p>
                            </blockquote>
                            <div class="testimonial-arrow-down"></div>
                            <div class="testimonial-author">
                              <div class="testimonial-author-thumbnail">
                                <img
                                  src="${item.img}"
                                  class="rounded-circle"
                                  alt=""
                                />
                              </div>
                              <p><strong>${item.name}</strong><span>Okler</span></p>
                            </div>
                          </div>
                        </div>`;
});
testimonial.innerHTML = testimonial_list;
