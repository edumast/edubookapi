import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MensagemService } from './mensagem.service';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
import { validate } from './dto/validate';


@Controller('mensagem')
export class MensagemController {
  constructor(private readonly mensagemService: MensagemService) {}

  @Post()
  create(@Body() validate:validate) {
    return this.mensagemService.newmensage(validate);
  }

  @Get()
  findAll() {
    return this.mensagemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mensagemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMensagemDto: UpdateMensagemDto) {
    return this.mensagemService.update(+id, updateMensagemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mensagemService.remove(+id);
  }
}
