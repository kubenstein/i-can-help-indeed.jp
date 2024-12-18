#!/bin/bash

function main () {
  clean_dist_folder
  build_frontend
  build_backend
  expose_git_repo
}

########


function clean_dist_folder () {
  rm -rf ./dist
  mkdir ./dist
}

function build_frontend () {
  NODE_ENV=production webpack --config ./src/webpack-frontend.config.js
}

function build_backend () {
  NODE_ENV=production webpack --config ./src/webpack-backend.config.js
}

function expose_git_repo () {
  GIT_REPO_URL=${GIT_REPO_URL:-'.'}
  git clone -b public-repo-anchor --single-branch --bare $GIT_REPO_URL ./dist/frontend/git
  (
    cd ./dist/frontend/git
    git branch -m public-repo-anchor master
    git repack
    git gc
    git update-server-info
  )
}

# go!
main
