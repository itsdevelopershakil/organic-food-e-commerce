import { FC } from 'react';

interface SliderRightBtnProps {
    className?: 'string';
    onClick?: () => void; // Function type for onClick
}

const SliderLeftBtn: FC<SliderRightBtnProps> = ({ onClick, className }) => {
    return (
        <div className={className} onClick={onClick}>
            SliderLeftBtn
        </div>
    );
};

export default SliderLeftBtn;
