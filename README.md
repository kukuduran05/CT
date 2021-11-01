# Project Description
## Overview
Create a log parser that can:
 - Read an access log file
 - Resolve Country and State from IP address (IE MaxMind GeoLite2 Free)
 - Translate useragent to device type (Mobile, Desktop, Tablet) and Browser (Safari, Chrome, etc)
 - Combine new Geo & Device fields with existing fields on access log file and output/export a CSV

The goal of this test is to showcase your ability to leverage existing libraries without writing an exhaustive amount of code. Reach out to us if you need additional direction.

Below is a sample access log you can use if you don't have one.
https://cti-developer-dropbox.s3.amazonaws.com/gobankingrates.com.access.log
 
## Requirements
 - Any libraries must be installed via a package manager
 - Must be run from the cli
 - Provide instructions on how to build and run
 - Must be written in either PHP, Python or NodeJS
 - Commit to Github/GitLab and provide link for ConsumerTrack Staff to Review
 
## Bonus
 - Do this all with Docker
 - Unit Test

## Get the project
You can download my code from https://github.com/kukuduran05/CT.git

## Installation
Install the dependencies
```sh
cd CT
npm install
```

## Run the project
For Run the project with CLI:
- Command:
```sh
npm run parse -- -f gobankingrates.com.access.log
```
or:
```sh
npm run parse -- -f gobankingrates.com.access.log --onf output_name_file
```
Where:
| Flag | Description |
| ------ | ------ |
| -f | Is the flag for the file |
| gobankingrates.com.access.log | Is the file path |
| --onf | The flag for the output name file |
| output_name_file | The name of the output file |

For Run the project with Docker:
- Commands:
```sh
docker build . -t image-name
docker images
docker run -it --name container-name -p 49160:8080 -d image-name
docker cp container-name:/output_name_file.csv ./
```
