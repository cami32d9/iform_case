# IForm Case

## Install project

Create a folder for your project, navigate to that folder, and clone the
repository to a folder on your local machine.

```
git clone https://github.com/cami32d9/iform_case.git .
```

Install the npm packages with this command.  
It reads the ´packages.json´ file, figures out what npm packages
it should install for this project, and installs it all.

```
npm install
```

## Development

Use this command when you are developing on the project.  
It will set up a webserver, update when files change and
compile scss files. (Like live-server, but for parcel)

```
npm run parcel-server
```

This will print a link in the terminal to the local dev server:
`Server running at http://localhost:1234`

Stop the server by pressing `ctrl+C`

## Build

Use this command to build the optimized files that should be uploaded
to a production server.  
It will build the files into the `/dist` folder.

```
npm run parcel-build
```

When uploading online, the files that should be uploaded are the ones in
the `/dist` folder, as this has clean css.
