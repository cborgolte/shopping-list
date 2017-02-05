#!/bin/bash - 
#===============================================================================
#
#          FILE: deploy.sh
# 
#         USAGE: ./deploy.sh 
# 
#   DESCRIPTION: 
# 
#       OPTIONS: ---
#  REQUIREMENTS: ---
#          BUGS: ---
#         NOTES: ---
#        AUTHOR: YOUR NAME (), 
#  ORGANIZATION: 
#       CREATED: 05.02.2017 00:17
#      REVISION:  ---
#===============================================================================

set -o nounset                              # Treat unset variables as an error

cd ng-src
ng build
cd -
git commit -am "$@"
git push heroku master
