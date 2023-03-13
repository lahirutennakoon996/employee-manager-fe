export default function BasicModal({title, body, cancelText, confirmText, confirmAction}) {
  return (
    <div className="modal fade" id="basicModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="basicModalLabel">{title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">{cancelText}</button>
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={confirmAction}>
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}