import type { Disposable, Player } from 'nplayer';
import { EVENT } from '../utils';
import { Bullet, BulletOption } from './bullet';
export interface DanmakuOptions {
    disable?: boolean;
    blocked?: Array<'scroll' | 'top' | 'bottom' | 'color'>;
    fontsize?: number;
    fontsizeScale?: number;
    opacity?: number;
    speed?: number;
    area?: 0.25 | 0.5 | 0.75 | 1;
    unlimited?: boolean;
    bottomUp?: boolean;
    colors?: string[];
    duration?: number;
    items?: BulletOption[];
    zIndex?: number;
    persistOptions?: boolean;
    isDefaultColor?: (color: string) => boolean;
    discard?: (b: BulletOption) => boolean;
}
export declare const defaultOptions: () => Required<DanmakuOptions>;
export declare class Danmaku implements Disposable {
    private player;
    private _opts?;
    element: HTMLElement;
    opts: Required<DanmakuOptions>;
    enabled: boolean;
    paused: boolean;
    track: number;
    trackHeight: number;
    private bulletPool;
    private aliveBullets;
    private scrollBullets;
    private topBullets;
    private bottomBullets;
    private items;
    private pos;
    private prevPauseTime;
    constructor(player: Player, _opts?: DanmakuOptions | undefined);
    get width(): number;
    get currentTime(): number;
    get playbackRate(): number;
    get fontsize(): number;
    get speedScale(): number;
    private createBullet;
    private getShortestTrack;
    private getEmptyTrack;
    private shouldDiscard;
    private fire;
    private updateTrack;
    private onSeeked;
    private storeOptions;
    recycleBullet(bullet: Bullet): void;
    private insert;
    send(opts: BulletOption): void;
    pause: () => void;
    resume: () => void;
    getItems(): BulletOption[];
    addItem(opts: BulletOption): number;
    appendItems(items: BulletOption[]): void;
    resetItems(items: BulletOption[]): void;
    updateOpacity(opacity?: number): void;
    updateFontsize(scale?: number): void;
    updateArea(area: Required<DanmakuOptions>['area']): void;
    updateUnlimited(unlimited: boolean): void;
    updateBottomUp(bottomUp: boolean): void;
    updateSpeed(v: number): void;
    blockType(type: Required<DanmakuOptions>['blocked'][0]): void;
    allowType(type: Parameters<Danmaku['blockType']>[0]): void;
    resetOptions(): void;
    clearScreen(): void;
    enable(): void;
    disable(): void;
    dispose(): void;
    EVENT: typeof EVENT;
}
