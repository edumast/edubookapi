"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMensagemDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_mensagem_dto_1 = require("./create-mensagem.dto");
class UpdateMensagemDto extends (0, mapped_types_1.PartialType)(create_mensagem_dto_1.CreateMensagemDto) {
}
exports.UpdateMensagemDto = UpdateMensagemDto;
//# sourceMappingURL=update-mensagem.dto.js.map