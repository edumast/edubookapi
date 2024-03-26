import { CreateMensagemDto } from './dto/create-mensagem.dto';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
import { mensagem } from '../database/entity/mensagem';
import { validate } from './dto/validate';
export declare class MensagemService {
    repo: import("typeorm").Repository<mensagem>;
    newmensage(validate: validate): any;
    create(createMensagemDto: CreateMensagemDto): string;
    findAll(): Promise<mensagem[]>;
    findOne(id: number): Promise<mensagem[]>;
    update(id: number, updateMensagemDto: UpdateMensagemDto): string;
    remove(id: number): string;
}
