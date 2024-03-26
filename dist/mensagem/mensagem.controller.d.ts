import { MensagemService } from './mensagem.service';
import { UpdateMensagemDto } from './dto/update-mensagem.dto';
import { validate } from './dto/validate';
export declare class MensagemController {
    private readonly mensagemService;
    constructor(mensagemService: MensagemService);
    create(validate: validate): any;
    findAll(): Promise<import("src/database/entity/mensagem").mensagem[]>;
    findOne(id: string): Promise<import("src/database/entity/mensagem").mensagem[]>;
    update(id: string, updateMensagemDto: UpdateMensagemDto): string;
    remove(id: string): string;
}
