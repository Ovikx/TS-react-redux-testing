# Just some notes for myself

## app/
- The store file creates the store using `configureStore`, which combines each slice's reducer into a single store. The file also exports the state's `getState()` and `dispatch()` return types.
- The hooks file uses the exported types from the store file to create `useSelector()` and `useDispatch()` functions that can be used from anywhere in the app. 

## features/
- Each "feature" has its own slice file. 
- Each slice file defines and exports:
    - Reducer: The function that change the state
    - Actions: Functions that make up the reducer
        - Other parts of the app can import these functions to specify how to change the state
    - Selector: The function that returns the state

## How to actually make use of these things
- A regular React component can import the global selector, global dispatch, relevant actions, and relevant selectors.
- The imported actions "know" which slice they belong to, so passing them to the dispatch function will pose no issues.

