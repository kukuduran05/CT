FROM node:16

# # COPY all the files from Current Directory into the Container
COPY ./ ./

# Install the Project Dependencies like Express Framework
RUN npm install

# Tell that this image is going to Open a Port 
EXPOSE 8080

# EXPOSE 8080
CMD [ "npm", "run", "parse", "--", "-f", "./gobankingrates.com.access.log"]