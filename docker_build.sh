#!/bin/bash - 
set -o nounset                              # Treat unset variables as an error

cd ng-src
ng build --prod
npm run sw
cd ..
docker build -t cborgolte/hoodie .
