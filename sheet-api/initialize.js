/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
const CLIENT_ID =
  "172810885976-hd26i8jfekk71f8d92b7le1qfh4vo9ti.apps.googleusercontent.com";
const API_KEY = "AIzaSyBBFsidWL6J88hM0zC9uFA3GnyNmAvXSwU";

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC =
  "https://sheets.googleapis.com/$discovery/rest?version=v4";

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

// document.getElementById('authorize_button').style.visibility = 'hidden';
// document.getElementById('signout_button').style.visibility = 'hidden';

/**
 * Initiate google API.
 */
async function loadGapi() {
  loadGsiClient();
  await loadGapiClient();
}

/**
 * Loads the discovery doc to initialize the API.
 */
async function loadGapiClient() {
  return new Promise((resolve, reject) => {
    async function callback() {
      await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
      });

      resolve();
    }

    gapi.load("client", callback);
  });
}

/**
 * Loads Gsi Client.
 */
function loadGsiClient() {
  window.tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: "", // defined later
  });
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick() {
  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({ prompt: "consent" });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({ prompt: "" });
  }
}

/**
 *  Sign out the user upon button click.
 */
async function handleSignOutClick() {
  return new Promise((resolve, reject) => {
    function callback(response) {
      if (response.error) {
        reject(response.error);
      }

      gapi.client.setToken("");
      resolve();
    }

    const token = gapi.client.getToken();
    if (token !== null) {
      google.accounts.oauth2.revoke(token.access_token, callback);
    }
  });
}

function onGsiClientLoaded() {
  console.log("onGsiClientLoaded");
}

function onGapiLoaded() {
  console.log("on apis.google.com load");
}

/**
 * Spreadsheet of Hugo
 * https://docs.google.com/spreadsheets/d/1eE6CLFsp90BF_FusTGAtDNO2uPdr3xXZMncHfDh9aSQ/edit
 */
const SPREADSHEET_ID = "1eE6CLFsp90BF_FusTGAtDNO2uPdr3xXZMncHfDh9aSQ";

async function getBlogs(skip = 0, take = 4) {
  // Get data from spreadsheet
  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `Blogs!A${skip + 2}:E${skip + take + 2 - 1}`,
  });

  // Process data
  const { result } = response;
  if (!result || !result.values || result.values.length == 0) {
    return [];
  }
  return result;
}

async function getActivities(skip = 0, take = 4) {
  // Get data from spreadsheet
  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `Activities!A${skip + 2}:F${skip + take + 2 - 1}`,
  });

  // Process data
  const { result } = response;
  if (!result || !result.values || result.values.length == 0) {
    return [];
  }
  return result;
}

async function getAcademicPost(skip = 0, take = 4) {
  // Get data from spreadsheet
  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `Academic!A${skip + 2}:F${skip + take + 2 - 1}`,
  });

  // Process data
  const { result } = response;
  if (!result || !result.values || result.values.length == 0) {
    return [];
  }
  return result;
}

async function getTeamMeetingPost(skip = 0, take = 4) {
  // Get data from spreadsheet
  const response = await gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `TeamMeeting!A${skip + 2}:E${skip + take + 2 - 1}`,
  });

  // Process data
  const { result } = response;
  if (!result || !result.values || result.values.length == 0) {
    return [];
  }
  return result;
}
