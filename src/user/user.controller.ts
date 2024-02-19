import { Body, Controller, Delete, Get, Param, Patch, Post, ParseIntPipe } from '@nestjs/common';
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
    update(@Body() updateUserDTO: UpdateUserDTO, @Param('userId', ParseIntPipe) userId:number ){
        return this.userService.update(updateUserDTO, userId);
    }

    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.show(userId);
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number){
        return this.userService.delete(userId);
    }
}
