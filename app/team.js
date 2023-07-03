//Team Member Section
let teamMember = document.querySelector(".team_div");
let teamMember_list = "";
teamMembers.forEach((item) => {
  teamMember_list += `<div class="col-12 col-sm-6 col-lg-3 isotope-item ${
    item.category
  }">
                <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
                  <span class="thumb-info-wrapper">
                    <a href="about-me.html">
                      <img src="${item.img}" class="img-fluid" alt="" />
                      <span class="thumb-info-title">
                        <span class="thumb-info-inner">${item.name}</span>
                        <span class="thumb-info-type">${item.position}</span>
                      </span>
                    </a>
                  </span>
                  <span class="thumb-info-caption">
                    <span class="thumb-info-caption-text"
                      >${item.desc}</span
                    >
                    <span class="thumb-info-social-icons mb-4">
                      ${
                        item.social.facebook
                          ? `<a target="_blank" href="${item.social.facebook}"
                        ><i class="fab fa-facebook-f"></i
                        ><span>Facebook</span></a
                      >`
                          : ""
                      }
                      ${
                        item.social.twitter
                          ? `<a target="_blank" href="${item.social.twitter}">
                            <i class="fab fa-twitter"></i>
                            <span>Twitter</span>
                          </a>`
                          : ""
                      }
                      ${
                        item.social.linkedin
                          ? `<a target="_blank" href="${item.social.linkedin}"
                        ><i class="fab fa-linkedin-in"></i
                        ><span>Linkedin</span></a
                      >`
                          : ""
                      }
                    </span>
                  </span>
                </span>
              </div>`;
});
teamMember.innerHTML = teamMember_list;
