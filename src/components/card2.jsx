import React from "react"

class Card extends React.Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        {/* menampilkan gambar*/}
                        <div className="col-5">
                            <img src={this.props.gambar} className="img" height="200" />
                        </div>
                        {/* menampilkan deskripsi */}
                        <div className="col-6">
                            <h5 className="text-info">

                                {this.props.nama}
                            </h5>

                            <h6 className="text-dark">
                                Harga: {this.props.harga}
                            </h6>

                            <h6 className="text-dark">

                                Jumlah: {this.props.jumlah}
                            </h6>

                            <h6 className="text-danger">
                                Total: Rp.{this.props.total}
                            </h6>
                            {/* button untuk mengedit */}
                            <button className="btn btn-sm btn-info m-1" onClick={this.props.onEdit}>
                                Edit
                            </button>
                            {/* button untuk menghapus */}
                            <button className="btn btn-sm btn-danger m-1" onClick={this.props.onDrop}>
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;