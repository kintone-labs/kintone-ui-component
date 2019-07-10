# Implement cell change handler for react Table component
## Overview
This guide will explain how to implement cell change handler for react Table component.

## Step 1: Define state with initial data of the table
<script src="https://gist.github.com/trinhhunganh/e38e0e9ee9f13b5168ae09df274754c0.js"></script>

## Step 2: Define table 'cellChange' event handler
Because our table component is a controlled component, we need to define 'cellChange' event handler to set the new state for the table component.
<script src="https://gist.github.com/trinhhunganh/b0f82bd1984e73532ffc0f9de0dd25d0.js"></script>

## Step 3: Call onCellChange function (exposed by table component) from components inside table column
We also will need to call 'onCellChange' in order to notify table component that the data has changed. <br/>
<script src="https://gist.github.com/trinhhunganh/f6ae81932202a7d80449a925e564b051.js"></script>
You could also just assign new data in every 'onChange' of components inside the table columns, and then call directly 'handleCellChange', but that way it is more tedious.

## Final result should look something like this
<script src="https://gist.github.com/trinhhunganh/b2e69320f77eccede5d3fe75d5d92bc4.js"></script>
