async function loadStaffMember() {
  // Get blogs from Spreadsheet
  const response = await getStaffMember(0, 1000);

  return new Promise((resolve) => {
    const staffArea = document.querySelector("#staffArea");
    ReactDOM.render(
      response.values.map(([id, name, image, title]) => {
        return (
          <div key={id} class="col-lg-3 item">
            <img src={image} alt="" />
            <p class="mem-name mb-0">{name}</p>
            <p class="mem-title">{title}</p>
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
    const confessionArea = document.querySelector("#hugo-in-us-area");
    ReactDOM.render(
      response.values.map(([id, name, title, content, image, introduction]) => (
        <div key={id} class="item">
          <img src={image} alt="" />
          <p class="confession-author">{name}</p>
          <p class="confession-title text-uppercase">{title}</p>
          <p class="confession-introduction">{introduction}</p>
          <div class="view-all text-uppercase d-flex align-items-center">
            read more
          </div>
        </div>
      )),
      confessionArea,
      resolve
    );
  });
}

const setupOwlCarousel = () => {
  const owl = $("#hugo-in-us-area");
  owl.owlCarousel({
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
        items: 3,
      },
    },
  });
};

async function run() {
  await loadGapi();
  await loadStaffMember();
  setupOwlCarousel();
}

run();
