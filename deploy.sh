
REPOSITORY=/home/ubuntu/front

cd $REPOSITORY 

sudo yarn install 

sudo npx pm2 reload all
