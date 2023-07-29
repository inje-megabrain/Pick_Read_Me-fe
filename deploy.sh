echo "> [$(date +%y-%m-%d/%H:%M)] Deploy React" >> /home/ubuntu/front/deploy.sh

pm2 kill
pm2 serve /home/ubuntu/front/build 3000 --spa --name front
# REPOSITORY=/home/ubuntu/front

# cd $REPOSITORY 

# sudo yarn install 

# sudo npx pm2 reload all
