    <!-- Modal -->
    <div class='modal fade hmodal-info' id='modal_dados_bancarios' tabindex='-1' role='dialog' aria-hidden='true'>
        <div class='modal-dialog modal-sm'>
            <div class='modal-content'>
                <div class='color-line'></div>
                <div class='modal-header'>
                    <h4 class='modal-title'>Dados Bancários</h4>
                    <small>Incluir dados bancários.</small>
                </div>
                <div class='modal-body'>

                    <label>Titular</label>
                    <input type='text' id='titular' class='form-control banco' placeholder='Nome completo do titular' />
                    <label>CPF</label>
                    <input type='text' id='cpf_titular' class='form-control banco' placeholder='999.999.999-99' />
                    <label>Banco</label>
                    <input type='text' id='banco' class='form-control banco' placeholder='Nome completo do titular' />
                    <label>Tipo</label>
                    <select id='tipo_conta' class='form-control banco' id='tipo'>
                        <option>Poupança</option>
                        <option>Corrente</option>
                    </select>
                    <label>Agência</label>
                    <input type='text' id='agencia' class='form-control banco' placeholder='Agência' />
                    <label>Conta</label>
                    <input type='text' id='conta' class='form-control banco' placeholder='Número da conta' />
                
                </div>
                <div class='modal-footer'>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        <button type="button" id='salvar_banco' class="btn btn-primary">Salvar</button>
                </div>
            </div>
        </div>
    </div>