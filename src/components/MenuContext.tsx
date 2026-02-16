import * as React from 'react';

const MenuContext = React.createContext<{
    open: (element: HTMLElement) => void;
    close: () => void;
    toggle: (element: HTMLElement) => void;
}>({
    open: () => { },
    close: () => { },
    toggle: () => { },
});

export default MenuContext;
