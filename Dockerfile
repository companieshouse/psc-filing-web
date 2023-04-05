FROM 169942020521.dkr.ecr.eu-west-1.amazonaws.com/base/node:14-alpine-builder
FROM 169942020521.dkr.ecr.eu-west-1.amazonaws.com/base/node:14-alpine-runtime
RUN cp -r ./dist/* ./ && rm -rf ./dist
CMD ["server.js","--","3000"]
EXPOSE 3000
