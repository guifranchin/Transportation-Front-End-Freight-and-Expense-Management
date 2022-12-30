<template>
<<<<<<< HEAD
    <nav class="topbar">

        <div> Lista de Frete </div>
        <div>
            <button> Cadastrar </button>
        </div>
    </nav>

    <div class="table-container">
        <div class="flex-table header">
            <div class="flex-row first">Data</div>
            <div class="flex-row">Status Frete</div>
            <div class="flex-row">Cidade Origem</div>
            <div class="flex-row">Cidade Destino</div>
            <div class="flex-row">Caminhao Placa</div>
            <div class="flex-row">Opcao</div>
        </div>
        <div v-for="frete in freteList" class="flex-table row">
            <div class="flex-row first"> {{ frete.cadastrado }} </div>
            <div class="flex-row"> {{ frete.statusFrete }}</div>
            <div class="flex-row"> {{ frete.cidadeOrigem.nome }} </div>
            <div class="flex-row"> {{ frete.cidadeOrigem.nome }}</div>
            <div class="flex-row"> {{ frete.caminhao.placa }}</div>
            <div class="flex-row button-action">
                <button>to</button>
                <button>to</button>
            </div>
        </div>
    </div>

</template>

<script lang="ts">

import { Frete } from '@/model/Frete';
import { FreteClient } from '@/client/Frete.client';
import { Vue } from 'vue-class-component';


export default class FreteList extends Vue {
    private freteClient: FreteClient = new FreteClient()
    public freteList: Frete[] = []

    public mounted(): void {
        this.listarFretes()

    }

    private async listarFretes(): Promise<void> {
        try {
            this.freteList = await this.freteClient.findAll();
        } catch (error) {
            console.log("!XIIII ", error)
        }
    }
}

</script>


<style lang="scss">


.topbar {
    display: flex;
    justify-content: space-between;
}


$table-header: #1976D2;
$table-header-border: #1565C0;
$table-border: #d9d9d9;
$row-bg: #f4f2f1;

div {
    box-sizing: border-box;
}

