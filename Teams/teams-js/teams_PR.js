async function loadActivities() {
  // Get blogs from Spreadsheet
  const response = await getPRActivities(0, 1000);

  return new Promise((resolve) => {
    const activitiesArea = document.querySelector("#activitiesArea");
    ReactDOM.render(
      response.values.map(
        ([id, label, name, description, date, imageUrl, contentFileId]) => {
          return (
            <a key={id} href={`../post/post.html?fileId=${contentFileId}`}>
              <div
                className="item"
                style={{ width: "400px", height: "242px", objectFit: "cover" }}
              >
                <img className="img-fluid" src={imageUrl} alt="" />
                <div className="item-activities-text text-white mx-4">
                  <div className="position-absolute item-activities-text-title">
                    <h6
                      className={`text-uppercase item-activities-text-label item-activities-text-label-${label}`}
                    >
                      {label}
                    </h6>
                    <h5>{name}</h5>
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

async function loadPRTopPic() {
  const response = await getPRInformation(0, 1000);
  return new Promise((resolve) => {
    const topPicArea = document.querySelector("#header-pic-area");
    ReactDOM.render(
      response.values.map(
        ([
          id,
          topPicUrl,
          bottomPicUrl,
          intro,
          meetingPicUrl,
          campingPicUrl,
          extraPicUrl,
          sharingPicUrl,
        ]) => {
          return (
            <React.Fragment>
              <div
                className="header-pic"
                id="header-pic"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #121212 83%), url(${topPicUrl})`,
                  objectFit: "cover",
                }}
              >
                <div className="team-text-content text-align-center">
                  <p className="text-uppercase team-name">power rangers</p>
                  <p className="team-name-slogan">“Justice For All.”</p>
                </div>
              </div>
            </React.Fragment>
          );
        }
      ),
      topPicArea,
      resolve
    );
  });
}

async function loadPRTeamActivities() {
  const response = await getPRInformation(0, 1000);
  return new Promise((resolve) => {
    const teamActivitiesArea = document.querySelector("#team-information");
    ReactDOM.render(
      response.values.map(
        ([
          teamName,
          topPicUrl,
          bottomPicUrl,
          intro,
          meetingPicUrl,
          campingPicUrl,
          extraPicUrl,
          sharingPicUrl,
        ]) => {
          return (
            <React.Fragment>
              <div className="header-icon-down d-flex align-items-center justify-content-center justify-self-center">
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="container">
                <div className="team-information-text row text-center">
                  <h1 className="mt-5 team-information-text-title ">
                    Explore <span className="pr-color">{teamName}</span>
                  </h1>
                  <p className="mt-3">{intro}</p>
                  <span className="d-flex justify-content-center mt-3">
                    <i className="fa-regular fa-clock"></i>19:30 - Every Friday
                    <i className="fa-solid fa-location-dot ms-5"></i>44 Ho
                    Tuong, Thanh Khe, Da Nang
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        }
      ),
      teamActivitiesArea,
      resolve
    );
  });
}

async function loadPRImages() {
  const response = await getPRImages(0, 1000);
  return new Promise((resolve) => {
    const teamImagesArea = document.querySelector("#team-images");
    ReactDOM.render(
      response.values.map(([id, imageUrl]) => {
        return (
          <div
            key={id}
            className="item image-item"
            style={{
              width: "216px",
              height: "310px",
              borderRadius: "8px",
            }}
          >
            <img
              className="img-fluid"
              src={imageUrl}
              style={{
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
        );
      }),
      teamImagesArea,
      resolve
    );
  });
}

async function loadPRBottomPic() {
  const response = await getPRInformation(0, 1000);
  return new Promise((resolve) => {
    const bottomPicArea = document.querySelector("#team-information-pic-area");
    ReactDOM.render(
      response.values.map(
        ([
          id,
          topPicUrl,
          bottomPicUrl,
          intro,
          meetingPicUrl,
          campingPicUrl,
          extraPicUrl,
          sharingPicUrl,
        ]) => {
          return (
            <React.Fragment>
              <div
                className="team-information-pic"
                id="team-information-pic"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 60%, #121212 100%), linear-gradient(0deg, rgba(255, 255, 255, 0) 60%, #121212 100%), url(${bottomPicUrl})`,
                  objectFit: "cover",
                }}
              ></div>
            </React.Fragment>
          );
        }
      ),
      bottomPicArea,
      resolve
    );
  });
}

const setupOwlCarousel3 = () => {
  const owl = $("#team-images");
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
        items: 5,
      },
    },
  });
};

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
  await loadPRTopPic();
  await loadPRBottomPic();
  await loadPRTeamActivities();
  await loadPRImages();
  setupOwlCarousel2();
  setupOwlCarousel3();
}

run();
