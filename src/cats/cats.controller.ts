import { Controller, Get, Post, Put, Delete, Query, Body, Param } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(): string {
        return "This action return all cats";
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
    }

    @Post()
    async create(@Body() CreateCatDto: CreateCatDto) {
        return "This action add a new cat";
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() UpdateCatDto: UpdateCatDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }

}
