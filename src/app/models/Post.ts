export interface Post {
    id: number,
    board_name: string,
    user_id: number,
    title: string,
    body: string,
    created_at: string,
    author: {
        id: number,
        name: string
    }
}