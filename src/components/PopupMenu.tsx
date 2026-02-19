import React from 'react';
import MenuContext from './MenuContext';
import { useAppSelector } from '../store/hooks';

export interface IPopupMenu {
    size: 'small' | 'medium' | 'large';
    // items: string[];
    // onOpenMenu: () => void;
    isOpen: boolean;
    onCloseMenu: () => void;
    position: { top: number; triggerElement: HTMLElement | null;
};
}

const PopupMenu: React.FC<IPopupMenu> = ({ isOpen, onCloseMenu, position }) => {
    const menuRef = React.useRef<HTMLDivElement>(null);
    const { close } = React.useContext(MenuContext);

    const { items } = useAppSelector(state => state.ui.popUpMenu);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && 
                !menuRef.current.contains(event.target as Node) &&
                position.triggerElement !== event.target &&
                !position.triggerElement?.contains(event.target as Node)) {
                onCloseMenu();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onCloseMenu, position.triggerElement]);

    const getMenuItems = () => {
        return items.map((item, key) => <li key={key} id='rm-popupmenu-list-item' onClick={close}>{item}</li>)
    };

    const menuPosition: React.CSSProperties = {
        position: 'fixed',
        top: position.top
    };

    return (isOpen ?
        <div id='rm-popupmenu-wrapper' ref={menuRef} style={menuPosition}>
            <div id='rm-popupmenu-list-container'>
                {getMenuItems()}
            </div>
        </div> : null
    );
};

export default PopupMenu;