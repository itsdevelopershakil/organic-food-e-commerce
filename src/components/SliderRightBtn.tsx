import { FC } from 'react';

interface SliderRightBtnProps {
    className?: 'string';
    onClick?: () => void; // Function type for onClick
}

const SliderRightBtn: FC<SliderRightBtnProps> = ({ onClick, className }) => {
    return (
        <div className={className} onClick={onClick}>
            SliderRightBtn
        </div>
    );
};

export default SliderRightBtn;
