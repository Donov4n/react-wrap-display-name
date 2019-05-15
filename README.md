# react-wrap-display-name

> A small tool for wrapping component display name

## Usage

```js
import wrapDisplayName from 'react-wrap-display-name';

const withMagic = (WrappedComponent) => {
    const InnerComponent = () => <WrappedComponent magic="Wingardium Leviosa" />;

    InnerComponent.displayName = wrapDisplayName(WrappedComponent, 'WithMagic');

    return InnerComponent;
};
```
