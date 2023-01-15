async function loadBlogs() {
  // Get blogs from Spreadsheet
  const response = await getBlogs(0, 1000);

  return new Promise((resolve) => {
    const blogArea = document.querySelector("#blogArea");
    ReactDOM.render(
      response.values.map(
        ([
          id,
          title,
          description,
          image,
          imageUrl,
          time,
          content,
          contentFileId,
        ]) => (
          <div key={id} className="card-blog card rounded">
            <div className="img-wrap p-2">
              <img
                src={imageUrl}
                className="card-img-top rounded"
                style={{ width: "250px", height: "176px", objectFit: "cover" }}
              />
            </div>
            <div className="card-body">
              <span className="card-time">{time}</span>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a
                href={`../post/post.html?fileId=${contentFileId}`}
                className="read-part d-flex h-auto text-decoration-none"
              >
                <p className="read-btn-text">Read more</p>
                <p className="read-btn">
                  <i className="fa-solid fa-arrow-right"></i>
                </p>
              </a>
            </div>
          </div>
        )
      ),
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
        <div
          key={id}
          className="hugo-academic-item row justify-content-between"
        >
          <div className="col-lg-5 hugo-academic-item-pic align-item-center">
            <img src={image} alt="" className="img-fluid rounded" />
          </div>
          <div className="col-lg-7 p-3 position-relative">
            <p className="hugo-academic-item-author text-uppercase mb-0">
              by {author}
            </p>
            <h4 className="hugo-academic-item-title">{title}</h4>
            <p className="hugo-academic-item-content mb-0">{description}</p>
            <p className="hugo-academic-item-time text-uppercase mb-0">
              {date}
            </p>
          </div>
        </div>
      )),
      academicArea,
      resolve
    );
  });
}

async function loadConfession() {
  // Get blogs from Spreadsheet
  const response = await getConfession(0, 1000);

  return new Promise((resolve) => {
    const confessionArea = document.querySelector("#confessionArea");
    ReactDOM.render(
      response.values.map(([id, content, number]) => (
        <div key={id} className="item">
          <img src="./blog-img/confession-symbol.png" alt="" />
          <p className="confession-content">{content}</p>
          <div className="row cfs-sign flex-nowrap mt-3 justify-content-between">
            <p className="cfs-number col-5">#Cfs {number}</p>
            <i className="col-1 fa-regular fa-circle-down"></i>
          </div>
        </div>
      )),
      confessionArea,
      resolve
    );
  });
}

const setupOwlCarouselBlog = () => {
  $("#blogArea").owlCarousel({
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

const setupOwlCarouselConfession = () => {
  $("#confessionArea").owlCarousel({
    center: true,
    loop: true,
    margin: -50,
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
        items: 3,
        nav: true,
      },
    },
  });
};

// Handle Scroll Confession

async function handleScroll() {
  const confessionItem = document.querySelector(".confession-content");
  const scrollTop = confessionItem.scrollTop;

  return console.log(scrollTop);
}

async function run() {
  await loadGapi();
  await loadBlogs();
  await loadAcademicPost();
  await loadConfession();
  setupOwlCarouselBlog();
  setupOwlCarouselConfession();
  await handleScroll();
}

run();
