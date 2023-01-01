async function loadTeamMeetingPost() {
  // Get blogs from Spreadsheet
  const response = await getTeamMeetingPost(0, 1000);

  const data = await Promise.all(
    response.values.map(
      async ([
        id,
        title,
        description,
        date,
        image,
        imageFileId,
        content,
        contentFileId,
      ]) => {
        // const imageFile = await getImageAndLoadAsObjectUrl(imageFileId);
        return {
          id,
          title,
          description,
          date,
          // image: imageFile,
          contentFileId,
        };
      }
    )
  );

  const imageFile = await getImageAndLoadAsObjectUrl(response.values[0][5]);
  console.log(imageFile);

  return new Promise((resolve) => {
    const teamMeetingArea = document.querySelector("#team-meeting");
    ReactDOM.render(
      data.map(({ id, title, description, date, image, contentFileId }) => (
        <div key={id} className="col-5 team_meeting_post">
          <div className="row justify-content-around">
            <div className="col-5 post_image_part p-0">
              <img src={image} alt="" className="post_image" />
            </div>
            <div className="col-6 post_content_part">
              <div className="post_title">{title}</div>
              <div className="post_description">{description}</div>
              <div className="post_date text-uppercase">{date}</div>
              <a
                href={`./team_meeting_post.html?fileId=${contentFileId}`}
                className="read-part d-flex h-auto text-decoration-none"
              >
                <p className="read-btn-text m-0">Read more</p>
                <p className="read-btn ms-3 m-0">
                  <i className="fa-solid fa-arrow-right"></i>
                </p>
              </a>
            </div>
          </div>
        </div>
      )),
      teamMeetingArea,
      resolve
    );
  });
}
async function run() {
  await loadGapi();
  await loadTeamMeetingPost();
}

run();
