async function loadActivities() {
  // Get activities from Spreadsheet
  const response = await getActivities(0, 1000);

  return new Promise((resolve) => {
    const activitiesArea = document.querySelector("#activitiesArea");
    ReactDOM.render(
      response.values.map(
        ([
          id,
          label,
          name,
          description,
          date,
          image,
          imageUrl,
          content,
          contentFileId,
        ]) => {
          return (
            <a key={id} href={`../post/post.html?fileId=${contentFileId}`}>
              <div className="item" style={{ width: "400px", height: "242px" }}>
                <img className="img-fluid" src={imageUrl} alt="" />
                <div className="item-activities-text text-white mx-4">
                  <div className="position-absolute item-activities-text-title">
                    <h6
                      className={`text-uppercase item-activities-text-label item-activities-text-label-${label}`}
                    >
                      {label}
                    </h6>
                    <h5>TOPIC: {name}</h5>
                  </div>
                  <p className="item-activities-text-sub">{description}</p>
                  <p className="item-activities-text-time">{date}</p>
                </div>
              </div>
            </a>
          );
        }
      ),
      activitiesArea,
      resolve
    );
  });
}
const setupOwlCarousel2 = () => {
  const owl = $("#activitiesArea");
  owl.owlCarousel({
    autoWidth: true,
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
  await loadActivities();
  setupOwlCarousel2();
}

run();
