
function ConfirmAction ({ menuRef, toggle, colorConfirm, colorCancel}) {
  return (
    <div ref={menuRef} className="modal_confirm_action">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            Deseja realmente excluir esse registro?
          </div>
          <div className="modal-footer">
            <button className="" onClick={toggle.toggleConfirmAction}>Não</button>
            <button  className="">Sim</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmAction;