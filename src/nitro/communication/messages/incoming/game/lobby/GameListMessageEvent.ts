import { IMessageEvent } from '../../../../../../api';
import { MessageEvent } from '../../../../../../core';
import { GameListMessageParser } from '../../../parser/game/lobby';

export class GameListMessageEvent extends MessageEvent implements IMessageEvent
{
    constructor(callBack: Function)
    {
        super(callBack, GameListMessageParser);
    }

    public getParser(): GameListMessageParser
    {
        return this.parser as GameListMessageParser;
    }
}
