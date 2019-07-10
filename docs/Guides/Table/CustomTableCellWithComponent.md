# How to implement custom table cell (with kintone UI Components)
## Overview
This guide will show how to create a simple custom table cell containing of 1 text input and 1 button from ui components [Text](../../../Reference/Text) and [Button](../../../Reference/Button).

## Step 1: Define table data structure
<script src="https://gist.github.com/trinhhunganh/5e9dd87c8b824a4fa6087c5775206ba1.js"></script>

## Step 2: Implement your custom element
### 1. Custom element structure
Custom cell containing a text field and a button. <br/>
We will need to implement "init" and "update" functions for the custom cell.
<script src="https://gist.github.com/trinhhunganh/04eb9793fbcf87f49f1d3af44aa6147f.js"></script>
### 2. Implement init function
Inside "init" function we will need to create DOM for the cell and return it at the end of 'init' function. <br/>
We will also need to bind events for the components here.
<script src="https://gist.github.com/trinhhunganh/b45128ff28dce57c968c48cae665c3a1.js"></script>
### 3. Implement update function
Inside "update" function we will need to update values shown on the components based on related data pieces from table row data. <br/>
"update" function will be called each time table data is updated. 

<script src="https://gist.github.com/trinhhunganh/637748f63fabeba6c55c41254e6185fe.js"></script>

## Step 3: Initializing table and add custom table cell
<script src="https://gist.github.com/trinhhunganh/6212c91b022aaa77761debf994b716f2.js"></script>

## Final result should look something like this
<script src="https://gist.github.com/trinhhunganh/253bf36d5438a159ab7f5440e3682b05.js"></script>
