import { faker } from "@faker-js/faker/.";

export enum OrderStatus {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    SHIPPED = 'SHIPPED',
    DELIVERED = 'DELIVERED',
    CANCELLED = 'CANCELLED'
}

export interface Order {
    id:string;
    customerName: string;
    customerEmail:string;
    items: OrderItem[];
    totalAmount:number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface OrderItem {
    name:string;
    price:number;
    quantity:number;
}