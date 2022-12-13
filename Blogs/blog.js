async function loadBlogs() {
  // Get blogs from Spreadsheet
  const response = await getBlogs(0, 1000);

  return new Promise((resolve) => {
    const blogArea = document.querySelector("#blogArea");
    ReactDOM.render(
      response.values.map(([id, title, content, description]) => (
        <div key={id} className="card-blog card rounded">
          <div className="img-wrap p-2">
            <img src="../imgs/Blog_1.png" className="card-img-top rounded" />
          </div>
          <div className="card-body">
            <span className="card-time">MAY 30, 2022</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href="#"
              className="read-part d-flex h-auto text-decoration-none"
            >
              <p className="read-btn-text">Read more</p>
              <p className="read-btn ms-3 m-0">
                <i className="fa-solid fa-arrow-right"></i>
              </p>
            </a>
          </div>
        </div>
      )),
      blogArea,
      resolve
    );
  });
}
async function loadAcademicPost() {
  // Get blogs from Spreadsheet
  const response = await getAcademicPost(0, 1000);

  return new Promise((resolve) => {
    const academicArea = document.querySelector("#hugo-academic");
    ReactDOM.render(
      response.values.map(([id, image, author, title, description, date]) => (
        <div key={id} class="hugo-academic-item row justify-content-between">
          <div class="col-lg-5 hugo-academic-item-pic align-item-center">
            <img src={image} alt="" class="img-fluid rounded" />
          </div>
          <div class="col-lg-7 p-3 position-relative">
            <p class="hugo-academic-item-author text-uppercase mb-0">
              by {author}
            </p>
            <h4 class="hugo-academic-item-title">{title}</h4>
            <p class="hugo-academic-item-content mb-0">{description}</p>
            <p class="hugo-academic-item-time text-uppercase mb-0">{date}</p>
          </div>
        </div>
      )),
      academicArea,
      resolve
    );
  });
}

const setupOwlCarousel = () => {
  $(".owl-carousel").owlCarousel({
    center: false,
    loop: true,
    margin: 12,
    nav: true,
    dots: false,
    responsiveClass: true,
    navText: [
      "<span class='fa-solid fa-angle-left'></span>",
      "<span class='fa-solid fa-angle-right'></span>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
};

async function run() {
  await loadGapi();
  await loadBlogs();
  await loadAcademicPost();
  setupOwlCarousel();
}

run();
