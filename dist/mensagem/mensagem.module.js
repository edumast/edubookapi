"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensagemModule = void 0;
const common_1 = require("@nestjs/common");
const mensagem_service_1 = require("./mensagem.service");
const mensagem_controller_1 = require("./mensagem.controller");
let MensagemModule = class MensagemModule {
};
exports.MensagemModule = MensagemModule;
exports.MensagemModule = MensagemModule = __decorate([
    (0, common_1.Module)({
        controllers: [mensagem_controller_1.MensagemController],
        providers: [mensagem_service_1.MensagemService],
    })
], MensagemModule);
//# sourceMappingURL=mensagem.module.js.map