# react-native-paginator

A simple React Native paginator

## Installation:

## Usage
Import it to your project:

`import Paginator from 'react-native-paginator';`

```
<Paginator  
  totalItems={itemCount}
  onChange={newPage => fetchMoreItemsFn(newPage))}
  activePage="1"
  disabled={isLoading}
  itemsPerPage="48"
  buttonStyles={...}
  buttonActiveStyles={...}
/>
```

## Props
### `totalItems: number` 
The total items count.

### `buttonStyles: Stylesheet` 
An object literal containing valid Stylesheet rules for the buttons.

### `buttonActiveStyles: Stylesheet` 
An object literal containing valid Stylesheet rules for the active buttons.

### `buttonControlStyles: Stylesheet` 
An object literal containing valid Stylesheet rules for the control buttons (the forward and backward page buttons).

### `buttonAltStyles: Stylesheet` 
An object literal containing valid Stylesheet rules for the alternative buttons (the ones that show the ellipsis indicator).

### `disabled: boolean`
Disables the paginator buttons. Default to `false`.

### `showControls?: boolean`
Enables/disables the control buttons. Defaults to `false`.

### `activePage?: number` 
Tells the component which page the Paginator should be initialized with. Defaults to `1`.

### `pageRangeDisplayed?: number`
The number of page buttons displayed. Defaults to `3`.

### `onChange: (pageNumber: number) => void`
Callback for the button click. The page number is available as a parameter.
