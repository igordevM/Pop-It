'use strict';

import React, {FC, ReactElement, useState, useRef, LegacyRef} from "react";

import { Bubble } from '../../builder';

type TProps = {
    bubble: Bubble,
    incPoints: () => void,
};

export const BubbleComponent: FC<TProps> = (props): ReactElement => {
    const audioEl: LegacyRef<HTMLAudioElement> = useRef(null);
    const { bubble, incPoints } = props;
    const [isPopped, setIsPopped] = useState(bubble.getIsPopped());
    if (isPopped !== bubble.getIsPopped()) setIsPopped(bubble.getIsPopped());
    return (
        <div
            className={bubble.getIsPopped() ? "bubble bubble-popped" : "bubble"}
            style={{backgroundColor: bubble.getColor() }}
            onMouseMove={() => {
                bubble.setIsPopped(true);
                setIsPopped(true);
                if (!isPopped) {
                    incPoints();
                    audioEl.current.play();
                };
            }}
        >
            <audio src={bubble.getSoundSrc()}  ref={audioEl}></audio>
        </div>
    )
}
