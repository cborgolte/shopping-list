#!/bin/bash -

set -o nounset                              # Treat unset variables as an error

ng build --prod --aot --output-path=docker/dist
cd docker
docker build -t cborgolte/shopping-list .
docker push cborgolte/shopping-list:latest

