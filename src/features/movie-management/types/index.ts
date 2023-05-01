
export type MovieInfo = {
    title: string,
    description: string,
    price: number,
    quantity: number,
    rentalExpiration: string,
    _id: string,
}

export type InputEvents = {
    onTitleChange?: (title: string) => void,
    onDescriptionChange?: (description: string) => void,
    onQuantityChange?: (quantity: number) => void,
    onPriceChange?: (price: number) => void,
    onExpirationChange?: (rentalExpiration: string) => void,
}

export type MoviesState = {
    movies: MovieInfo[],
    isEditorOpen: boolean,
    movieInfo: MovieInfo,
}