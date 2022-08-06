#!/bin/bash

npm run build

sshpass -p "essgB_QDY33" scp -r out paul-webspace:/home/c206lukas