.button-action {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.table-container {
    display: block;
    margin: 2em auto;
    width: 90%;
    max-width: 600px;
}

.flag-icon {
    margin-right: 0.1em;
}

.flex-table {
    display: flex;
    flex-flow: row wrap;
    border-left: solid 1px $table-border;
    transition: 0.5s;

    &:first-of-type {
        border-top: solid 1px $table-header-border;
        border-left: solid 1px $table-header-border;
    }

    &:first-of-type .flex-row {
        background: $table-header;
        color: white;
        border-color: $table-header-border;
    }

    &.row:nth-child(odd) .flex-row {
        background: $row-bg;
    }

    &:hover {
        background: #F5F5F5;
        transition: 500ms;
    }
}

.flex-row {
    width: calc(100% / 6);
    text-align: center;
    padding: 0.5em 0.5em;
    border-right: solid 1px $table-border;
    border-bottom: solid 1px $table-border;
}

.rowspan {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: center;
}

.column {
    display: flex;
    flex-flow: column wrap;
    width: 75%;
    padding: 0;

    .flex-row {
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        padding: 0;
        border: 0;
        border-bottom: solid 1px $table-border;

        &:hover {
            background: #F5F5F5;
            transition: 500ms;
        }
    }
}

.flex-cell {
    width: calc(100% / 3);
    text-align: center;
    padding: 0.5em 0.5em;
    border-right: solid 1px $table-border;

    &:last-child {}
}

@media all and (max-width: 767px) {
    .flex-row {
        width: calc(100% / 3);

        &.first {
            width: 100%;
        }
    }

    .column {
        width: 100%;
    }
}

@media all and (max-width: 430px) {

    .flex-table {
        .flex-row {
            border-bottom: 0;
        }

        .flex-row:last-of-type {
            border-bottom: solid 1px $table-border;
        }
    }

    .header {
        .flex-row {
            border-bottom: solid 1px;
        }
    }

    .flex-row {
        width: 100%; //1px = border right

        &.first {
            width: 100%;
            border-bottom: solid 1px $table-border;
        }
    }

    .column {
        width: 100%;

        .flex-row {
            border-bottom: solid 1px $table-border;
        }
    }

    .flex-cell {
        width: 100%; //1px = border right
    }

}
</style>    
=======
  <div class="center">
    <table>
      <tr>
        <th>Status</th>
        <th>Cidade Origem</th>
        <th>Cidade Destino</th>
        <th>Produto</th>
        <th>Caminhao</th>
        <th>Motorista</th>
        <th>Preço por tonelada</th>
        <th>Ação</th>
      </tr>
      <tr v-for="(frete, index) in freteList" :key="index">
        <th>{{ frete.statusFrete }}</th>
        <th>{{ frete.cidadeOrigem.nome }}</th>
        <th>{{ frete.cidadeDestino.nome }}</th>
        <th>{{ frete.produto.nome }}</th>
        <th>{{ frete.caminhao.placa }}</th>
        <th>{{ frete.motorista.nome }}</th>
        <th>{{ frete.precoTonelada }}</th>
        <th>
          <div v-if="frete.statusFrete === 'CARGA'">
            <a v-bind:href="`/statusTransporte/${frete.id}`">
              <button>T</button>
            </a>
            <a v-bind:href="`/statusInterrompido/${frete.id}`">
              <button>I</button>
            </a>
            <a v-bind:href="`/statusCancelado/${frete.id}`">
              <button>C</button>
            </a>
          </div>

          <div v-if="frete.statusFrete === 'EM_TRANSPORTE'">
            <a v-bind:href="`/statusInterrompido/${frete.id}`">
              <button>I</button>
            </a>
            <a v-bind:href="`/statusDescarga/${frete.id}`">
              <button>D</button>
            </a>
          </div>
          
          <div v-if="frete.statusFrete === 'INTERROMPIDO'">
            
              <button @click="Carga(frete)">CR</button>
            
            <a v-bind:href="`/statusInterrompido/${frete.id}`">
              <button>T</button>
            </a>
            <a v-bind:href="`/statusCancelado/${frete.id}`">
              <button>C</button>
            </a>
          </div>

          <div v-if="frete.statusFrete === 'DESCARGA'">
            <a @click="statusFaturado($event)" :value="frete.id">
              <button>F</button>
            </a>
          </div>

          <div v-if="frete.statusFrete === 'CANCELADO'">
          
              <button @click="Carga(frete)">CR</button>
           
            <a v-bind:href="`/statusInterrompido/${frete.id}`">
              <button>I</button>
            </a>
          </div>

        </th>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Frete } from "@/model/Frete";
import { FreteClient } from "@/client/Frete.client";
import { Vue } from "vue-class-component";

export default class FreteList extends Vue {
  private freteClient: FreteClient = new FreteClient();
  public freteList: Frete[] = [];

  public mounted(): void {
    this.listarFretes();
  }

  private listarFretes(): void {
    this.freteClient.findAll().then(
      (success) => {
        console.log(success);
        this.freteList = success;
      },
      (error) => {
        console.log(error.data);
      }
    );
  }

  public async Carga(frete: Frete){
    this.freteClient.updateStatuEmCarga(frete);
  }

  public async editStatusFrete(index: number, event: any) {
    try {
      const frete = this.freteList[index];
      frete.statusFrete = event.target.value;
      await this.freteClient.update(frete);
      this.listarFretes();
    } catch (error) { }
  }

  public statusFaturado(event: any){
    try {
      this.freteClient.updateStatusFaturado(event.target.value)
      this.listarFretes()
    } catch (error: any) {
      console.log(error);
    }
  }

  //   public getStatusFreteName(status: StatusFrete) {
  //     return StatusFrete[status];
  //   }
}
</script>

<style>
.center {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
}

.form {
  padding: 20px;
  border: 1px solid black;
  margin: 20px;
  width: 25%;
  display: flex;
  flex-direction: column;
}

table {
  border: 1px solid black;
  border-collapse: collapse;
}

th {
  border: 1px solid black;
  padding: 10px;
}

.inputDiv {
  display: flex;
  margin-top: 15px;
  justify-content: space-between;
}

button {
  margin-top: 15px;
}

p {
  margin-right: 10px;
}

.error {
  border-color: red;
}

.normal {
  border-color: black;
}

.table {
  display: flex;
  flex-direction: row;
}
</style>
>>>>>>> master
