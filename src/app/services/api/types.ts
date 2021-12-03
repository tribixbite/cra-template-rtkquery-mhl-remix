export interface User {
    first_name: string
    last_name: string
  }
  
export interface Member {
    user: User
    token: string
  }