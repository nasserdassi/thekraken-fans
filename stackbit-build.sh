#!/usr/bin/env bash

set -e
set -o pipefail
set -v

initialGitHash=$(git rev-list --max-parents=0 HEAD)
node ./studio-build.js $initialGitHash &

curl -s -X POST https://api.stackbit.com/project/5f920b21af6ff8001e1c82d3/webhook/build/ssgbuild > /dev/null
next build && next export

# wait for studio-build.js
wait

curl -s -X POST https://api.stackbit.com/project/5f920b21af6ff8001e1c82d3/webhook/build/publish > /dev/null
echo "stackbit-build.sh: finished build"
