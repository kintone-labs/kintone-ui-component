# How to implement custom table cell (with pure DOM elements)
## Overview
This guide will show how to create a simple custom table cell containing of 1 text input and 1 button from pure DOM elements.

## Step 1: Define table data structure
<script src="https://gist.github.com/trinhhunganh/5e9dd87c8b824a4fa6087c5775206ba1.js"></script>

## Step 2: Implement your custom element
### 1. Custom element structure
Custom cell containing a text field and a button. <br/>
We do not need to implement "update" function because we do not use any ui-component
<script src="https://gist.github.com/trinhhunganh/08863ffbc84d53c84f50d4b12de16dbf.js"></script>
### 2. Implement init function
Inside "init" function We will need to create DOM elements for the cell and return it at the end of 'init' function. <br/>
We will also need to bind events of the DOM elements here
<script src="https://gist.github.com/trinhhunganh/b32faa4308768e4260659f9d527acfe6.js"></script>

## Step 3: Initializing table and add custom table cell
<script src="https://gist.github.com/trinhhunganh/6212c91b022aaa77761debf994b716f2.js"></script>

## Final result should look something like this
<script src="https://gist.github.com/trinhhunganh/fb3e5f47285621bfbda4845aacfcb736.js"></script>
