import { Injectable } from '@nestjs/common';
import { Request,Response } from 'express';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {
    get(){
        return { name: "rafi", email: "rafi021@gmail.com"};
    }

    create(createUserDTO: CreateUserDTO){
        return createUserDTO;
    }

    update(updateUserDTO: UpdateUserDTO, param: {userId: number}){
        return {
            body: updateUserDTO,
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
