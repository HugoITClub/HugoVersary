async function loadBlogs() {
  // Get blogs from Spreadsheet
  const response = await getBlogs(4, 4);

  return new Promise((resolve) => {
    const blogArea = document.querySelector("#blogArea");
    ReactDOM.render(
      response.values.map(([id, title, content, description]) => (
        <div key={id} className="card-blog card rounded">
          <img src="../imgs/Blog_1.png" className="card-img-top" />
          <div className="card-body">
            <span className="card-time">MAY 30, 2022</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="read-part d-flex h-auto text-decoration-none">
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

const setupOwlCarousel = () => {
  $(".owl-carousel").owlCarousel({
    center: false,
    loop: true,
    margin: 12,
    nav: true,
    dots: false,
    responsiveClass: true,
    navText: ["<span class='fa-solid fa-angle-left'></span>", "<span class='fa-solid fa-angle-right'></span>"],
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
  setupOwlCarousel();
}

run();
