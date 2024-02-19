import { Injectable } from '@nestjs/common';
import { Request,Response } from 'express';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    get(): Promise<User[]>{
        return this.userRepository.find();
    }

    create(createUserDTO: CreateUserDTO){
        return this.userRepository.save(createUserDTO);
    }

    update(updateUserDTO: UpdateUserDTO, userId: number){
        return this.userRepository.update(userId, updateUserDTO)
    }

    show(id: number){
        return this.userRepository.findOne({where: {id}});
    }

    delete(userId: number) {
        return this.userRepository.delete(userId);
    }
}
