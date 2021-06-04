'use strict';

import React, { FC, ReactElement, useState, useEffect } from "react";

import {
    Bubble,
    Director,
    BeigeBubblesBuilder,
    GreenBubblesBuilder,
    PurpleBubblesBuilder,
    YellowBubblesBuilder,
    BlueBubblesBuilder,
    Builder } from '../../builder';
import { BubbleComponent } from "../bubbleComponent/bubbleComponent";

type TProps = {};

const director: Director = new Director();

const blueBubblesBuilder: Builder = new BlueBubblesBuilder();
const greenBubblesBuilder: Builder = new GreenBubblesBuilder();
const yellowBubblesBuilder: Builder = new YellowBubblesBuilder();
const beigeBubblesBuilder: Builder = new BeigeBubblesBuilder();
const purpleBubblesBuilder: Builder = new PurpleBubblesBuilder();
const blueBubblesBuilderSecond: Builder = new BlueBubblesBuilder();
const greenBubblesBuilderSecond: Builder = new GreenBubblesBuilder();
const yellowBubblesBuilderSecond: Builder = new YellowBubblesBuilder();

const blueBubblesList: Bubble[] = director.createBubbles(blueBubblesBuilder);
const greenBubblesList: Bubble[] = director.createBubbles(greenBubblesBuilder);
const yellowBubblesList: Bubble[] = director.createBubbles(yellowBubblesBuilder);
const beigeBubblesList: Bubble[] = director.createBubbles(beigeBubblesBuilder);
const purpleBubblesList: Bubble[] = director.createBubbles(purpleBubblesBuilder);
const blueBubblesListSecond: Bubble[] = director.createBubbles(blueBubblesBuilderSecond);
const greenBubblesListSecond: Bubble[] = director.createBubbles(greenBubblesBuilderSecond);
const yellowBubblesListSecond: Bubble[] = director.createBubbles(yellowBubblesBuilderSecond);

export const App: FC<TProps> = (): ReactElement => {
    const [blueBubbles, setBlueBubbles] = useState(blueBubblesList);
    const [greenBubbles, setGreenBubbles] = useState(greenBubblesList);
    const [yellowBubbles, setYellowBubbles] = useState(yellowBubblesList);
    const [beigeBubbles, setBeigeBubbles] = useState(beigeBubblesList);
    const [purpleBubbles, setPurpleBubbles] = useState(purpleBubblesList);
    const [blueBubblesSecond, setBlueBubblesSecond] = useState(blueBubblesListSecond);
    const [greenBubblesSecond, setGreenBubblesSecond] = useState(greenBubblesListSecond);
    const [yellowBubblesSecond, setYellowBubblesSecond] = useState(yellowBubblesListSecond);

    useEffect(() => {}, [blueBubbles])

    const [points, setPoints] = useState(0);
    const [isRestart, setIsRestart] = useState(false);
    const incPoints = (points): void => setPoints(++points);
    const restart = (): void => {
        director.restartBubbles(blueBubblesBuilder);
        director.restartBubbles(greenBubblesBuilder);
        director.restartBubbles(yellowBubblesBuilder);
        director.restartBubbles(beigeBubblesBuilder);
        director.restartBubbles(purpleBubblesBuilder);
        director.restartBubbles(blueBubblesBuilderSecond);
        director.restartBubbles(greenBubblesBuilderSecond);
        director.restartBubbles(yellowBubblesBuilderSecond);
        setIsRestart(!isRestart);
    }

    const getBubblesList = (bubbles: Bubble[]): React.ReactNode => {
        let bubbleList: React.ReactNode[] = [];
        bubbles.forEach((bubble, i) => {
            bubbleList.push(<BubbleComponent bubble={bubble} key={i} incPoints={() => incPoints(points)} />)
        })
        return bubbleList;
    }
    return (
        <div className="app">
            <div className="main">
                <div className="main-grid">
                    {getBubblesList(blueBubbles)}
                    {getBubblesList(greenBubbles)}
                    {getBubblesList(yellowBubbles)}
                    {getBubblesList(beigeBubbles)}
                    {getBubblesList(purpleBubbles)}
                    {getBubblesList(yellowBubblesSecond)}
                    {getBubblesList(greenBubblesSecond)}
                    {getBubblesList(blueBubblesSecond)}
                </div>
            </div>
            <div className="menu">
                <span>Pop points: <span className="menu-points">{points}</span> </span>
                <img src="resources/restart.svg" alt="restart" onClick={restart} />
            </div>
        </div>
    )
}
