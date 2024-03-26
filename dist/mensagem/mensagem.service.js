"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemService = void 0;
const common_1 = require("@nestjs/common");
const data_source_1 = require("../database/data-source");
const mensagem_1 = require("../database/entity/mensagem");
let MensagemService = class MensagemService {
    constructor() {
        this.repo = data_source_1.AppDataSource.getRepository(mensagem_1.mensagem);
    }
    newmensage(validate) {
        const user = { username: 'kenji', password: 'jurico80' };
        if (validate.username === user.username && validate.password === user.password) {
            let newpost = new mensagem_1.mensagem;
            newpost.created_at = validate.created_at;
            newpost.id = validate.id;
            newpost.text = validate.text;
            newpost.user = validate.username1;
            return this.repo.save(newpost);
        }
        else {
            throw new common_1.UnauthorizedException();
        }
    }
    create(createMensagemDto) {
        return 'This action adds a new mensagem';
    }
    findAll() {
        return this.repo.find();
    }
    findOne(id) {
        return this.repo.findBy({
            id: id
        });
    }
    update(id, updateMensagemDto) {
        return `This action updates a #${id} mensagem`;
    }
    remove(id) {
        return `This action removes a #${id} mensagem`;
    }
};
exports.MensagemService = MensagemService;
exports.MensagemService = MensagemService = __decorate([
    (0, common_1.Injectable)()
], MensagemService);
//# sourceMappingURL=mensagem.service.js.map