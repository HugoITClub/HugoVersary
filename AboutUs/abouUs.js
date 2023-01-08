async function loadStaffMember() {
  // Get blogs from Spreadsheet
  const response = await getStaffMember(0, 1000);

  return new Promise((resolve) => {
    const staffArea = document.querySelector("#staffArea");
    ReactDOM.render(
      response.values.map(([id, name, image, title]) => {
        return (
          <div key={id} className="col-lg-3 item">
            <img src={image} alt="" />
            <p className="mem-name mb-0">{name}</p>
            <p className="mem-title">{title}</p>
          </div>
        );
      }),
      staffArea,
      resolve
    );
  });
}

async function loadHugoInUs() {
  // Get blogs from Spreadsheet
  const response = await getHugoInUs(0, 1000);

  return new Promise((resolve) => {
    const hugoInUsArea = document.querySelector("#hugo-in-us-area");
    ReactDOM.render(
      response.values.map(([id, name, title, content, image, introduction]) => (
        <div
          key={id}
          className="item p-3 d-flex flex-column align-items-center"
        >
          <img src={image} alt="" className="" />
          <p className="mem-name mb-0">{name}</p>
          <p className="mem-team text-uppercase">{title}</p>
          <p className="mem-description px-3">{introduction}</p>
          <div className="read_more d-flex justify-content-center">
            read more
          </div>
        </div>
      )),
      hugoInUsArea,
      resolve
    );
  });
}

const setupOwlCarousel = () => {
  const owl = $("#hugo-in-us-area");
  owl.owlCarousel({
    center: true,
    loop: true,
    margin: -36,
    nav: true,
    dots: false,
    responsiveClass: true,
    mouseDrag: false,
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
      },
    },
  });
};

async function run() {
  await loadGapi();
  await loadStaffMember();
  await loadHugoInUs();
  setupOwlCarousel();
}

run();
