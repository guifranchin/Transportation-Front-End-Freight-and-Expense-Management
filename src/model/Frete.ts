import { AbstractEntity } from "./AbstractEntity"
import { Caminhao } from "./Caminhao"
import { Cidade } from "./Cidade"
import { StatusFrete } from "./enum/StatusFrete"
<<<<<<< HEAD
=======
import { Estado } from "./Estado"
import { Produto } from "./Produto"
>>>>>>> master
import { User } from "./User"

export class Frete extends AbstractEntity{

<<<<<<< HEAD
    produto!: string
=======
    produto!: Produto
>>>>>>> master
    cidadeOrigem!: Cidade
    cidadeDestino!: Cidade
    motorista!: User
    caminhao!: Caminhao
    statusFrete!: StatusFrete
    quilometragemIni!: number
    quilometragemFim!: number
    totalBrutoRecebidoNota!: number
    totalLiquidoRecebido!: number
    pesoInicial!: number
    pesoFinal!: number
    precoTonelada!: number
    observacao!: string
    
}