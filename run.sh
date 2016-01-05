sudo modprobe bcm2835-v4l2
nohup sudo node stream-server.js raspberry &
nohup sudo ffmpeg -s 320x240 -f video4linux2 -i /dev/video0 -f mpeg1video -b 800k -r 30 http://127.0.0.1:8082/raspberry/320/240/ &
nohup sudo node streamapp.js &
