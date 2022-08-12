
export interface IImageType {
    src: string
    alt?: string
}

export interface IButtonType {
    text:string
    url:string
}
export interface ISlideItemType {
    text:string
    header:string
    img: IImageType
    button: IButtonType
}

export interface ISlideType extends Array<ISlideItemType> {}