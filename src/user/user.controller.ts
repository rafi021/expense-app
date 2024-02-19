import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { Request,Response } from 'express';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){}
    @Get()
    getUsers(){
        return this.userService.get();
    }

    @Post()
    store(@Body() createUserDTO: CreateUserDTO){
        return this.userService.create(createUserDTO)
    }

    @Patch('/:userId')
    update(@Body() updateUserDTO: UpdateUserDTO, @Param() param: {userId: number}){
        return this.userService.update(updateUserDTO, param);
    }

    @Get('/:userId')
    getUser(@Param() param: {userId: number}){
        return this.userService.show(param);
    }

    @Delete('/:userId')
    deleteUser(@Param() param: {userId: number}){
        return this.userService.delete(param);
    }
}
