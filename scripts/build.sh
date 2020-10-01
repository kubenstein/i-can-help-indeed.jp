#!/bin/bash

function main () {
  clean_dist_folder
  build_frontend
  build_backend
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


# go!
main
