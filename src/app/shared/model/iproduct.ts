

export interface Iproduct{
    pname : string;
    pstatus : Ipstatus,
    canReturn : 0 | 1,
    pId : string,
    pimg : string
}

export type Ipstatus = 'In Progress' | 'Dispatched' | 'Delivered';