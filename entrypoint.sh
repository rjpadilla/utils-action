#!/bin/bash
repo=$1
docker pull $repo &>/dev/null
sha=$(docker image inspect "$repo" | jq --raw-output '.[0].RootFS.Layers|.[]')
echo "$sha"
