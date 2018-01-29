# CPExternalizer-GUI
The electronized version of [CPExternalizer](https://github.com/perfectstrong/CPExternalizer).

Check out [CPCluster example](https://github.com/perfectstrong/CPCluster-example) to get the whole scenarios for using this tool.

## Getting started with source
_**Requirements**_:
* Node >=8.6.0
* Electron (for GUI) >= 1.7.11

````bash
git clone https://github.com/perfectstrong/CPExternalizer-GUI
cd CPExternlizer-GUI
npm install
npm run start
````

## Build
You can build a version for your computer. It will be placed in `dist/` suffixed with your platform and architecture of CPU.
````bash
npm build
````

Details here [Electron packager](https://github.com/electron-userland/electron-packager).

## Graphical User Interface
_Built with [Electron](https://github.com/electron/electron) and [Photon](https://github.com/connors/photon). Packaged by [electron-packager](https://github.com/electron/electron-packager)._

There are 4 sections corresponding to 4 features of CPExternalizer:

### Folder slimmer
The main functionality of program. It will pick up specific folders (ar, dr) and CPM.js after stripping off what is not project's private data.

### Sound fixing
If your project contains sounds, they may be missed after slimming down, because of the changements in directory. Use this to fix it.

### Project initiator
The core of folder slimmer. In case you want to treat some certains CPM.js.

### Extra componenents
Bring out components not installed yet in your common CPM.js.
