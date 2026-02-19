import type { IconProps, ITheme } from './types';

const HamburgerIcon = (props: IconProps & ITheme) => {
    const colorValue = props.theme === 'light' ? '#F5E6D8' : '#3A332E';

    return (
        <svg width={props.width} height={props.height} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M20 7L4 7' stroke={colorValue} strokeWidth='1.5' strokeLinecap='round' />
            <path d='M20 12L4 12' stroke={colorValue} strokeWidth='1.5' strokeLinecap='round' />
            <path d='M20 17L4 17' stroke={colorValue} strokeWidth='1.5' strokeLinecap='round' />
        </svg>
    );
};

export default HamburgerIcon;