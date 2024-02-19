import { Injectable } from '@nestjs/common';
import { Request,Response } from 'express';

@Injectable()
export class UserService {
    get(){
        return { name: "rafi", email: "rafi021@gmail.com"};
    }

    create(req: Request){
        return req.body;
    }

    update(req: Request, param: {userId: number}){
        return {
            body: req.body,
            param
        };
    }

    show(param: {userId: number}){
        return param;
    }

    delete(param: { userId: number }) {
        return param;
    }
}
