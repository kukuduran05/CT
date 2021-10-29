# Project Description
### Overview ###
Create a log parser that can:
 - Read an access log file
 - Resolve Country and State from IP address (IE MaxMind GeoLite2 Free)
 - Translate useragent to device type (Mobile, Desktop, Tablet) and Browser (Safari, Chrome, etc)
 - Combine new Geo & Device fields with existing fields on access log file and output/export a CSV

The goal of this test is to showcase your ability to leverage existing libraries without writing an exhaustive amount of code. Reach out to us if you need additional direction.

Below is a sample access log you can use if you don't have one.
https://cti-developer-dropbox.s3.amazonaws.com/gobankingrates.com.access.log
 
### Requirements ###
 - Any libraries must be installed via a package manager
 - Must be run from the cli
 - Provide instructions on how to build and run
 - Must be written in either PHP, Python or NodeJS
 - Commit to Github/GitLab and provide link for ConsumerTrack Staff to Review
 
### Bonus ###
 - Do this all with Docker
 - Unit Test

### Get the project ###
You can download my code from 

# For Run the project #
## With CLI ##
### Command: ###
- npm run parse -- -f gobankingrates.com.access.log
### Where: ###
- -f is the flag for the file and gobankingrates.com.access.log is the file path
## With docker ##
### Commands: ###
### Create the image ###
- docker build . -t image-name 
### Show images list ###
- docker images
### Run the container ###
- docker run -it --name container-name -p 49160:8080 -d image-name
### For show the CSV ###
- docker cp container-name:/out.csv ./
