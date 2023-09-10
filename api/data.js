module.exports.getJSONData = function() {
  // Get the current date
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  // Get the current UTC time
  const currentUTCTime = new Date().toISOString();

  // Construct the response JSON
  const responseData = {
    slack_name: 'example_name',
    current_day: currentDay,
    utc_time: currentUTCTime,
    track: 'backend',
    github_file_url: 'https://github.com/username/repo/blob/main/file_name.ext',
    github_repo_url: 'https://github.com/username/repo',
    status_code: 200,
  };

  return responseData;
}
