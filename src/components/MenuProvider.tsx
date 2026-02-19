import * as React from 'react';

import MenuContext from './MenuContext';
import PopupMenu from './PopupMenu';
import OverlayPopup from './OverlayPopup';

const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isOpen, setOpen] = React.useState(false);
    const [position, setPosition] = React.useState<{ top: number; triggerElement: HTMLElement | null; }>({ top: 0, triggerElement: null });

    return (
        <MenuContext.Provider
            value={{
                open: (element: HTMLElement) => {
                    const rect = element.getBoundingClientRect();
                    setPosition({ top: rect.bottom, triggerElement: element });
                    setOpen(true);
                },
                close: () => {
                    setOpen(false);
                },
                toggle: (element: HTMLElement) => {
                    const rect = element.getBoundingClientRect();
                    setPosition({ top: rect.bottom, triggerElement: element });
                    if (isOpen) {
                        setOpen(false);
                    } else {
                        setOpen(true);
                    }
                }
            }}>
            {children}
            <PopupMenu isOpen={isOpen} onCloseMenu={() => setOpen(false)} size='small' position={position} />
            <OverlayPopup />
        </MenuContext.Provider>
    );
}

export default MenuProvider;