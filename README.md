# cssexperiments-counters-and-variables
Here i experimented with usage of css counters and variables.

[Demo](https://toastman.github.io/cssexperiments-counters-and-variables/)

TBD: 
* JS access to css variable
* X and Y line helpers

What's interesting ? 
* Building values from another variables
  ```css
  :root{
    --step-number: 20;
    --step: calc(var(--step-number) * 1px);
  }
  ```
