import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
import { AppDataSource } from '../../../src/data-source';
import { mensagem } from '../../../src/entity/mensagem';
import { validate } from './dto/validate';



@Injectable()
export class MensagemService {
  repo= AppDataSource.getRepository(mensagem)
  
  newmensage(validate:validate
    ): any
    {
    const user = { username: 'kenji', password: 'jurico80' };
    if (validate.username === user.username && validate.password === user.password) {
      let newpost= new mensagem;
      newpost.created_at=validate.created_at
      newpost.id=validate.id
      newpost.text=validate.text
      newpost.user=validate.username1
      return this.repo.save(newpost)
    } else {
      throw new UnauthorizedException();
    }
  }
  
  create(createMensagemDto: CreateMensagemDto) {
    return 'This action adds a new mensagem';
  }

  findAll() {
    return this.repo.find();
  }
  
  findOne(id: number) {
    return this.repo.findBy({
      id:id
    });
  }

  update(id: number, updateMensagemDto: UpdateMensagemDto) {
    return `This action updates a #${id} mensagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} mensagem`;
  }
}
