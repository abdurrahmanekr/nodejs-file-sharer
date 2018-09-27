# NodeJS File SHARER

Share files with friends on the same network without the need for a flash drive

| Dropdown | Directory |
| --- | --- |
| ![screenshot from 2018-09-27 11-49-10](https://user-images.githubusercontent.com/15075759/46135955-24c69880-c24f-11e8-8c71-a4c70259cca8.png) | ![screenshot from 2018-09-27 12-17-55](https://user-images.githubusercontent.com/15075759/46136066-68b99d80-c24f-11e8-97f9-33b634d4f0c0.png) |


### All dependencies: nodejs, express.

## Installization

```
$ git clone https://github.com/abdurrahmanekr/nodejs-file-sharer
$ cd nodejs-file-sharer && npm install
$ npm start
```

## How does it work?

Suppose you use two devices connected to the same network.

1. Let someone set up **NodeJs File SHARER**. Then run the this command: `npm start`

2. The application will be broadcast by port ***1453*** by default.

3. Locate the ip address on the published computer. (ex: 192.168.1.21)

4. From the other computer, enter the ip address. (ex: `http://192.168.1.21:1453/`)

5. Chosee file and upload

6. If successful, you can find the file in the uploaded_files directory located in the project directory.

## Help improve

This app needs a

1. Design.
 
2. Progressbar.

3. Error management.

4. Port, Max file size and filedir options 

Thanks for your contribution.
