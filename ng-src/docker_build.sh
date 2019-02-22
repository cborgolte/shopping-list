#!/bin/bash -

set -o nounset                              # Treat unset variables as an error

GIT_REV=$(git log --pretty=format:'%h' -n 1)
IMAGE_NAME=cborgolte/shopping-list

echo "building $IMAGE_NAME:$GIT_REV"
ng build --prod --aot --output-path=docker/dist
cd docker
docker build -t $IMAGE_NAME:latest -t $IMAGE_NAME:$GIT_REV .
docker push $IMAGE_NAME:latest
docker push $IMAGE_NAME:$GIT_REV

