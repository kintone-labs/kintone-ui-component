# How to use built-in table column types (advanced)
## Overview
The table advanced usage is similar to [Simple table usage with built-in column types (JS)](./SimpleTableUsage), except for the data definition part.<br/>
The new table is designed with the concept of using table data to render all table cells, so to disable/enable certain cells, or even assign event handlers for certain cells, it should be done all through the data array. <br/>
This guide will show how to use all of the built-in table column types in more advanced ways, for example: <br/>
1. to enable/disable certain cells / cell's values <br/>
2. to register event handlers for a specific cell <br/>
3. to show/hide certain cells
4. to override row data on row add

## Step 1: Define table data
We will define the following datas: <br/>
1. Initial data for a sample row. <br/>
All the advanced properties will also be defined. <br/>
2. Initial table data consisting only of the above sample row
<script src="https://gist.github.com/trinhhunganh/2aa5291825d59faefa5d6fe5c16d5bc4.js"></script>

## Step 2: Define table columns and data mappings, as well as an event handler
<script src="https://gist.github.com/trinhhunganh/ad215b28599f8a8f27f1e094d2b22a12.js"></script>

## Step 3: Override default row data on row add
### 1. Define overriden row data
<script src="https://gist.github.com/trinhhunganh/d308026aad07cb9904f79d0ff0a757f7.js"></script>
### 2. Define 'onRowAdd' event handler function and return above row data from the handler function
<script src="https://gist.github.com/trinhhunganh/33c8bef6273cb09bfaf836bf9550305e.js"></script>

## Step 3: Initialize the table
Normally, we would need to also define 'defaultRowData', which is used to create new table rows. <br />
For this guide we will use the same 'sampleRow1Data' as 'defaultRowData' for the sake of simplicity.
<script src="https://gist.github.com/trinhhunganh/9a1f79bfa2d81f2351b5c0789c02f84d.js"></script>

## Final result should look something like this
<script src="https://gist.github.com/trinhhunganh/0b380d28648f2b51a11a5661739fcafd.js"></script>
