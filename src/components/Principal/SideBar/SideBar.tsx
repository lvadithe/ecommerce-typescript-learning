import React from 'react'

type Props = {
    handleClose: (state: number) => void
}

export const SideBar = ({ handleClose }: Props) => {
    return (
        <div
            className="offcanvas offcanvas-end"
            tabIndex={-1} id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            onClick={() => handleClose(1)}
        >
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">carrito de compras</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                Card
            </div>
        </div>
    )
}
