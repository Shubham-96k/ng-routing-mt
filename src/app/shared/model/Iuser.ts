

export interface Iuser {
    userId : string,
    username : string,
    userRole : 'Admin' | 'Candidate',
    userProfile : string 
}

export interface Ilogin{
    email : string,
    password : string;
}