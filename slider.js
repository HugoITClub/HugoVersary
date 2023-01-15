async function loadSlider() {
  // Get blogs from Spreadsheet
  const response = await getSlider(0, 1000);

  return new Promise((resolve) => {
    const sliderArea = document.querySelector(".slideHomePage");
    ReactDOM.render(
      response.values.map(([id, image, imageUrl], index) => {
        return (
          <div
            key={id}
            className={`carousel-item ${index == 0 ? "active" : ""}`}
            data-bs-interval="5000"
          >
            <img
              src={imageUrl}
              className="d-block w-100 "
              style={{ objectFit: "cover" }}
              alt="..."
            />
          </div>
        );
      }),
      sliderArea,
      resolve
    );
  });
}

async function run() {
  await loadGapi();
  await loadSlider();
}

run();
