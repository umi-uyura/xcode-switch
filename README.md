xcode-switch
=============

Easy run the xcode-select command.


Install
-------

```
$ [sudo] npm install -g umi-uyura/xcode-switch
```


Prepare
--------

Main Xcode, name **Xcode.app** .

Sub Xcode, name **Xcode\<suffix\>.app** .

ex) Xcode 5.1.1 "Xcode511.app", suffix is "511".


### Main Xcode path

`/Applications/Xcode.app`

### Sub Xcode path

`/Applications/Xcode[suffix].app`

ex) Xcode 5.1.1 ... `/Applications/Xcode511.app`


Usage
-----

`xcode-switch` or `xcs` .

### Print Path

```
$ xcs
```

### Switch Xcode

#### Main Xcode

```
$ sudo xcs main
```


#### Sub Xcode

```
$ sudo xcs <suffix>
```
