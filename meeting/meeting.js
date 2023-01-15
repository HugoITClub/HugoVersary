async function loadMeetingPost() {
  // Get blogs from Spreadsheet
  const response = await getMeetingPost(0, 1000);

  return new Promise((resolve) => {
    const MeetingArea = document.querySelector("#team-meeting");
    ReactDOM.render(
      response.values.map(
        ([
          id,
          title,
          description,
          date,
          image,
          imageUrl,
          content,
          contentFileId,
        ]) => (
          <div key={id} className="col-5 team_meeting_post">
            <div className="row justify-content-around">
              <div className="col-5 post_image_part p-0">
                <img src={imageUrl} alt="" className="post_image" />
              </div>
              <div className="col-6 post_content_part">
                <div className="post_title">{title}</div>
                <div className="post_description">{description}</div>
                <div className="post_date text-uppercase">{date}</div>
                <a
                  href={`../post/post.html?fileId=${contentFileId}`}
                  className="read-part d-flex h-auto text-decoration-none"
                >
                  <p className="read-btn-text m-0">Read more</p>
                  <p className="read-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </p>
                </a>
              </div>
            </div>
          </div>
        )
      ),
      MeetingArea,
      resolve
    );
  });
}
async function run() {
  await loadGapi();
  await loadMeetingPost();
}

run();
