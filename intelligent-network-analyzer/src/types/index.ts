export interface Router {
    id: string;
    hostname: string;
    ipAddress: string;
    model: string;
}

export interface Switch {
    id: string;
    hostname: string;
    ipAddress: string;
    model: string;
}

export interface Firewall {
    id: string;
    hostname: string;
    ipAddress: string;
    model: string;
}

export interface LoadBalancer {
    id: string;
    hostname: string;
    ipAddress: string;
    model: string;
}

export interface Server {
    id: string;
    hostname: string;
    ipAddress: string;
    loadBalancerId: string;
}