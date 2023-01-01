async function loadTeamIntroduction() {
  // Get blogs from Spreadsheet
  const response = await getTeamIntroduction(0, 1000);

  return new Promise((resolve) => {
    const teamIntroductionArea = document.querySelector(
      "#teamIntroductionArea"
    );
    ReactDOM.render(
      response.values.map(([id, name, slogan, description]) => {
        return (
          <div
            key={id}
            className="p-4 team-all"
            style={`--index: ${id}`}
            data-index={`${id}`}
          >
            <div className="team-text">
              <span className={`team-name-${id} text-uppercase`}>{name}</span>
              <h1 className="my-3 text-uppercase">{slogan}</h1>
              <p className="mb-4">{description}</p>
              <a className="mt-5" href="">
                READ MORE
              </a>
            </div>
          </div>
        );
      }),
      teamIntroductionArea,
      resolve
    );
  });
}

async function run() {
  await loadGapi();
  await loadTeamIntroduction();
}

run();
