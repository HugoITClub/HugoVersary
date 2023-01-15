async function loadRecentPost() {
  // Get blogs from Spreadsheet
  const response = await getMeetingPost(0, 1000);

  return new Promise((resolve) => {
    const recentPostsArea = document.querySelector("#recent-posts");
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
          <a
            key={id}
            href={`../post/post.html?fileId=${contentFileId}`}
            className="text-decoration-none"
          >
            <div className="team_meeting_post recent-posts-item d-flex align-items-center justify-content-between">
              <div className="col-5 post_image_part p-0">
                <img
                  src={imageUrl}
                  alt=""
                  className="img-fluid"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="col-6 post_content_part">
                <div className="post_title">{title}</div>
                <div className="post_description">{description}</div>
                <div className="post_date text-uppercase">{date}</div>
              </div>
            </div>
          </a>
        )
      ),
      recentPostsArea,
      resolve
    );
  });
}

async function loadPost() {
  const query = window.location.search;
  const searchParams = new URLSearchParams(query);
  const fileId = searchParams.get("fileId");

  const htmlElement = await readDocAndLoadAsHtml(fileId);
  return document.querySelector(".post-content").appendChild(htmlElement);
}

async function run() {
  await loadGapi();
  await loadRecentPost();
  await loadPost();
}

run();
