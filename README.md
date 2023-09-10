# Project Title: Stage One Internship Challenge

## Objective
The objective of this project is to create and host an API endpoint using any programming language of your choice. This API endpoint should take two GET request query parameters and return specific information in JSON format.

## Requirements
The required information that the API endpoint should provide includes:
- Slack name
- Current day of the week
- Current UTC time (with validation of +/-2 minutes)
- Track
- The GitHub URL of the file being executed
- The GitHub repo URL of the full source code
- A status code indicating success (200)

Here is an example of the JSON format that the endpoint should return:

```json
{
"slack_name": "example_name",
"current_day": "Monday",
"utc_time": "2023-08-21T15:04:05Z",
"track": "backend",
"github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
"github_repo_url": "https://github.com/username/repo",
"status_code": 200
 }
             
            
