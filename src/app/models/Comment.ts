export interface Comment {
    id: number,
    post_id: number,
    user_id: number,
    body: string,
    created_at: string,
    author: {
        id: number,
        name: string
    }
}