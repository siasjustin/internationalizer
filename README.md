npm install
yarn


Get up and running:

clone the repo
delete the .git folder
npm install
git init
npm run dev
npm run server
open in browser localhost:8082
git commit ....


SETTING UP MONGODB:

#it is important that you are using at least node v5+

$ brew install mongodb

if mongodb is installed use:
$ brew update mongodb

CONNECTING YOUR LOCAL DIRECTLY TO THE DB:
$ cd ~
$ mkdir -p /data/db
$ sudo chown -R `id -un` /data/db

$ mongo 