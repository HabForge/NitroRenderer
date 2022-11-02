﻿import { IObjectData } from '../../api';

export interface ISelectedRoomObjectData
{
    id: number;
    category: number;
    operation: string;
    typeId: number;
    instanceData: string;
    stuffData: IObjectData;
    state: number;
    animFrame: number;
    posture: string;
}
