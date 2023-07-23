echo "> [$(date +%y-%m-%d/%H:%M)] Deploy React" >> /home/ubuntu/front/deloy.log

pm2 kill
pm2 serve /home/front/build 3000 --spa --name front
