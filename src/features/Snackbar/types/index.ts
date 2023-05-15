
export type Snackbar = {
    id: string,
    status: 'processing' | 'success' | 'error',
    message: string,
}

export type SnackbarsInitialState = {
    snackbars: Snackbar[]
}