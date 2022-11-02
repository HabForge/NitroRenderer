import { IMessageDataWrapper, IObjectData, IRoomObjectModel, ObjectDataKey } from '../../../../../api';
import { RoomObjectVariable } from '../../RoomObjectVariable';
import { ObjectDataBase } from '../ObjectDataBase';

export class EmptyDataType extends ObjectDataBase implements IObjectData
{
    public static FORMAT_KEY = ObjectDataKey.EMPTY_KEY;

    private _state: string;

    public parseWrapper(wrapper: IMessageDataWrapper): void
    {
        if (!wrapper) return;

        this._state = '';

        super.parseWrapper(wrapper);
    }

    public writeRoomObjectModel(model: IRoomObjectModel): void
    {
        super.writeRoomObjectModel(model);

        model.setValue(RoomObjectVariable.FURNITURE_DATA_FORMAT, EmptyDataType.FORMAT_KEY);
    }

    public getLegacyString(): string
    {
        return this._state;
    }

    public compare(data: IObjectData): boolean
    {
        return super.compare(data);
    }
}
