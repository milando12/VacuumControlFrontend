export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export class PostClass {
  constructor(public userId: number,
              public id: number,
              public title: string,
              public body: string) {
  }

  getTitle(){
    return this.title.toUpperCase();
  }
}
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  jwt: string;
};


