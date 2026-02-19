import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { closeOverlay } from '../store/uiSlice';
import CloseButtonIcon from './icons/CloseButtonIcon';

const OverlayPopup = () => {
    const popupRef = React.useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const { visibleContent, isOpen } = useAppSelector(state => state.ui.overlay);

    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (isOpen ? <>
        <div id='rm-overlay-popup-backdrop'></div>
        <div id='rm-overlay-popup-wrapper' ref={popupRef}>
            <div id='rm-overlay-popup-content'>
                <div id='rm-overlay-popup-close' onClick={() => dispatch(closeOverlay())}><CloseButtonIcon height={20} width={20} theme='dark'/></div>
                {visibleContent}
            </div>
        </div></> : null);
};

export default OverlayPopup;