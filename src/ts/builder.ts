'use strict';

export class Bubble {
    readonly color: string;
    readonly soundSrc: string;
    private isPopped: boolean;

    constructor(color: string, soundSrc: string) {
        this.isPopped = false;
        this.color = color;
        this.soundSrc = soundSrc;
    }

    public getColor(): string {
        return this.color;
    }

    public getIsPopped(): boolean {
        return this.isPopped;
    }

    public getSoundSrc(): string {
        return this.soundSrc;
    }

    public setIsPopped(isPopped: boolean): void {
        this.isPopped = isPopped;
    }
}

export abstract class Builder {
    protected bubbles: Bubble[];

    protected constructor() {
        this.bubbles = [];
    }

    public abstract createBubbles(): void;
    public getBubbles(): Bubble[] {
        return this.bubbles;
    }
    public restartBubbles() {
        this.bubbles.forEach(bubble => bubble.setIsPopped(false));
    }

}

export class BlueBubblesBuilder extends Builder {
    constructor() {
        super();
    }
    createBubbles(): void {
        for (let i = 0; i < 34; i++) {
            this.bubbles.push(new Bubble('#268BD2', "resources/popSound.mp3"))
        }
    }
}

export class GreenBubblesBuilder extends Builder {
    constructor() {
        super();
    }
    createBubbles(): void {
        for (let i = 0; i < 34; i++) {
            this.bubbles.push(new Bubble('#1EA198', "resources/popSound.mp3"))
        }
    }
}

export class YellowBubblesBuilder extends Builder {
    constructor() {
        super();
    }
    createBubbles(): void {
        for (let i = 0; i < 34; i++) {
            this.bubbles.push(new Bubble('#CEA627', "resources/popSound.mp3"))
        }
    }
}

export class BeigeBubblesBuilder extends Builder {
    constructor() {
        super();
    }
    createBubbles(): void {
        for (let i = 0; i < 34; i++) {
            this.bubbles.push(new Bubble('#FDF6E3', "resources/popSound.mp3"))
        }
    }
}

export class PurpleBubblesBuilder extends Builder {
    constructor() {
        super();
    }
    createBubbles(): void {
        for (let i = 0; i < 34; i++) {
            this.bubbles.push(new Bubble('#9698D6', "resources/popSound.mp3"))
        }
    }
}

export class Director {
    createBubbles(builder: Builder): Bubble[] {
        builder.createBubbles();
        return builder.getBubbles();
    }
    restartBubbles(builder: Builder): Bubble[] {
        builder.restartBubbles();
        return builder.getBubbles();
    }
}
