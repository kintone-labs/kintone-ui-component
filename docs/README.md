# Manage github page with mkdocs

## Requirement
* Linux enviroment
* Python 3.x and pip3 command
* mkdocs 1.1.2
* mkdocs-material 4.6.3
* mike 0.3.5

## Serving locally for development
* Build latest documentation
```
$ mike deploy latest
```
* Build older version of documentation
```
$ cd 0.1.0
$ mike deploy 0.1.0
```
* Serve locally to see changes
```
mike serve
```

## Deploy documentation to gh-pages
* Deploy latest documentation
```
$ mike deploy latest -p
```
* Deploy old version documentation
```
$ cd 0.1.0
$ mike deploy 0.1.0 -p
```
* Set default version of documentation is the latest and push again
```
$ mike set-default latest -p
```

### Others
* Checking list version of documentation
```
$ mike list
```
