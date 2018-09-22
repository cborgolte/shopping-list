#!/bin/bash - 
set -o nounset                              # Treat unset variables as an error
set -e

cd ng-src
ng build --prod
# npm run sw
cd ..
docker build -t cborgolte/hoodie .
echo "done"
