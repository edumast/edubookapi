"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemController = void 0;
const common_1 = require("@nestjs/common");
const mensagem_service_1 = require("./mensagem.service");
const update_mensagem_dto_1 = require("./dto/update-mensagem.dto");
const validate_1 = require("./dto/validate");
let MensagemController = class MensagemController {
    constructor(mensagemService) {
        this.mensagemService = mensagemService;
    }
    create(validate) {
        return this.mensagemService.newmensage(validate);
    }
    findAll() {
        return this.mensagemService.findAll();
    }
    findOne(id) {
        return this.mensagemService.findOne(+id);
    }
    update(id, updateMensagemDto) {
        return this.mensagemService.update(+id, updateMensagemDto);
    }
    remove(id) {
        return this.mensagemService.remove(+id);
    }
};
exports.MensagemController = MensagemController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [validate_1.validate]),
    __metadata("design:returntype", void 0)
], MensagemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MensagemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MensagemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_mensagem_dto_1.UpdateMensagemDto]),
    __metadata("design:returntype", void 0)
], MensagemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MensagemController.prototype, "remove", null);
exports.MensagemController = MensagemController = __decorate([
    (0, common_1.Controller)('mensagem'),
    __metadata("design:paramtypes", [mensagem_service_1.MensagemService])
], MensagemController);
//# sourceMappingURL=mensagem.controller.js.map