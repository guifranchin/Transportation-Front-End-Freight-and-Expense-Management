<template>
    <div>
        <h1>Cadastrar</h1>
        <form>
            <div>
                <div>
                    <label>Cidade Origem</label>
                    <select id="CidadeOrigem" name="cidadeOrigem">
                        <div v-for="cidade in cidadesList">
                            <option value=cidade.id>cidade.nome</option>
                        </div>
                    </select>
                </div>
                <div>
                    <label>Cidade Destino</label>
                    <select id="CidadeDestino" name="cidadeDestino">
                        <div v-for="cidade in cidadesList">
                            <option value=cidade.id>cidade.nome</option>
                        </div>
                    </select>
                </div>
                <div>
                    <label>Produto</label>
                    <input type="text" id="Produto" name="produto">
                </div>
                <div>
                    <label>Caminhao</label>
                    <select id="Caminhao" name="caminhao">
                        <div v-for="caminhao in caminhaoList">
                            <option value=caminhao.id>caminhao.placa</option>
                        </div>
                    </select>
                </div>
                <div>
                    <label>Motorista</label>
                    <select id="Motorista" name="motorista">
                        <div v-for="motorista in motoristaList">
                            <option value=motorista.id>motorista.nome</option>
                        </div>
                    </select>
                </div>
                <div>
                    <label>Preco por tonelada</label>
                    <input type="text" id="PrecoPorTonelada" name="precoPorTonelada">
                </div>
            </div>
            <div>
                <button type="submit">Enviar</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">

</script>

<style>

</style>    