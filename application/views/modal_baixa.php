    <!-- Modal -->
    <div class='modal fade hmodal-info' id='modal_baixa' tabindex='-1' role='dialog' aria-hidden='true'>
        <div class='modal-dialog modal-sm'>
            <div class='modal-content'>
                <div class='color-line'></div>
                <div class='modal-header'>
                    <h4 class='modal-title'>Baixa de Títulos</h4>
                    <small>Informações da Baixa do Título.</small>
                </div>
                <div class='modal-body'>

                    <label>Data de Pagamento</label>
                    <input type='date' id='pagamento' class='form-control campo_baixa_debito' />
                </div>
                <input type='hidden' id='status' value='pago' class='campo_baixa_debito'/>
                <div class='modal-footer'>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>
                        <button type="button" id='baixar_debito' class="btn btn-primary">Baixar</button>
                </div>
            </div>
        </div>
    </div>