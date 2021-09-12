import { IMessageComposer } from '../../../../../core/communication/messages/IMessageComposer';

export class PurchaseFromCatalogAsGiftComposer implements IMessageComposer<ConstructorParameters<typeof PurchaseFromCatalogAsGiftComposer>>
{
    private _data: ConstructorParameters<typeof PurchaseFromCatalogAsGiftComposer>;

    constructor(pageId: number, itemId: number, extraData: string, receivingName: string, giftMessage: string, spriteId: number, boxId: number, ribbonId: number, anonymousGift: boolean)
    {
        this._data = [pageId, itemId, extraData, receivingName, giftMessage, spriteId, boxId, ribbonId, anonymousGift];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}
